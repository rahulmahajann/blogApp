import axios from 'axios';

const URL = 'http://localhost:5000';

export const createPost = async (post) => {
    try{
        console.log(post);
        return await axios.post(`${URL}/create`, post);
    }catch(err){
        console.log('kuch error aya hoga!', err);
    }
}

export const getPost = async (params) => {
    try{
        let response = await axios.get(`${URL}/getPost/${params}`);
        console.log(response);
        return response.data;
    }catch(err){
        console.log('kuch to phuka hoga!', err)
    }
}

export const getPostById = async (id) => {
    try{
        let response = await axios.get(`${URL}/getPost/${id}`);
        console.log(response);
        return response.data;
    }catch(err){
        console.log('kuch phuka hai!',err);
    } 
}

export const updatePostById = async (id, post) => {
    try{
        console.log(post);
        await axios.post(`${URL}/updatePost/${id}`, post)
    }catch(err){
        console.log('kuch to phta hoga', err);
    }
}

export const deletePostById = async (id) => {
    try{
        await axios.delete(`${URL}/deletePost/${id}`)
    }catch(err) {
        console.log('kuch to phata hai!');
    }
}

export const uploadFile = async (data) => {
    console.log(data);
    try{
        await axios.post(`${URL}/file/upload`, data)
    }catch(err){
        console.log(err);
    }
}

export const validate = async (user) => {
    try{    
        const resp = await axios.post(`${URL}/signIn`, user);
        return resp;
    }catch(err){
        console.log('luch to phta hoga!');
    }
}

export const signupUser = async (user) => {
    try{
        await axios.post(`${URL}/signUp`, user);
    }catch(err) {
        console.log('kuch to phta hoga!');
    }
}

export const findUser = async (email) => {
    try{
        const resp = await axios.post(`${URL}/findUser`, email);
        return resp;
    }catch(err){
        console.log('kuch phta!');
    }
}

export const resetPassword = async (password, emailOfUser) => {
    try{
        const resp = await axios.put(`${URL}/resetPassword`, {password, emailOfUser});
        return resp;
    }catch(err){
        console.log('kuch phta!');
    }
}