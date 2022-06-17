import React, { useEffect, useState } from 'react'
import {
  List,
  ListItem,
  Popover,
  Paper,
} from '@material-ui/core'
import useStyles from './styles'
import * as cx from 'classnames'
import { CustomButton } from 'components/CustomButton'
import svgUpArrow from 'assets/images/Icon/up-arrow.svg'
import svgUpArrowWhite from 'assets/images/Icon/up-arrow_white.svg'
import svgDownArrow from 'assets/images/Icon/down-arrow.svg'
import svgDownArrowWhite from 'assets/images/Icon/down-arrow_white.svg'

const dropContent = {
  Icons: [
    { text: '1000x1000 px', size: '1000' },
    { text: '500x500 px', size: '500' },
    { text: '250x250 px', size: '250' }
  ],
  Illustrations: [
    { text: '960x540 px', size: '960' },
    { text: '640x360 px', size: '640' },
    { text: '480x272 px', size: '480' }
  ]
}

const GifDropButton = ({
  className,
  onChange,
  viewMode,
}) => {
  const classes = useStyles()
  const [svgArrow, setSvgArrow] = useState(svgDownArrow)
  const [gifButtonOpen, setGifButtonOpen] = useState(false)
  const [selectedText, setSelectedText] = useState(dropContent[viewMode][1].text)
  const [anchorEl, setAnchorEl] = useState(null)
  const [dropWidth, setDropWidth] = useState(100)

  useEffect(() => {
    setDropWidth(document.querySelector('#gif-button').offsetWidth)
  }, [setDropWidth])

  const setGifButtonArrow = (mode) => {
    if (gifButtonOpen) {
      setSvgArrow(mode === 'enter' ? svgUpArrowWhite : svgUpArrow)
    } else {
      setSvgArrow(mode === 'enter' ? svgDownArrowWhite : svgDownArrow)
    }
  }

  const setGifInsideButtonArrow = (mode) => {
    setSvgArrow(mode === 'enter' ? svgUpArrowWhite : svgUpArrow)
  }

  const handleGifToggle = (e) => {
    setGifButtonOpen(!gifButtonOpen)
    setSvgArrow(!gifButtonOpen ? svgUpArrowWhite : svgDownArrowWhite)
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setGifButtonOpen(false)
    setAnchorEl(null)
    setSvgArrow(!gifButtonOpen ? svgUpArrow : svgDownArrow)
  }

  const onClickDownLoad = (key) => (e) => {
    setSelectedText(dropContent[viewMode][key].text)
    onChange(dropContent[viewMode][key].size)
    setGifButtonOpen(false)
  }

  return (
    <div>
      <CustomButton
        className={cx(classes.downloadButton, classes.gifButton)}
        id='gif-button'
        content={selectedText}
        endIcon={<img src={svgArrow} alt='arrow' />}
        onMouseEnter={() => setGifButtonArrow('enter')}
        onMouseLeave={() => setGifButtonArrow('leave')}
        onClick={handleGifToggle}
        type='outLine'
      />
      <Popover
        open={gifButtonOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Paper className={cx(classes.dropPaper)} elevation={4} style={{
          width: dropWidth
        }}>
          <CustomButton
            className={cx(classes.gifButton, classes.gifInsideButton)}
            content={selectedText}
            endIcon={<img src={svgArrow} alt='arrow' />}
            onMouseEnter={() => setGifInsideButtonArrow('enter')}
            onMouseLeave={() => setGifInsideButtonArrow('leave')}
            onClick={handleGifToggle}
            type={'outLine'}
          />
          <List component='nav' className={classes.gifDropList}>
            {
              dropContent[viewMode].map((item, key) => (
                <div key={key}>
                  <ListItem
                    button
                    style={{ padding: '0px' }}
                    onClick={onClickDownLoad(key)}
                  >
                    <div className={cx(classes.gifDropContentList)}>
                      {item.text}
                    </div>
                  </ListItem>
                </div>
              ))
            }
          </List>
        </Paper>
      </Popover>
    </div>
  )
}

export default GifDropButton
