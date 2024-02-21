import axios from 'axios'
import e from 'cors'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export const Login = () => {
  const [data, setData] = useState('')
  const [submit, setSubmit] = useState('')
  const regData = useSelector((state) => state.regdata.data)
  const navigate = useNavigate()

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.post('http://localhost:4001/loginOne', data)
      console.log(response.data);

      if (response.data) {
        console.log('success');
        toast.success('Login success')
        navigate(`/viewlogin/${response.data._id}`)
        // navigate(`/viewlogin`)
      }
      else {
        toast.error('Login Failed')
      }

    } catch (e) {
      toast.error('failed');
    }


    // if (data.username && data.password) {
    //   if (data.username === regData.username && data.password === regData.password) {
    //     if (regData.dropdown === 'teacher') {
    //       navigate('/teacher')
    //     }
    //     else if (regData.dropdown === 'student') {
    //       navigate('/student')
    //     }
    //     else if (regData.dropdown === 'admin') {
    //       navigate('/admin')
    //     }
    //   }
    //   else {
    //     toast.error('Invalid Username or Password')
    //   }
    // }
    // else {
    //   toast.error('Please fill all fields')
    // }
  }
  return (
    <>
      <div className='d-flex flex-column align-items-center reg'>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <input type="text" name="username" onChange={handleChange} id="" placeholder='Username' className=' form-control mt-3 mb-3' />
            <input type="password" name="password" onChange={handleChange} id="" placeholder='Password' className=' form-control mt-3 mb-3' />
            <input type="submit" value="Login" id='btn' className=' form-control mt-3 mb-3' />
          </div>
        </form>
      </div>

      <ToastContainer />

    </>
  )
}


