import { json, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../App"
import './profile.scss'
import NavBar from "../public-routes/NavBar"


const Profile = () => {
  const navigate = useNavigate()
  const {isLoogedIn, setIsLoggedIn } = useContext(AuthContext)



  const res = JSON.parse(localStorage.getItem('token'))
  const handelLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    navigate('/')
  }
  return (
   <div>

<NavBar />
    <div className="profileDib">
      <h3>Profile</h3>
      <p>Full Name : {res?.name}</p>
      <p>Email : {res?.email}</p>
      <p>Password : {res?.password}</p>
      <button onClick={handelLogout}>Logout</button>
    </div>
    </div>
  )
}

export default Profile
