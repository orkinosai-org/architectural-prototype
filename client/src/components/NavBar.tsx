import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(){
  return (
    <nav style={{ padding: 12, background: '#111827', color: '#fff' }}>
      <div style={{ display: 'flex', gap: 12 }}>
        <Link to='/' style={{ color: '#fff' }}>Translate</Link>
        <Link to='/verify' style={{ color: '#fff' }}>Verify</Link>
        <Link to='/dashboard' style={{ color: '#fff' }}>Dashboard</Link>
        <Link to='/payment' style={{ color: '#fff' }}>Payment</Link>
        <Link to='/ai' style={{ color: '#fff' }}>AI Support</Link>
        <Link to='/architecture' style={{ color: '#fff' }}>Architecture</Link>
      </div>
    </nav>
  )
}