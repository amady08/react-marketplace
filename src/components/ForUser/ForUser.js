import React, { useState } from 'react'
import useStyles from './styles'
import { CustomButton } from 'components/CustomButton'
import { setSignupOpen } from 'redux/modules/global/actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { authInfo } from 'helpers/localCheck'
import { CustomAlert } from 'components/CustomAlert'

const ForUser = ({
  setSignupOpen,
  props
}) => {
  const classes = useStyles()
  const { userType, title, description, buttonText } = props
  const [alertOpen, setAlertOpen] = useState(false)

  return (
    <>
      <div className={classes.center}>
        <div className={classes.root}>
          <p className={classes.userType}>{userType}</p>
          <p className={classes.title}>{title}</p>
          <p className={classes.description}>{description}</p>
          <CustomButton
            content={buttonText}
            type='filled'
            className={classes.siteButton}
            onClick={() => {
              !authInfo().user ? setSignupOpen({ open: true }) : setAlertOpen(true)
            }}
          />
        </div>
      </div>
      <CustomAlert
        isOpen={alertOpen}
        type='warning'
        text={`You're already logged in.`}
        onClose={() => setAlertOpen(false)}
      />
    </>
  )
}

const actions = {
  setSignupOpen,
}

export default compose(connect(null, actions))(ForUser)
