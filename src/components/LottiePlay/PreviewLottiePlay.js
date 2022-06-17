import React, { useState } from 'react'
import Lottie from 'react-lottie'
import * as cx from 'classnames'
import useStyles from './styles'

const PreviewLottiePlay = ({ path, autoplay, className }) => {
  const classes = useStyles()
  const [isPaused, setIsPaused] = useState(true)

  const handleHover = (e) => {
    setIsPaused(false)
  }

  const handleLeave = (e) => {
    setIsPaused(true)
  }

  return (
    <div
      className={cx(classes.root, className)}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <Lottie
        options={{
          loop: true,
          autoplay: autoplay,
          path,
        }}
        isPaused={!autoplay && isPaused}
        isClickToPauseDisabled
      />
    </div>
  )
}

export default PreviewLottiePlay
