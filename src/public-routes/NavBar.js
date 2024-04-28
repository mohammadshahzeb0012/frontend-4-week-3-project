import { Link } from 'react-router-dom'
import './NavBar.scss'
import SignUp from './SignUp'

const NavBar = () => {
    return (
        <div className='navBar'>
            <p>Header</p>
            <div className="navButtons">
            <Link className='link' to='/'>Sign Up</Link>
            <Link className='link' to='/profile'>Profile</Link>
            </div>
        </div>
    )
}

export default NavBar
