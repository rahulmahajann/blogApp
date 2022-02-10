import React, { useState } from 'react';
import { signupUser } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    name: '',
    emailid: '',
    password: ''
}

function Signup(){

    const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState(initialValues);

    const dataSave = async (e) => {
        e.preventDefault();
        console.log('click hua!');
        console.log(userDetail);
        await signupUser(userDetail);
        navigate('/login');
    }

    const handleChange = (e) => {
        setUserDetail({
            ...userDetail,
            [e.target.name] : e.target.value
        })
    }
    console.log(userDetail);    

    return(
        <div>
            <form>
                <input name="name" type="text" placeholder="name" onChange = {(e) => handleChange(e)} />
                <input name="emailid" type="email" placeholder="email" onChange = {(e) => handleChange(e)} />
                <input type="password" name="password" placeholder="password" onChange = {(e) => handleChange(e)}  /> 
                <button type="submit" onClick={(e) => dataSave(e)}> SignUp </button>
            </form>
        </div>
    )
}

export default Signup;