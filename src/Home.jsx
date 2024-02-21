import React from 'react'
import './reg.css'
import { Link, Outlet } from 'react-router-dom'


export const Home = () => {
    return (
        <>

            <div className='bg'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </div>

            <Outlet />
        </>
    )
}
