import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import TranslationPage from './pages/TranslationPage'
import EmailVerification from './components/EmailVerification'
import Captcha from './components/Captcha'
import ArchitecturePage from './pages/ArchitecturePage'
import Dashboard from './pages/Dashboard'
import PaymentPlaceholder from './pages/PaymentPlaceholder'
import AIHelp from './pages/AIHelp'

export default function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path='/' element={<TranslationPage />} />
          <Route path='/translate' element={<TranslationPage />} />
          <Route path='/verify' element={<EmailVerification />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/payment' element={<PaymentPlaceholder />} />
          <Route path='/ai' element={<AIHelp />} />
          <Route path='/architecture' element={<ArchitecturePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}