import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PaymentPlaceholder(){
  const nav = useNavigate()
  return (
    <div>
      <h2>Payment (Placeholder)</h2>
      <p>We reserve this area to integrate Stripe or PayPal in the future.</p>
      <button onClick={()=>nav('/payment/pending')}>Pay (Pending Integration)</button>
    </div>
  )
}