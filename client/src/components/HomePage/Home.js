import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Banner from './Banner';
import Category from './Category';
import Posts from './Posts';

function Home(){

    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    })

    return(
        <>
            <Header />
            <Banner />
            <Grid container>
                <Grid item lg = {2} xs = {12} sm = {2}>
                    <Category />
                </Grid>
                <Grid container item lg = {10} xs = {12} sm = {10}>
                    <Posts />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;