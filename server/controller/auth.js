const User = require('../schema/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = 'cftgbhy';

const signUp = async (req, res) => {
    const name = req.body.name;
    const email = req.body.emailid;
    const password = req.body.password;
    if(!name || !email || !password){
        res.status(422).json({ error: 'pleasee add all details'});
        return;
    }
    const userExist = await User.findOne({email: email});

    if(userExist){
        res.status(400).json({ error: 'user already exist'});
    }else{
        const newPassword = await bcrypt.hash(password, 12);
        const user = new User({
            email,
            password: newPassword,
            name
        })
        user.save();
        res.send(user);
    }
}

const signIn = async (req, res) => {
    const email = req.body.emailid;
    const password = req.body.password;

    if(!email || !password){
        res.status(422).json({ error: 'pleasee add all details'});
        return;
    }

    const userExist = await User.findOne({email: email});
    console.log(userExist);
    if(userExist){
        const passwordMatch = await bcrypt.compare(password, userExist.password);
        if(passwordMatch){
            const token = jwt.sign({_id: userExist._id}, jwtSecret);
            console.log('token', token);
            console.log('password match hua login krwado!')
            res.json({
                token,
                message: 'match',
                name: userExist.name
            })
        }else{
            console.log('notMatch')
            return res.json({
                message: 'notMatch'
            })
        }
    }else{
        return res.json('enter valid email or password')
    }

}

const findUserByEmail = async (req, res) => {
    const email = req.body.emailid;
    console.log(email);
    const userMila = await User.findOne({ 
        email: email
    });
    console.log(userMila);
    if(userMila){
        // return true;
        res.json('userMila')
    }else{
        res.json('nhiuserMila')
    }
} 

const resetPassword = async (req, res) => {
    const email = req.body.emailOfUser;
    const password = req.body.password;

    console.log(password, email);

    const foundUser = await User.findOne({
        email: email
    })

    console.log('old user', foundUser);

    const newPassword = await bcrypt.hash(password, 12);

    await User.findByIdAndUpdate(foundUser._id, {
        password: newPassword
    })

    const updatedUser = await User.findOne({
        email: email
    })

    console.log('new user', updatedUser);
    res.json('password changed succesfully')

}

module.exports = {signUp, signIn, findUserByEmail, resetPassword};