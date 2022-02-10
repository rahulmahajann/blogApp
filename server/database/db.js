const mongoose = require('mongoose');

const databaseConnection = async (URL) => {
    try{
        

        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('connection chla!');

    }catch(err){
        console.log('kuch to error arha hai!', err)
    }
}

module.exports = databaseConnection;