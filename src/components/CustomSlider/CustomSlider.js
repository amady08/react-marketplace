import React, { useState, useEffect } from 'react'
import useStyles from './styles'
import {
  Slider,
  Tooltip,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { setStrokePercent } from 'redux/modules/global/actions'
import { strokePercentSelector } from 'redux/modules/global/selectors'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

const CustomSlider = ({
  setStrokePercent,
  strokePercent,
  isOnEditMode,
  onChange,
  sliderValue,
  maxValue = 100,
  isPercent = true
}) => {
  const classes = useStyles()
  const [value, setValue] = useState(null)
  const [inputValue, setInputValue] = useState(sliderValue)

  useEffect(() => {
    if (sliderValue) {
      setValue(sliderValue / maxValue * 100)
      setInputValue(sliderValue)
    }
  }, [sliderValue, maxValue, setValue])

  useEffect(() => {
    if (!isOnEditMode) {
      setValue(strokePercent)
      setInputValue(strokePercent)
    }
  }, [strokePercent, isOnEditMode])

  const handleSliderChange = (event, newValue) => {
    let tmpVal = maxValue === 100 ? (newValue / 100 * maxValue).toFixed(0) : (newValue / 100 * maxValue).toFixed(2)
    setValue(Number(newValue).toFixed(0))
    setInputValue(tmpVal)
    if (isOnEditMode) {
      onChange(newValue)
    } else {
      setStrokePercent({ value: newValue })
    }
  }

  const handleChange = (val) => {
    let numVal = val.value
    let tmp_value = maxValue === 100
      ?
      Number(numVal).toFixed(0)
      :
      (Number(numVal).toFixed(2) / maxValue * 100).toFixed(2)
    handleSliderChange(null, tmp_value)
  }

  return (
    <div className={classes.root}>
      <NumberFormat
        className={classes.percentBox}
        value={inputValue}
        onValueChange={handleChange}
        isNumericString
        suffix={isPercent ? '%' : ''}
        isAllowed={percentLimit(maxValue)}
      />
      <PrettoSlider
        className={classes.slider}
        value={Number(value)}
        onChange={handleSliderChange}
        ValueLabelComponent={ValueLabelComponent}
      />
    </div>
  )
}

CustomSlider.propTypes = {
  strokePercent: PropTypes.any,
  setStrokePercent: PropTypes.func,
}

const actions = {
  setStrokePercent
}

const selector = createStructuredSelector({
  strokePercent: strokePercentSelector,
})

export default compose(connect(selector, actions))(CustomSlider)

const PrettoSlider = withStyles({
  root: {
    color: '#BFC8D8',
    height: 4,
  },
  thumb: {
    height: 16,
    width: 26,
    background: 'linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
    border: '1px solid transparent',
    borderRadius: '4px',
    marginTop: -6,
    marginLeft: -13,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider)

function ValueLabelComponent(props) {
  const { children, open, value } = props

  return (
    <Tooltip arrow open={open} enterTouchDelay={0} placement="top" title={`${Number(value).toFixed(0)}%`}>
      {children}
    </Tooltip>
  )
}

const percentLimit = (maxValue) => (val) => {
  let num = val.value
  if (num > maxValue)
    return false
  return true
}
