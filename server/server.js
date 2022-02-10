const express = require('express');
const DataBaseConnection = require('./database/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./routes/routes');
const dotenv =  require('dotenv');

dotenv.config();


const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', Router);
app.get('/hello', (req, res) => {
    res.send('hello this is test route')
})
// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
// }

app.listen(PORT, () => {
    console.log(`port is running on port ${PORT}`)
})

const URL = process.env.MONGODB_URL;

DataBaseConnection(URL);