import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Post from './Post';
import { getPost } from '../../service/api';

const useStyles = makeStyles({
    post__Links: {
        textDecoration: 'none'
    }
})

function Posts(){

    const classes = useStyles();
    const {search} = useLocation();
    const [posts, setPosts] = useState([]);

    console.log(posts);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPost(search);
            setPosts(data)
            console.log(data);
        }
        fetchData();
    }, [search]);

    posts.map(post => {
        console.log(post);
    })

    // let posts = [0,1,2,3,4,5,6,7,8,9]
    return(
        <>
            {posts.map( post => ( 
                <Grid item lg = {3} sm = {4} xs = {12}>
                    <Link to = {`/detail/${post._id}`} className = {classes.post__Links}>
                        {/* console.log(post) */}
                        <Post blogContent = {post} />
                    </Link>
                </Grid>
            ))}
        </>
    )
}

export default Posts;