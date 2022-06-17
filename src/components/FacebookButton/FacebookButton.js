import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import fbIcon from 'assets/images/Icon/fb.svg'
import {
  Button,
} from '@material-ui/core'
import useStyles from './styles'
import { facebookSignup, facebookLogin } from 'redux/modules/auth/actions'
import {
  setSignupOpen,
  setSigninOpen,
  setSuccessOpen,
} from 'redux/modules/global/actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CustomAlert } from 'components/CustomAlert'
import { FACEBOOK_APP_ID } from 'helpers/utils'

const FacebookButton = ({
  toLogin,
  toSignup,
  setSignupOpen,
  setSigninOpen,
  setSuccessOpen,
  facebookSignup,
  facebookLogin,
}) => {
  const classes = useStyles()
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertText, setAlertText] = useState('')

  const responseFacebookSuccess = (res) => {
    if (toSignup) {
      handleFacebookSignup(res)
    } else if (toLogin) {
      handleFacebookLogin(res)
    }
  }

  const responseFacebookFail = (res) => {
    setAlertText(`Invalid Facebook account!`)
    setAlertOpen(true)
  }

  const handleFacebookLogin = ({ id, email }) => {
    facebookLogin({
      body: { facebookId: id, email },
      success: ({ data }) => {
        setSigninOpen({ open: false })
      },
      fail: (err) => {
        setAlertText(err.data.message)
        setAlertOpen(true)
      }
    })
  }

  const handleFacebookSignup = ({ name, id, email }) => {
    facebookSignup({
      body: { name, facebookId: id, email },
      success: ({ data }) => {
        if (data.user.oauthed) {
          setAlertText('You have no account.')
        }
        setSignupOpen({ open: false })
        setSigninOpen({ open: false })
        setSuccessOpen({ open: true })
      },
      fail: (err) => {
        setAlertText(err.data.message)
        setAlertOpen(true)
      }
    })
  }

  return (
    <>
      <FacebookLogin
        appId={FACEBOOK_APP_ID}
        callback={responseFacebookSuccess}
        render={renderProps => (
          <Button
            className={classes.root}
            onClick={renderProps.onClick}
          >
            <img src={fbIcon} alt='f' className={classes.img} />
          Continue with Facebook
          </Button>
        )}
        fields='name,email'
        onFailure={responseFacebookFail}
      />
      <CustomAlert isOpen={alertOpen} type='error' text={alertText} onClose={() => setAlertOpen(false)} />
    </>
  )
}

FacebookButton.propTypes = {
  setSignupOpen: PropTypes.func,
  setSigninOpen: PropTypes.func,
  setSuccessOpen: PropTypes.func,
  facebookSignup: PropTypes.func,
  facebookLogin: PropTypes.func,
  toLogin: PropTypes.bool,
  toSignup: PropTypes.bool,
}

const actions = {
  setSignupOpen,
  setSigninOpen,
  setSuccessOpen,
  facebookSignup,
  facebookLogin,
}

export default compose(connect(null, actions))(FacebookButton)
