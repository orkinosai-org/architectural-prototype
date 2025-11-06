import React from 'react'

export default function ArchitecturePage(){
  return (
    <div style={{ maxWidth: 900, margin: '0 auto' }}>
      <h2>Architecture Overview</h2>
      <p>This prototype uses a modular Node.js + Express backend with a React frontend. Key patterns:</p>
      <ul>
        <li>Services: auth, email, storage adapters</li>
        <li>Storage adapter pattern to support Azure Blob or S3-compatible providers</li>
        <li>Idempotency middleware (prototype) with Redis recommended for production</li>
        <li>Translation proxy to LibreTranslate for cross-language feature</li>
        <li>Background jobs are recommended for email and heavy processing (BullMQ + Redis)</li>
      </ul>
      <h3>Future expansion</h3>
      <p>Swap storage providers by setting STORAGE_PROVIDER, move pending tokens to Redis, and persist registrations in Postgres via Drizzle.</p>
    </div>
  )
}