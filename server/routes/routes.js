const express = require('express');
const router = express.Router();

const { getPost, getPostById, updatePost, createPost, deletePost } = require('../controller/postController');
const { uploadImage, getImage } = require('../controller/imageController');
const { signUp, signIn, findUserByEmail,resetPassword } = require('../controller/auth');
const upload = require('../utils/upload');

router.post('/create', createPost);
router.post('/updatePost/:id', updatePost);
router.delete('/deletePost/:id', deletePost);

router.get('/getPost', getPost);
router.get('/getPost/:id', getPostById);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/signUp', signUp);
router.post('/signIn', signIn);
router.post('/findUser', findUserByEmail);
router.put('/resetPassword', resetPassword);

module.exports = router;