import { Box, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    post__box: {
        height: 350,
        margin: 10,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        border: '1px solid grey',
        flexDirection: 'column',
    },
    post__image: {
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',

    },
    post__text: {
        padding: '0 5px 5px 5px'
    },
    post__CategoryAuthor: {
        fontSize: [12, '!important'],
        color: 'red'
    },
    post__Title: {
        fontSize: [18, '!important'],
        color: 'blue'
    },
    post__Description: {
        fontSize: [14, '!important'],
        color: 'orange',
        // wordBreak: ['break-word', '!important']
        wordBreak: 'break-all'
    }
});

function Post(blogContent){
   
    const classes = useStyles();
    const url = blogContent.blogContent.picture || 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F05%2FMohamed-Salah-wallpapers-hd-10.jpg&f=1&nofb=1'
    console.log(blogContent);

    const shortenData = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    }

    return(
        <Box className = {classes.post__box}>
            <img src = {url} alt = 'blogImage' className = {classes.post__image}/>
            <Typography className = {classes.post__text}  className = {classes.post__CategoryAuthor}>
                {blogContent.blogContent.category}
            </Typography>
            
            <Typography className = {classes.post__text} className = {classes.post__Title}>
                {shortenData(blogContent.blogContent.title, 15)}
            </Typography>

            <Typography className = {classes.post__text} className = {classes.post__CategoryAuthor}>
                Author: {blogContent.blogContent.username}
            </Typography>

            <Typography className = {classes.post__text} className = {classes.post__Description}>
                {shortenData(blogContent.blogContent.description,70)}    
            </Typography>
        </Box>
    )
}

export default Post;