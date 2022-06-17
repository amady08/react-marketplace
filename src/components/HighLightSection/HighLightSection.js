import React from 'react'
import {
  Container,
  Grid,
} from '@material-ui/core'
import useStyles from './styles'
import { LibraryLottiePlayer } from 'components/LottiePlay'

const HighLightSection = ({
  title,
  description,
}) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div>
        <Grid
          container
          className={classes.gridContainer}
          spacing={2}
        >
          {
            [...Array(4)].map((ind, key) => {
              return (
                <Grid item xs={3} key={key} >
                  <div className={classes.lotties}>
                    <LibraryLottiePlayer
                      loop
                      justForPlaying
                      hideLoader
                      path={`highlight\\1${key + 1}.json`}
                    />
                  </div>
                </Grid>
              )
            })
          }
          <Grid item xs={12} className={classes.lottieMain}>
            <LibraryLottiePlayer
              loop
              justForPlaying
              hideLoader
              path={`highlight\\main.json`}
            />
          </Grid>
          {
            [...Array(4)].map((ind, key) => {
              return (
                <Grid item xs={3} key={key} >
                  <div className={classes.lotties}>
                    <LibraryLottiePlayer
                      loop
                      justForPlaying
                      hideLoader
                      path={`highlight\\2${key + 1}.json`}
                    />
                  </div>
                </Grid>
              )
            })
          }
          {
            [...Array(4)].map((ind, key) => {
              return (
                <Grid item xs={3} key={key} >
                  <div className={classes.lotties}>
                    <LibraryLottiePlayer
                      loop
                      justForPlaying
                      hideLoader
                      path={`highlight\\3${key + 1}.json`}
                    />
                  </div>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </Container >
  )
}

export default HighLightSection
