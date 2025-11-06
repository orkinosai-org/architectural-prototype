import React, { useState } from 'react'

export default function TranslationPage(){
  const [text, setText] = useState('')
  const [target, setTarget] = useState('en')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  async function translate(){
    setLoading(true)
    try{
      const res = await fetch('/api/translate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q: text, target }) })
      const data = await res.json()
      if (res.ok && data.result) setResult(data.result.translatedText || data.result)
      else setResult(data.error || 'Translation failed')
    }catch(e){ setResult('Translation failed') }
    setLoading(false)
  }

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <div style={{ flex: 1 }}>
        <h3>Input</h3>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={10} style={{ width: '100%' }} />
        <div>
          <label>Target</label>
          <select value={target} onChange={e=>setTarget(e.target.value)}>
            <option value='en'>English</option>
            <option value='es'>Spanish</option>
            <option value='fr'>French</option>
            <option value='zh'>Chinese</option>
          </select>
          <button onClick={translate} disabled={loading}>Translate</button>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h3>Translated</h3>
        <div style={{ whiteSpace: 'pre-wrap', border: '1px solid #ddd', padding: 12, minHeight: 220 }}>{result}</div>
      </div>
    </div>
  )
}