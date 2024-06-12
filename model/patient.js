const mongoose=require("mongoose")
const schema= mongoose.Schema(
    {
        "name":{type:String,required:true},
        "dob":String,
        "pass":String,
        "bg":String,
        "add":String,
        "gen":String
    }
)
let patientmodel=mongoose.model("patient",schema)
module.exports={patientmodel}