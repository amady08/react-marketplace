import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    borderRadius: '4px',
    textTransform: 'none',
    height: theme.spacing(5),
    width: '100%',
    border: '1px solid #dddddd',
    color: '#7A7D85',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
    marginBottom: theme.spacing(1.5),
  },
  img: {
    position: 'absolute',
    left: '12px'
  }
}))
