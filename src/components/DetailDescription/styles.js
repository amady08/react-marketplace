import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {

  },
  title: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '28px',
    lineHeight: '33px',
    marginBottom: theme.spacing(3),
    width: '400px',
    '@media only screen and (max-width: 992px)': {
      width: '100%',
    },
  },
  detailItem: {
    marginBottom: theme.spacing(3),
    width: '390px',
    '@media only screen and (max-width: 992px)': {
      width: '100%',
    }
  },
  detailTitle: {
    display: 'flex',
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '19px',
    marginBottom: theme.spacing(1),
    '@media only screen and (max-width: 600px)': {
      width: '100%',
      marginBottom: theme.spacing(1.5),
    }
  },
  detailDescription: {
    color: '#333333',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
  },
  checkIcon: {
    marginRight: theme.spacing(1),
    userSelect: 'none',
    width: '17px',
    height: '17px',
  }
}))
