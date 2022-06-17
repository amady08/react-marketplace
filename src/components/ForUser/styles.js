import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  center: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: '400px',
    '@media only screen and (max-width: 992px)': {
      width: '100%',
    }
  },
  userType: {
    color: '#0052FF',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    marginBottom: theme.spacing(1),
  },
  title: {
    color: '#C613DB',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '33px',
    marginBottom: theme.spacing(2),
    '@media only screen and (max-width: 600px)': {
      fontSize: '26px',
      lineHeight: '30px',
    }
  },
  description: {
    color: '#333333',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    marginBottom: theme.spacing(2),
  },
  siteButton: {
    height: '32px',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
    '@media only screen and (max-width: 600px)': {
      height: '46px',
      fontSize: '16px',
      lineHeight: '19px',
    }
  },
}))
