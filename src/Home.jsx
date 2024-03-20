import React from 'react'
import './reg.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'


export const Home = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        navigate(`/login`)
    }
    return (
        <>

            <div className='bg'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link onClick={handleClick}>Logout</Link></li>
            </div>

            <Outlet />
        </>
    )
}
