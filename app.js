const mongoose = require("mongoose")
const express =require("express")
const cors =require("cors")
const app=express()
app.use(cors())
app.use(express.json())

app.post("/view",(req,res)=>{
    res.send("VIEW")
})

app.post("/add",(req,res)=>{
    let input =req.body
    let patient = new patientmodel(input)
    console.log(patient)
    patient.save()
    res.json({"status":"added"})
})

app.listen(8000,()=>{
    console.log("server started")
})