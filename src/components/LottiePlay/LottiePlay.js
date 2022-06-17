import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import * as cx from 'classnames'
import useStyles from './styles'

const LottiePlay = ({ src, path, stop, className }) => {
  const classes = useStyles()
  const [isStopped, setIsStopped] = useState(false)

  useEffect(() => {
    setIsStopped(stop)
  }, [stop])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: path && path,
    animationData: src && src,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div className={cx(classes.root, className)}>
      <Lottie
        options={defaultOptions}
        isStopped={isStopped}
        isClickToPauseDisabled
      />
    </div>
  )
}

export default LottiePlay
