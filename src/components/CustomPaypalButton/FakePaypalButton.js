import React from 'react'
import { Button } from '@material-ui/core'
import useStyles from './styles'

const FakePaypalButton = ({ ...props }) => {
  const classes = useStyles()

  return (
    <>
      <Button
        className={classes.fakePaypalButton}
        {...props}
      >PayPal</Button>
    </>
  )
}

export default FakePaypalButton
