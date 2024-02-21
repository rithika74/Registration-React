import React, { useEffect, useState } from 'react'
import './reg.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { adddata } from './counterSlice';
import axios from 'axios';

export const Update = () => {

    const [view, setView] = useState('')
    const { id } = useParams()

    useEffect(() => {
        let fetchdata = async () => {
            const response = await axios.get(`http://localhost:4001/findOne/${id}`)
            console.log(response.data);
            setView(response.data)
        }
        fetchdata();
    }, [])

    console.log("hgkj", id);

    const [data, setData] = useState('')
    // const [submit, setSubmitted] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(adddata(data));
        let response = await axios.put(`http://localhost:4001/update/${id}`, data)
        console.log(response);
        toast.success('Registration successful');
        navigate('/view');
        // if (data.username && data.password && data.fullname && data.age && data.dropdown) {
        //   dispatch(adddata(data));
        //   let response=await axios.post('http://localhost:4001/insert',data)
        //   console.log(response);
        //   toast.success('Registration successful');
        //   setData('');
        //   // navigate('/login');
        //   navigate('/view');
        // } else {
        //   toast.error('Please fill in all fields.');
        // }
    };



    return (
        <>

            <div className='d-flex flex-column align-items-center reg'>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} value={data.username ? data.username : ''} name="username" id="" placeholder={view.username} className=' form-control mt-3 mb-3' />
                    <input type="password" onChange={handleChange} value={data.password ? data.password : ''} name="password" id="" placeholder={view.password} className=' form-control mt-3 mb-3' />
                    <input type="text" onChange={handleChange} value={data.fullname ? data.fullname : ''} name="fullname" id="" placeholder={view.fullname} className=' form-control mt-3 mb-3' />
                    <input type="text" onChange={handleChange} value={data.age ? data.age : ''} name="age" id="" placeholder={view.age} className=' form-control mt-3 mb-3' />
                    <select name="dropdown" onChange={handleChange} value={data.dropdown ? data.dropdown : ''} id="" className=' form-control mt-3 mb-3'>
                        <option value="">-select-</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </select>
                    <input type="submit" id='btn' value="Register" className=' form-control mt-3 mb-3' />
                    {/* onClick={() => navigate('/login')} */}
                </form>
            </div>
            <ToastContainer />
        </>
    )
}