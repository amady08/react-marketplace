import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  downloadButton: {
    height: '24px',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '14px',
  },
  gifButton: {
    width: '100%',
    height: '32px',
    fontSize: '14px',
    lineHeight: '16px',
    justifyContent: 'left !important',
    '& > * .MuiButton-endIcon': {
      marginLeft: 'auto'
    },
  },
  dropPaper: {
    background:
      'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
    border: '1px solid transparent',
    borderRadius: '4px !important',
  },
  gifInsideButton: {
    borderRadius: '3px 2px 0px 0px',
    border: 'none !important',
    height: '32px',
    width: '100%',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '16px',
  },
  gifDropList: {
    padding: '0px !important',
    background:
      'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
    border: '1px solid transparent',
    borderRight: 'none',
    borderLeft: 'none',
    borderBottom: 'none',
    borderRadius: '0px 0px 4px 4px',
  },
  gifDropSub: {
    color: '#737373',
    fontWeight: 'bold',
    fontSize: '10px',
    lineHeight: '25px',
    textAlign: 'center',
    cursor: 'default',
  },
  gifDropContentList: {
    width: '100%',
    color: '#333333',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '30px',
    textAlign: 'left',
    paddingLeft: '16px',
  },
  gifDropItem: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  gifBackgroundColor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '42px',
  },
  underLine: {
    background:
      'linear-gradient(#fff,#fff) padding-box, linear-gradient(165deg, #0052FF 0%, #FF00D0 100%) border-box',
    border: '1px solid transparent',
    borderRight: 'none',
    borderLeft: 'none',
    borderTop: 'none',
  }
}))
