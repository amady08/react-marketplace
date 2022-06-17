import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    '@media only screen and (max-width: 600px)': {
      height: '36px',
    }
  },
  fakePaypalButton: {
    width: '150px',
    height: '25px',
    backgroundColor: '#0070ba',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    fontStyle: 'italic',
    borderRadius: '4px',
    textTransform: 'none',
    "&:hover, &:focus": {
      backgroundColor: '#338cc7'
    },
    '@media only screen and (max-width: 600px)': {
      height: '36px',
    }
  }
}))
