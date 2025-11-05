import React from 'react'

export default function Captcha({ onToken }: { onToken: (token: string)=>void }){
  return (
    <div style={{ margin: 12, padding: 8, border: '1px dashed #ccc' }}>
      <p>Captcha placeholder (replace with reCAPTCHA/hCaptcha UI)</p>
      <button onClick={()=>onToken('fake-captcha-token')}>Simulate captcha success</button>
    </div>
  )
}