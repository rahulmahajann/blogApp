import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { findUser } from '../../service/api';
import ChangePassword from './ChangePassword';

const initialValues = {
    emailid: ''
}

function ResetPassword(){

    const navigate = useNavigate();
    const [email, setEmail] = useState(initialValues);

    const [display, setDisplay] = useState(false);

    const [hap, setHap] = useState('');

    const dataSave = async (e) => {
        e.preventDefault();
        console.log('click hua!');
        console.log(email);
        const dataMila = await findUser(email);
        console.log(dataMila);
        if(dataMila.data == 'userMila'){
            setDisplay(true);
        }else{
            setDisplay(false);
            setHap('bhag ja be!')
            console.log(dataMila.data);
        }
    }

    const handleChange = (e) => {
        setEmail({
            ...email,
            [e.target.name] : e.target.value
        })
    }
    console.log(email); 

    return(
        <div>
            <form>
                <input name="emailid" type="email" placeholder="email" onChange = {(e) => handleChange(e)} />
                <button type="submit" onClick={(e) => dataSave(e)}> Reset Password </button>
            </form>

            {
                display ? <ChangePassword email = {email} /> : <h1>{hap}</h1>
            }

        </div>
    )
}

export default ResetPassword;