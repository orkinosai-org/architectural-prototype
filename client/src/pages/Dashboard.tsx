import React from 'react'

function PlaceholderChart({ title }: { title: string }){
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 6 }}>
      <h4>{title}</h4>
      <div style={{ height: 120, background: 'linear-gradient(90deg,#f3f4f6,#e5e7eb)' }} />
    </div>
  )
}

export default function Dashboard(){
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      <PlaceholderChart title='User growth trends' />
      <PlaceholderChart title='Activity metrics' />
      <PlaceholderChart title='Order data' />
    </div>
  )
}