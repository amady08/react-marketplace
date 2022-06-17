import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    height: '32px',
    display: 'flex',
  },
  slider: {
    width: '155px',
    '@media only screen and (min-width: 601px) and (max-width: 992px)': {
      width: '100px',
    }
  },
  percentBox: {
    border: '1px solid transparent',
    borderRadius: '4px',
    width: '50px !important',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#333333',
    marginRight: theme.spacing(2),
    background:
      'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
  }

}))
