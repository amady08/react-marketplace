import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  urlroot: {
    width: '100%',
    height: '100%',
  },
  process: {
    position: 'absolute',
    width: 'calc(100% - 12px)',
    height: 'calc(100% - 12px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  lottieContainer: {
    width: '100%',
    height: '100%',
  }
}))
