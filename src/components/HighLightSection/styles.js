import { makeStyles } from "@material-ui/styles"

export default makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  title: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '28px',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  description: {
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    marginBottom: theme.spacing(3),
  },
  img: {
    userSelect: 'none',
  },
  lottieMain: {
    width: '335px',
    height: '186px',
    background: '#FFFFFF',
    border: '1px solid #E4E9F2',
    borderRadius: '8px',
    margin: theme.spacing(1)
  },
  lotties: {
    padding: theme.spacing(2),
    width: theme.spacing(9),
    height: theme.spacing(9),
    background: '#FFFFFF',
    border: '1px solid #E4E9F2',
    borderRadius: '8px',
  }
}))
