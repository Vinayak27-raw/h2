const User = require('../models/User');

exports.getAllUsers = async (req,res)=>{
    const users = await User.find();
    res.send(users);
}

exports.signup = async(req,res)=>{
    const {username, password} = req.body;
    const newUser = new User({username, password});
    const result = await newUser.save();
    res.status(201).send({message:`New User created successfully`})
}

exports.login = async(req,res)=>{
    try{
        const{ username, password} = req.body;
        const user = await User.findOne({ username, password});
        if(user){
            res.json({message: `Login Successfull`});
        }
        else{
            res.json({message: `Invalid Credentials`});
        }
    }
    catch (error){
        res.status(500).json({error: `An error occurred`});
    }
}