import React from 'react'
import { LinearProgress } from '@material-ui/core'
import useStyles from './styles'

const Loader = () => {
  const classes = useStyles()

  return (
    <div>
      <LinearProgress />
      <div className={classes.loading}></div>
    </div>
  )
}

export default Loader
