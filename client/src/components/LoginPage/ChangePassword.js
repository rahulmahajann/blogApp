import React, { useState } from 'react';
import { resetPassword } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    password: ''
}

function ChangePassword(props){
    

    const [password, setPassword] = useState(initialValues);

    const [ information, setInformation] = useState('');
    const navigate = useNavigate();
    const emailOfUser = props.email.emailid;
    
    const handleChange = (e) => {
        setPassword({
            ...password,
            [e.target.name] : e.target.value
        })
    }

    const dataSave = async (e) => {
        e.preventDefault();
        console.log('click hua!');
        console.log(password);
        console.log(emailOfUser);
        const result = await resetPassword(password.password, emailOfUser);
        console.log(result);
        setInformation(result)
        navigate('/login')
    }

    console.log(information);

    console.log(password);

    return(
        <form>
            <input type="password" name="password" placeholder="password" onChange = { (e) => handleChange(e)}  /> 
            <button type="submit" onClick={ (e) => dataSave(e) }> Reset </button>
            {information.data}
        </form>
    )
}

export default ChangePassword;