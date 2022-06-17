import React, { useEffect, useState, useRef } from 'react'
import useStyles from './styles'
import tick from 'assets/lottie/Cricle_Tik.json'
import { LottiePlay } from 'components/LottiePlay'

const detail = [
  {
    title: 'Best price guarantee',
    description: `Our pricing model is unbeatable and unique.
     You pay an annual license and can download as much as you want!`
  },
  {
    title: 'Commercial license included',
    description: `With animatly you don't need to worry about the license. You can 
    use everything unlimited, even for commercial projects.`
  },
  {
    title: 'Lirbrary updates included',
    description: `Our team works hard that our customers can benefit from monthly updates.`
  },
  {
    title: 'Fast growing platform',
    description: `We are convinced that animated graphics will be the future of the 
    web. Don't hesitate and become part of the story!`
  }
]

const status = [true, true, true, true]
let timerId = null
let lottieIndex = 0

const DetailDescription = () => {
  const classes = useStyles()
  const [playStatus, setPlayStatus] = useState(status)
  const isMounted = useRef(null)

  useEffect(() => {
    isMounted.current = true
    return () => {
      timerId && clearInterval(timerId)
      timerId = null
      lottieIndex = 0

      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    document.getElementById('detail-description').addEventListener('transitionend', () => {
      if (!timerId) { timerId = setInterval(lottieTime, 2000) }
    })
    const lottieTime = () => {
      lottieIndex > 3 && clearInterval(timerId)
      const tmpStatus = status.slice()
      tmpStatus[lottieIndex] = false
      setPlayStatus(tmpStatus)
      lottieIndex++
    }
  })

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>
        It is made for all who want to be the hero of tomorrow
      </h1>
      {
        detail.map((item, key) => {
          return (
            <div className={classes.detailItem} key={key}>
              <div className={classes.detailTitle}>
                <LottiePlay src={tick} className={classes.checkIcon} stop={playStatus[key]} />
                <div>{item.title}</div>
              </div>
              <p className={classes.detailDescription}>{item.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default DetailDescription
