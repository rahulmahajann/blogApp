import React from "react";
import {AppBar, Toolbar, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link, useNavigate } from "react-router-dom";


const useStyles = makeStyles({
    header__body: {
        backgroundColor: 'white !important',
        color: 'black !important'
    },
    header__content: {
        justifyContent: 'center',
        '& > *': {
            padding: 20
        }
    },
    header__links: {
        textDecoration: 'none',
        color: 'inherit'
    }
})



function Header() {

    const navigate = useNavigate();

    const logoutFun = () => {
        localStorage.clear();
        navigate('/login')
    }
    
    const classes = useStyles();
    return(
        <AppBar className = {classes.header__body}>
            <Toolbar className = {classes.header__content}>
                <Link to = {'/'} className = {classes.header__links}>
                    <Typography>Home</Typography>
                </Link>
                {/* <Button></Button> */}
                {/* <button onClick = { () => logoutFun()} variant = 'contained' color = 'primary' >LogOut</button> */}
                {/* <Link to = {'/login'} className = {classes.header__links}> */}
                <Typography onClick={ () => logoutFun() }>LogOut</Typography>
                {/* </Link> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;