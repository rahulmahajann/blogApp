const Post = require('../schema/postSchema');

const getPost = async (req, res) => {
 
    let category = req.query.category;
    let name = req.query.username;
    let Posts;
    console.log(req.query)
    console.log(req);
    try{

        if (name){
            Posts = await Post.find({username: name})
        }  else if (category) {
            Posts = await Post.find({category: category})
        }  else {
            Posts = await Post.find({});
            // res.send(Posts);
            // console.log(Posts);
        }
        res.status(200).json(Posts);
    }catch(err){
        res.status(500).json('kuch phuka hai pkka!')
    }
}

const getPostById = async (req, res) => {
    try{
        let postById = await Post.findById(req.params.id)
        return res.status(200).json(postById);
    }catch(err) {
        res.status(500).json('kuch to phta hai!');
    }
}

const createPost = async (req, res) => {
    // console.log(req.body);
    try{
        const post = await new Post(req.body);
        post.save();
        res.status(200).json('data add hogya hoga!')
    }catch(err){
        res.status(500).json('kuch phuk gya bhai!')
    }
}

const updatePost = async (req,res) => {
    try{
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
        // console.log(updatedPost);
        response.status(200).json('dataupdated succesfully')

    }catch(err){
        res.status(500).json(err)
    }
}

const deletePost = async (req, res) => {
    try{
        await Post.findByIdAndDelete(req.params.id)
        // console.log(`${req.params.id} wala post delete hogya`)
    }catch(err) {   
        res.status(500).json(err)
    }
}

module.exports = {getPost, getPostById, createPost, updatePost, deletePost};