import React, { memo } from 'react'
import useStyles from './styles'
import { CustomButton } from 'components/CustomButton'
import { Mobile, Default } from 'containers/ResponseLayout'
import Lottie from 'react-lottie'

const LottieActionInfo = memo(({ type, path, name, date, actionText, doAction }) => {
  const classes = useStyles()
  const handleClick = () => {
    doAction && doAction()
  }

  return (
    <div className={classes.root}>
      <div className={classes.lottieArea}>
        <Lottie
          options={{
            autoplay: true,
            loop: true,
            path,
          }}
        />
      </div>
      <Default>
        <div className={classes.content}>{type}: {name}</div>
        <div className={classes.date}>{date}</div>
      </Default>
      <Mobile>
        <div style={{ height: '40px' }}>
          <div className={classes.content}>{type}: {name}</div>
          <div className={classes.date}>{date}</div>
        </div>
      </Mobile>
      <CustomButton
        content={actionText}
        type='outLine'
        className={classes.actionButton}
        onClick={handleClick}
      />
    </div>
  )
},
  (prevProps, nextProps) => {
    return (
      prevProps.path === nextProps.path
    )
  })

export default LottieActionInfo
