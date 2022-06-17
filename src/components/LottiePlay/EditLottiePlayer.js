import React, { memo, useEffect, useState } from 'react'
import * as cx from 'classnames'
import useStyles from './styles'
import { replaceColor } from 'helpers/lottie'
import cloneDeep from 'lodash/cloneDeep'
import Lottie from 'react-lottie'

const EditLottiePlayer = memo(({
  originData,
  iconColor,
  illustrationColor,
  blinkColor,
  stroke = 50,
  speed = 1,
  scale = 50,
  viewMode,
  autoplay,
  isBlink,
  isStopped,
  onEdit,
  className,
}) => {
  const classes = useStyles()
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    if (originData) {
      let pathData = cloneDeep(originData)

      if (viewMode === 'Icons') {
        const originStrokeValue = pathData.layers[0].ef[0].ef[0].v.k
        const strokeValue = (originStrokeValue / 50) * stroke
        pathData.layers[0].ef[0].ef[0].v.k = strokeValue

        if (pathData.layers[0].ef.length > 2) { // removed after company lotties changed.
          const originScaleValue = pathData.layers[0].ef[2].ef[0].v.k
          const scaleValue = (originScaleValue / 50) * scale
          pathData.layers[0].ef[2].ef[0].v.k = scaleValue
        }

        pathData.layers[0].ef[1].ef[0].v.k = [
          0.00390625 * iconColor[0],
          0.00390625 * iconColor[1],
          0.00390625 * iconColor[2],
          1,
        ]
        pathData.fr *= speed

      } else if (viewMode === 'Illustrations') {
        blinkColor && (pathData = replaceColor(blinkColor.oldValue, blinkColor.newValue, pathData))
        illustrationColor && illustrationColor.forEach(item => {
          pathData = replaceColor(item.oldValue, item.newValue, pathData)
        })
        pathData.fr *= speed

        const layerCount = pathData.layers[0].ef.length
        if (layerCount > 2) {
          const originScaleValue = pathData.layers[0].ef[layerCount - 1].ef[0].v.k
          const scaleValue = (originScaleValue / 50) * scale
          pathData.layers[0].ef[layerCount - 1].ef[0].v.k = scaleValue
        }
      }

      onEdit && !isBlink && onEdit(JSON.stringify(pathData))
      setAnimationData(pathData)
    }
  }, [originData, viewMode, iconColor, illustrationColor, speed, stroke,
    scale, isBlink, blinkColor, setAnimationData, onEdit])

  return (
    <div className={cx(classes.urlroot, className)}>
      <div className={classes.lottieContainer} >
        <Lottie
          options={{
            loop: autoplay && true,
            autoplay,
            animationData,
          }}
          isClickToPauseDisabled
          isStopped={isStopped && isStopped}
        />
      </div>
    </div >

  )
},
  (prevProps, nextProps) => {
    return (
      prevProps.originData === nextProps.originData &&
      prevProps.stroke === nextProps.stroke &&
      prevProps.speed === nextProps.speed &&
      prevProps.scale === nextProps.scale &&
      prevProps.iconColor === nextProps.iconColor &&
      prevProps.blinkColor === nextProps.blinkColor &&
      prevProps.illustrationColor === nextProps.illustrationColor
    )
  })

export default EditLottiePlayer
