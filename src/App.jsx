import Navbar from './commonComponents/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './Body'
import Login from './login/Login'
import Profile from './profile/Profile'
function App() {


  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path='/' element={<div>Home</div>} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
