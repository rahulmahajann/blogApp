const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
require('dotenv').config()
const storage = new GridFsStorage({
    url: process.env.MONGODB_URL,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    file: (req, file) => {

        const match = ['image/png', 'image/jpeg', 'image/jpg'];

        if(match.indexOf(file.memeType) === -1){
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return{
            bucketName: 'photos',
            filename: `${Date.now()}-blog-${file.originalname}`
        }


    }

})
const upload = multer({storage});

module.exports = upload;
// export default multer({storage})