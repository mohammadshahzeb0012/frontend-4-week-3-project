import { json } from "react-router-dom"


const Profile = () => {
  const res = JSON.parse(localStorage.getItem('token'))
  return (
    <div>
      <h3>Profile</h3>
      <p>Full Name : {res?.name}</p>
      <p>Email : {res?.email}</p>
      <p>Password : {res?.password}</p>
    </div>
  )
}

export default Profile
