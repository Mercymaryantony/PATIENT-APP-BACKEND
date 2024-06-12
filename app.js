const mongoose = require("mongoose")
const express =require("express")
const cors =require("cors")
const app=express()
app.use(cors())
app.use(express.json())
const {patientmodel}=require("./model/patient")
mongoose.connect("mongodb+srv://mercy1112:mercy1112@cluster0.8x8j3ya.mongodb.net/patientDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/view",(req,res)=>{
    patientmodel.find().then((data)=>{
        res.json(data)
    }).catch((error)=>res.send("error"))
})

app.post("/add",(req,res)=>{
    let input =req.body
    let patient = new patientmodel(input)
    console.log(patient)
    patient.save()
    res.json({"status":"added"})
})
app.post("/delete",(req,res)=>{
    let input = req.body
    patientmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"deleted"})
        }
    ).catch((error)=>{
        res.json({"status":"error"})
    })

})

app.post("/search",(req,res)=>{
    let input = req.body
    patientmodel.find(input).then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.send("error")
    })
})

app.listen(8081,()=>{
    console.log("server started")
})