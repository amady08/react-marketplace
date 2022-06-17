import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    position: 'relative',
    '@media only screen and (max-width: 600px)': {
      width: '100%',
      padding: theme.spacing(2),
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  lottieArea: {
    width: '56px',
    height: '56px',
    padding: '8px',
    background: '#FFFFFF',
    border: '1px solid #E4E9F2',
    borderRadius: '4px',
    marginRight: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    '@media only screen and (max-width: 600px)': {
      width: '72px',
      height: '72px',
      marginRight: theme.spacing(1),
      borderRadius: '8px',
    }
  },
  content: {
    color: '#333333',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    width: '120px',
    '@media only screen and (max-width: 600px)': {
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '19px',
      width: 'auto',
    }
  },
  date: {
    color: '#333333',
    fontWeight: 'normal',
    fontSize: '10px',
    lineHeight: '12px',
    margin: 'auto',
    '@media only screen and (max-width: 600px)': {
      fontSize: '14px',
      lineHeight: '16px',
    }
  },
  actionButton: {
    marginLeft: 'auto',
    height: theme.spacing(3),
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    '@media only screen and (max-width: 600px)': {
      height: theme.spacing(4),
    }
  },
}))
