import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes, useLocation } from 'react-router-dom'

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Layout from './components/Layout/Layout';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Profile from './pages/Profile';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/index" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/:id/profile" element={<Profile />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  )
}

export default App;
