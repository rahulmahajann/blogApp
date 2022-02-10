import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {getPostById, deletePostById} from '../../service/api';
import Header from '../Header';

const useStyles = makeStyles({
        description__body: {
            padding: '0 1vw',
        },
        description__image: {
            width: '100%',
            height: '50vh',
            objectFit: 'cover'
        },
        description__IconBody: {
            float: 'right'
        },
        description__Icon: {
            margin: 5,
            border: '1px solid grey',
            borderRadius : '30%'
        },
        description__Title: {
            fontSize: [38, '!important'],
            fontWeight: 600,
            textAlign: 'center',
            margin: ['50px 0 10px 0', '!important']
        },
        description__Details: {
            margin: '20px 0',
            display: 'flex'
        },
        description__Link: {
            textDecoration: 'none',
            color: 'inherit'
        }
    }
)

function PostDescription(){

    const classes = useStyles();
    const url = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F05%2FMohamed-Salah-wallpapers-hd-10.jpg&f=1&nofb=1';
    const id = useParams().id;
    const navigate = useNavigate();
    console.log(id);

    const [post, setPost] = useState({});

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPostById(id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    }, [])

    const deletePost = async () => {
        navigate('/');
        await deletePostById(id);
    }

    return(
        <>
            <Header />
            <Box className = {classes.description__body}>
            <img src = {post.picture || url} alt = 'postImage' className = {classes.description__image} />
            <Box className = {classes.description__IconBody}>
                <Link to = {`/updateblog/${id}`} className = {classes.description__Link}>
                    <EditIcon className = {classes.description__Icon} color = 'primary' />  
                </Link>
                <DeleteIcon onClick = { () => deletePost()} className = {classes.description__Icon} color = 'error' />
            </Box>
            <Typography className = {classes.description__Title}>
                {post.title}
            </Typography>
            <Box className = {classes.description__Details}>
                <Link to = {`/?username=${post.username}`} className = {classes.description__Link} >
                <Typography>Author: <span style = {{fontWeight: 600}}>{post.username}</span></Typography>
                </Link>
                <Typography style = {{marginLeft: 'auto'}} >{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
            <Typography>
            {post.description}
            </Typography>
        </Box>
        </>
    )
}

export default PostDescription;