const mongoose = require('mongoose');
const gridFsStream = require('gridfs-stream');


const url = 'http://localhost:5000';

const connection = mongoose.connection;

let data;

connection.once('open', () => {
    data = gridFsStream(connection.db, mongoose.mongo);
    data.collection('fs');
})

const uploadImage = (req, res) => {
    try{
        if(!req.file){
            return res.status(404).json('file not found')
        }
    
        const imageUrl = `${url}/file/${req.file.filename}` 
    
        return res.status(200).json(imageUrl);
    }catch(err){
        res.status(500).json('kuch to phuka!')
    }
}

const getImage = async (req, res) => {
    try{
        const file = await data.files.findOne({filename: req.params.filename});
        const readStream = data.createReadStream(file.filename);
        readStream.pipe(res);

    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = {uploadImage, getImage};