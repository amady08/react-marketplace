import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
  },
  loading: {
    position: 'absolute',
    background: 'white',
    height: 'calc(100% - 4px)',
    width: '100%',
    opacity: '0.3',
    zIndex: '1',
  }
}))
