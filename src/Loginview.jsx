import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Loginview = () => {

    const { id } = useParams()
    const [data, setData] = useState([''])

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get(`http://localhost:4001/findOne/${id}`)
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    }, [])
    console.log(data);


    return (
        <>
            <div>

                <div className='d-flex gap-3 m-5 flex-wrap '>
                    <div style={{ backgroundColor: '#3f8ffb', color: 'whitesmoke', padding: '15px' }}>
                        <p>Username : {data.username}</p>
                        <p>Password : {data.password}</p>
                        <p>Fullname : {data.fullname}</p>
                        <p>Age : {data.age}</p>
                        <p>User Type : {data.dropdown}</p>
                        <p>User Id : {data._id}</p>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Loginview