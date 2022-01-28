const express= require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")
const { remove, findByIdAndRemove } = require("../models/person")
const person=require("../models/person")
const router=express.Router()

//create a person 

router.post("/",async(req,res)=>{
    try {
        const newPerson=person(req.body)
       await newPerson.save()
       res.send({newPerson, msg:"added with success"})
    } catch (error) {
        res.send(error.message)
    }
})
//find 
router.get("/find",async(req,res)=>{
    try{
        const findPerson=await person.find();

        res.status(200).send(findPerson)}

    catch (error){
    res.status(404).send(findPerson)
}
    
})
//find by id
router.get("/findid/:id",async(req,res)=>{
    try {
        const findId=await person.findById({_id:req.params.id});
res.status(200).send(findId)
    } catch (error) {
        res.status(404).send({msg:"person is not found"})
    }
})
//update
router.get("/findUpdateSave/:id",async(req,res)=>{
    try {
        const findOne=await person.findById({_id:req.params.id}).exec()
        findOne.favoriteFoods.push("humburger")
        findOne.save()
        res.send(findOne)
    } catch (error) {
        res.status(404).send({msg:"person is not found"})
}

//find One by food
router.get("/findone";async(req,res)=>{
    try {
        const findFood=await person.find({favoriteFoods:"humberger"});
        res.send(findFood)
    } catch (error) {
        res.status(400).send(Error.message)
    }
}
//find one and update
router.put("/findByIdAndUpdate")=async(req,res)=>{
    try {
        const findUpdate =await person.findByIdAndUpdate({_id:req.params.id},{age:20},{new:true});
        res.send(findUpdate)
    } catch (error) {
        res.status(400).send(error.message);
    }
}
//find and remove
router.delete("/personId");async(req,res)=>{
    try {
        const findByIsRmv=await person.findByIdAndRemove(req.params.id);
        res.status(200).send({findByIsRmv,msg:"deleted"})
    } catch (error) {
        res.status(404).send({error:"person is not found"})
        
    }
}
//delete many
router.delete("/deleteMany",async(req,res)=>{
    try {
        const deletedPerson = await person.deleteMany({name:"Ghada"});
        res.send(deletedPerson)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports=router