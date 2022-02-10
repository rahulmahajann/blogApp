import { Box, Button, FormControl, InputBase, TextareaAutosize } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useEffect, useState } from 'react';
import { getPostById, updatePostById } from '../../service/api';
import { useNavigate, useParams } from 'react-router-dom';
import Header from "../Header";

const useStyles = makeStyles({
    updatepost__body: {
        padding: '0 1vw'
    }, 
    updatepost__image: {
        background: `url(${'http://www.pixelstalk.net/wp-content/uploads/2016/07/Liverpool-Image-Free-Download.jpg'}) center/60% repeat-x #000`,
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    updatepost__form: {
        display: ['flex', '!important'],
        flexDirection: ['row', '!important'],
        marginTop: [10, '!important']
    },
    updatepost__titleinput: {
        flex: 1,
        margin: '0 30px',
        fontSize: [25, '!important']
    },
    updatepost__textarea: {
        width: '100%',
        marginTop: 50,
        border: 'none',
        fontSize: 18
    }
})

const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'rahulMahajan',
    category: 'All',
    createdDate: new Date()
}

function UpdatePost(){

    const classes = useStyles();
    const navigate = useNavigate();
    const [post, setPost] = useState(initialValues);
    const id = useParams().id;

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPostById(id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    }, [])

    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    })

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name] : e.target.value
        })
    }

    const updatePost = async () => {
        console.log(post);
        await updatePostById(id, post)
        navigate(`/detail/${id}`)
    }

    return(
        <>
            <Header />
            <Box className = {classes.updatepost__body}>
                {/* <img src = {url} alt = 'newImage' className = {classes.updatepost__image} /> */}
                <Box className = {classes.updatepost__image} />
                <FormControl className = {classes.updatepost__form}>
                    <AddCircleIcon />
                    <InputBase value = {post.title} placeholder = 'Title' className = {classes.updatepost__titleinput} onChange = {(e) => handleChange(e)} name = 'title' />
                    <Button onClick = {() => updatePost()} variant = 'contained' color = 'primary' >Update</Button>
                </FormControl>


                <TextareaAutosize
                    minRows = {5}
                    placeholder = 'YNWA!!'
                    value = {post.description}
                    className = {classes.updatepost__textarea}
                    onChange = {(e) => handleChange(e)}
                    name = 'description'
                />

            </Box>
        </>
    )
}

export default UpdatePost;