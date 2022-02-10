import { Box, Button, FormControl, InputBase, TextareaAutosize } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {createPost, uploadFile} from '../../service/api';
import Header from "../Header";

const useStyles = makeStyles({
    createpost__body: {
        padding: '0 1vw'
    }, 
    createpost__image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    createpost__form: {
        display: ['flex', '!important'],
        flexDirection: ['row', '!important'],
        marginTop: [10, '!important']
    },
    createpost__titleinput: {
        flex: 1,
        margin: '0 30px',
        fontSize: [25, '!important']
    },
    createpost__textarea: {
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
    username: 'mehul',
    category: 'Players',
    createdDate: new Date()
}

function CreatePost(){

    const classes = useStyles();
    const navigate = useNavigate();
    
    const [post, setPost] = useState(initialValues);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');

    const url = post.picture ? post.picture : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpaperheart.com%2Fwp-content%2Fuploads%2F2018%2F05%2FMohamed-Salah-wallpapers-hd-10.jpg&f=1&nofb=1';

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name] : e.target.value,
        })
    }
    
    post.username = localStorage.getItem("name");

    const savePost = async () => {
        await createPost(post);
        navigate('/');
    }

    useEffect(() => {
        const getImage = async () => {
            console.log(file);
            if (file){
                console.log(file.name);
                const data = new FormData();
                data['name'] = file.name;
                data['file'] = file;
                console.log(data);
                const image = await uploadFile(data);
                console.log(image);
                post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();
    }, [file])


    useEffect(() => {
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    })

    return(
        <>
            <Header />
            <Box className = {classes.createpost__body}>
                <img src = {url} alt = 'newImage' className = {classes.createpost__image} />
                {/* <Box className = {classes.createpost__image} /> */}
                <FormControl className = {classes.createpost__form}>
                    
                    <label htmlFor = 'imageSelector' >
                        <AddCircleIcon />
                    </label>
                    <input
                        type = 'file'
                        id = 'imageSelector'
                        style= {{display: 'none'}}
                        onChange = { (e) => setFile(e.target.files[0])}
                    />
                    <InputBase 
                        placeholder = 'Title' 
                        className = {classes.createpost__titleinput} 
                        onChange = {(e) => handleChange(e)}
                        name = 'title'
                    />
                    <Button onClick = {() => savePost()} variant = 'contained' color = 'primary' >Create</Button>
                </FormControl>


                <TextareaAutosize
                    minRows = {5}
                    placeholder = 'YNWA!!'
                    className = {classes.createpost__textarea}
                    onChange = {(e) => handleChange(e)}
                    name  = 'description'
                />

            </Box>
        </>
    )
}

export default CreatePost;