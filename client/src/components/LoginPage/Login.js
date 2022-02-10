import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validate } from '../../service/api';


const initialValues = {
    emailid: '',
    password: ''
}

function Login(){

    const navigate = useNavigate();
    const [userDetail, setUserDetail] = useState(initialValues);
    
    const dataSave = async (e) => {
        e.preventDefault();
        console.log('click hua!');
        console.log(userDetail);
        const isValidate = await validate(userDetail);
        console.log(isValidate);
        if(isValidate.data.message == 'match'){
            localStorage.setItem('token', isValidate.data.token);
            localStorage.setItem('name', isValidate.data.name);
            navigate('/')
        }
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
                <input name="emailid" type="email" placeholder="email" onChange = {(e) => handleChange(e)} />
                <input type="password" name="password" placeholder="password" onChange = {(e) => handleChange(e)} /> 
                <button type="submit" onClick={(e) => dataSave(e)}> Login </button>
            </form>
            <Link to = {'/resetPassword'}>
                <p>forgot password?</p>
            </Link>
            <Link to = {'/signUp'}>
            <p>signUp</p>
            </Link>
        </div>
    )
}

export default Login;