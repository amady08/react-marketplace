import React, { memo, useEffect, useState } from 'react'
import * as cx from 'classnames'
import useStyles from './styles'
import {
  CircularProgress,
} from '@material-ui/core'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  lottieColorSelector,
  strokePercentSelector,
  editorLottieChangementSelector,
} from 'redux/modules/global/selectors'
import PropTypes from 'prop-types'
import cloneDeep from 'lodash/cloneDeep'
import Lottie from 'react-lottie'
import isEqual from 'lodash/isEqual'

const LibraryLottiePlayer = memo(({
  className,
  path,
  loop,
  autoplay,
  hideLoader,
  viewMode,
  fetchData,
  lottieColor,
  strokePercent,
  editorLottieChangement,
  isBasedEditor,
}) => {
  const classes = useStyles()
  const [loaderOpen, setLoaderOpen] = useState(true)
  const [originData, setOriginData] = useState(null)
  const [animationData, setAnimationData] = useState(null)
  const [isPaused, setIsPaused] = useState(true)

  const handleHover = (e) => {
    setIsPaused(false)
  }
  const handleLeave = (e) => {
    setIsPaused(true)
  }

  useEffect(() => {
    if (path) {
      const init = async () => {
        setLoaderOpen(true)
        const pathData = await fetch(path).then(res => res.json()).then(jsondata => jsondata)
        setOriginData(pathData)
        setLoaderOpen(false)
      }
      path && init()
    }
  }, [path])

  const rgbToValue = (value) => {
    return 0.00390625 * value
  }

  useEffect(() => {
    if (originData) {
      let pathData = cloneDeep(originData)

      if (viewMode === 'Icons' && !isBasedEditor) {
        if (pathData.layers[0].ef) {
          const originStrokeValue = pathData.layers[0].ef[0].ef[0].v.k
          const strokeValue = (originStrokeValue / 50) * strokePercent
          pathData.layers[0].ef[0].ef[0].v.k = strokeValue
          pathData.layers[0].ef[1].ef[0].v.k = [
            rgbToValue(lottieColor.rgb[0]),
            rgbToValue(lottieColor.rgb[1]),
            rgbToValue(lottieColor.rgb[2]),
            1,
          ]
        }
      } else if (viewMode === 'Icons' && isBasedEditor === true) {
        const { stroke, color, scale, speed } = editorLottieChangement
        if (pathData.layers[0].ef) {
          const originStrokeValue = pathData.layers[0].ef[0].ef[0].v.k
          const strokeValue = (originStrokeValue / 50) * stroke
          pathData.layers[0].ef[0].ef[0].v.k = strokeValue

          if (pathData.layers[0].ef.length > 2) { // removed after company lotties changed.
            const originScaleValue = pathData.layers[0].ef[2].ef[0].v.k
            const scaleValue = (originScaleValue / 50) * scale
            pathData.layers[0].ef[2].ef[0].v.k = scaleValue
          }

          pathData.layers[0].ef[1].ef[0].v.k = [
            rgbToValue(color.rgb[0]),
            rgbToValue(color.rgb[1]),
            rgbToValue(color.rgb[2]),
            1,
          ]
          pathData.fr *= (speed / 2.5)
        }
      }
      setAnimationData(pathData)
      fetchData && fetchData(JSON.stringify(pathData))
    }
  }, [originData, editorLottieChangement, isBasedEditor, viewMode,
    lottieColor, strokePercent, autoplay, loop, path, fetchData])

  return (
    <div className={cx(classes.urlroot, className)}>
      <div>
        {
          !hideLoader && loaderOpen &&
          <div className={classes.process}><CircularProgress /></div>
        }
      </div >
      <div
        className={classes.lottieContainer}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <Lottie
          options={{
            autoplay,
            loop: (autoplay || loop) && true,
            animationData,
          }}
          isClickToPauseDisabled
          isStopped={false}
          isPaused={autoplay ? false : isPaused}
        />
      </div>
    </div >

  )
},
  (prevProps, nextProps) => {
    return (
      prevProps.path === nextProps.path &&
      prevProps.strokePercent === nextProps.strokePercent &&
      prevProps.viewMode === nextProps.viewMode &&
      prevProps.isBasedEditor === nextProps.isBasedEditor &&
      isEqual(prevProps.className, nextProps.className) &&
      isEqual(prevProps.lottieColor, nextProps.lottieColor) &&
      (prevProps.viewMode === 'Illustrations' && prevProps.editorLottieChangement.length !== 0)
    )
  })

LibraryLottiePlayer.propTypes = {
  lottieColor: PropTypes.any,
  strokePercent: PropTypes.any,
}

const selector = createStructuredSelector({
  lottieColor: lottieColorSelector,
  strokePercent: strokePercentSelector,
  editorLottieChangement: editorLottieChangementSelector,
})

export default compose(connect(selector, null))(LibraryLottiePlayer)
