import { useState } from 'react'
import Landing from './landing'
import Login from './login'
export default function App (){
  const [User, setUser] = useState(false)
 function handleLogin(){
    setUser(true)
  }
  function handleLogout(){
    setUser(false)
  }
return(
  <>
    {User ? <Landing/> : <Login/>}
    <button type="submit" className="btn" onClick={handleLogin}>Login</button>
    <button type="submit" className="btn" onClick={handleLogout}>Logout</button>

  </>
)
}
