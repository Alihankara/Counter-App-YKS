import express from "express";
import mongoose from "mongoose";
import User from '../models/userModel.js';

const router = express.Router();

// localhost:5000/users 'a yapılan post isteği
router.post("/signup", async (req, res)=>{
    try {
        const { userName, email, password } = req.body;
        
        const userExists = await User.findOne({ email })
        if(userExists)
            return res.status(401).json({ message: 'User already exists.'})

        const createdUser = await User.create({
            userName,
            email,
            password
        })

        return res.status(200).json(createdUser);
    } catch (error) {
        console.log(error)
        return res.json({message: "create user failed"})
    }
})

// localhost:5000/users/signin POST request
router.post("/signin", async (req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if(!user)
            return res.status(401).json({message: "user does not exist"})
        
        if(user.password !== password)
            return res.status(401).json({message: "Wrong Password"})
        
        return res.status(200).json({ user, message: 'Authentication successful' })
    } catch (error) {
        return res.status(401).json({ message: error.message })
    }
})

export default router;
