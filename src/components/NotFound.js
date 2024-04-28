import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div style={{padding: '20px'}}>
        <h1>This is not the page you're looking for</h1>
        <p>Please <Link to="/">click here</Link> to navigate to home
        </p>
    </div>
  )
}

export default NotFound
