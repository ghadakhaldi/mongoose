
const mongoose=require("mongoose")
const personSchema=new mongoose.Schema({
    name:{ type:String,
    required:true},
    age:Number,
    favoriteFoods:Array
})
const person=mongoose.model("person",personSchema)
module.exports=person