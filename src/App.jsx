import { Navigate, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useContext } from 'react'
import SessionContext from './supabaseServices/sessionContext'

function App() {

  const session = useContext(SessionContext)

  return (
    <Routes>
      <Route path='/' element={!session ? <Login /> : <Navigate to='/dashboard'/>}/>
      <Route path='/register' element={!session ? <Register /> : <Navigate to='/dashboard'/>}/>
      <Route path='/dashboard' element={session ? <Dashboard /> : <Navigate to='/'/>}/>
    </Routes>
  )
}

export default App
