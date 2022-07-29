import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout';

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/index" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id/profile" element={<Profile />} />
      </Routes>
    </Layout>
  )
}

export default App
