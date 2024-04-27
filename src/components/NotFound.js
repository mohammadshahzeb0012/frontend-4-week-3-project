import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div>
        <h1>This is not the page you're looking for</h1>
        <p>Please <Link to="/login">click here</Link> to navigate to Login <br />
        click here to <Link to='/signup'>sign up</Link>
        </p>
    </div>
  )
}

export default NotFound
