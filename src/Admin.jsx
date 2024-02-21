import React from 'react'
import { useSelector } from 'react-redux'

const Admin = () => {
  const regData = useSelector((state) => state.regdata.data)

  return (
    <>
      <div style={{marginTop:'150px' , marginLeft:'150px'}}>
        <h2>Entered Data</h2>
        <p>Username: {regData.username}</p>
        <p>Password: {regData.password}</p>
        <p>Fullname: {regData.fullname}</p>
        <p>Age: {regData.age}</p>
        <p>Usertype: {regData.dropdown}</p>
      </div>


    </>
  )
}

export default Admin