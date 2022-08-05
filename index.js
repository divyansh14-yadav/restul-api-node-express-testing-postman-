import express from 'express'
import * as url from 'url';
import Student from '../models/students.js';

const indexRouter=express.Router();

indexRouter.get("/students",(req,res)=>{
    res.send("home")
    })

    
    // POST API START..    ....
indexRouter.post("/students",(req,res)=>{
     console.log("post function");
    console.log(req.body);
    const user = new Student(req.body)

    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((err)=>{

        res.status(400).send(err)
    })
})
// POST API END......

export default indexRouter;
