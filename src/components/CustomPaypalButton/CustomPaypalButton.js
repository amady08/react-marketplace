import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import useStyles from './styles'
import { PAYPAL_CLIENT_ID } from 'helpers/utils'
const CustomPaypalButton = ({
  info,
  onSuccess,
  onCancel,
  onClick,
}) => {
  const classes = useStyles()
  const handleError = (err) => {
    onCancel()
  }
  const handleApprove = (data, actions) => {
    return actions.subscription.get().then(function (details) {
      onSuccess(details)
    })
  }
  return (
    <div className={classes.root}>
      <PayPalButton
        options={{
          clientId: PAYPAL_CLIENT_ID,
          vault: true,
        }}
        createSubscription={async (data, actions) => {
          onClick()
          return await actions.subscription.create({
            plan_id: info.planId,
            application_context: {
              shipping_preference: 'NO_SHIPPING'
            }
          })
        }}
        amount={info && info.amount}
        onApprove={(data, actions) => handleApprove(data, actions)}
        catchError={(err) => handleError(err)}
        onError={(err) => handleError(err)}
        onCancel={(err) => handleError(err)}
        style={{
          shape: 'rect',
          color: 'blue',
          layout: 'horizontal',
          size: 'medium'
        }}
      />
    </div>
  )
}
export default CustomPaypalButton