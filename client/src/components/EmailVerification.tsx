import React, { useState } from 'react'

export default function EmailVerification(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [eventId, setEventId] = useState('event-1')
  const [status, setStatus] = useState<string | null>(null)
  const [code, setCode] = useState('')

  async function register(e: React.FormEvent){
    e.preventDefault()
    setStatus('Sending verification email...')
    const res = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, eventId }) })
    const data = await res.json()
    if (res.ok) setStatus('Verification email sent. Check your inbox.')
    else setStatus(data.error || 'Registration failed')
  }

  async function verify(e: React.FormEvent){
    e.preventDefault()
    setStatus('Verifying code...')
    const res = await fetch('/api/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, verificationCode: code }) })
    const data = await res.json()
    if (res.ok) setStatus('Verified! Registration complete.')
    else setStatus(data.error || 'Verification failed')
  }

  return (
    <div style={{ maxWidth: 700, margin: '0 auto' }}>
      <h2>Register for an event (prototype)</h2>
      <form onSubmit={register}>
        <div>
          <label>Name</label><br />
          <input value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div>
          <label>Email</label><br />
          <input value={email} onChange={e=>setEmail(e.target.value)} required type='email' />
        </div>
        <div>
          <label>Event</label><br />
          <select value={eventId} onChange={e=>setEventId(e.target.value)}>
            <option value='event-1'>Event 1 (placeholder)</option>
            <option value='event-2'>Event 2 (placeholder)</option>
          </select>
        </div>
        <button type='submit'>Register (send code)</button>
      </form>

      <hr />

      <h3>Verify</h3>
      <form onSubmit={verify}>
        <div>
          <label>Verification Code</label><br />
          <input value={code} onChange={e=>setCode(e.target.value)} required />
        </div>
        <button type='submit'>Verify</button>
      </form>

      {status && <p><strong>Status:</strong> {status}</p>}
    </div>
  )
}