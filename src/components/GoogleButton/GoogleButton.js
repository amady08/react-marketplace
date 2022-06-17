import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import googleIcon from 'assets/images/Icon/google.svg'
import {
  Button,
} from '@material-ui/core'
import useStyles from './styles'
import { googleSignup, googleLogin } from 'redux/modules/auth/actions'
import {
  setSignupOpen,
  setSigninOpen,
  setSuccessOpen,
} from 'redux/modules/global/actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CustomAlert } from 'components/CustomAlert'
import { GOOGLE_CLIENT_ID } from 'helpers/utils'

const GoogleButton = ({
  toLogin,
  toSignup,
  setSignupOpen,
  setSigninOpen,
  setSuccessOpen,
  googleSignup,
  googleLogin,
}) => {
  const classes = useStyles()
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertText, setAlertText] = useState('')

  const responseGoogleSuccess = ({ profileObj }) => {
    if (toSignup) {
      handleGoogleSignup(profileObj)
    } else if (toLogin) {
      handleGoogleLogin(profileObj)
    }
  }
  const responseGoogleFail = (res) => {
    setAlertText(`Invalid google account!`)
    setAlertOpen(true)
  }

  const handleGoogleSignup = ({ name, googleId, email }) => {
    googleSignup({
      body: { name, googleId, email },
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

  const handleGoogleLogin = ({ googleId, email }) => {
    googleLogin({
      body: { googleId, email },
      success: ({ data }) => {
        setSigninOpen({ open: false })
      },
      fail: (err) => {
        setAlertText(err.data.message)
        setAlertOpen(true)
      }
    })
  }

  return (
    <>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        render={renderProps => (
          <Button
            className={classes.root}
            onClick={renderProps.onClick}
          >
            <img src={googleIcon} alt='g' className={classes.img} />
          Continue with Google
          </Button>
        )}
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFail}
      />
      <CustomAlert isOpen={alertOpen} type='error' text={alertText} onClose={() => setAlertOpen(false)} />
    </>
  )
}

GoogleButton.propTypes = {
  setSignupOpen: PropTypes.func,
  setSigninOpen: PropTypes.func,
  setSuccessOpen: PropTypes.func,
  googleSignup: PropTypes.func,
  googleLogin: PropTypes.func,
  toLogin: PropTypes.bool,
  toSignup: PropTypes.bool,
}

const actions = {
  setSignupOpen,
  setSigninOpen,
  setSuccessOpen,
  googleSignup,
  googleLogin,
}

export default compose(connect(null, actions))(GoogleButton)

