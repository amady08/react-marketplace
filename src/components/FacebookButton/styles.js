import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    background: '#3C5A99',
    color: 'white',
    borderRadius: '4px',
    textTransform: 'none',
    height: theme.spacing(5),
    width: '100%',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
    marginBottom: theme.spacing(3),
    '&:hover': {
      background: '#496ebc',
    }
  },
  img: {
    position: 'absolute',
    left: '12px'
  }
}))
