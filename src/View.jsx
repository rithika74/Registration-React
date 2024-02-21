import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const View = () => {
    const [data, setData] = useState([''])
    const [refresh,setRefresh]=useState(false)

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get('http://localhost:4001/find')
            console.log(response.data);
            setData(response.data)
        }
        fetchdata()
    }, [refresh])
    console.log(data);

    const handleDelete=async (id)=>{
        console.log(id);
        setRefresh(!refresh)
        let response=await axios.delete(`http://localhost:4001/delete/${id}`)
        console.log(response);
    }

    return (
        <div className='d-flex gap-3 m-5 flex-wrap '>

            {data.map((item) => (
                <div style={{backgroundColor:'#3f8ffb', color:'whitesmoke', padding:'15px'}}>
                    <p>Username : {item.username}</p>
                    <p>Password : {item.password}</p>
                    <p>Fullname : {item.fullname}</p>
                    <p>Age : {item.age}</p>
                    <p>User Type : {item.dropdown}</p>
                    <p>User Id : {item._id}</p>
                    <Link to={`/update/${item._id}`}><button>Update</button></Link>
                    <button onClick={()=>{handleDelete(item._id)}}>Delete</button>
                </div>
            ))}

        </div>
    )
}

export default View