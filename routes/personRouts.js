const express = require('express')
const router = express.Router();
const Person = require('../models/person')
const bodyParser = require('body-parser')
  router.use(bodyParser.json())

  router.get('/', async (req, res) => {
    try {
      const data = await Person.find();
      console.log('data fetched');
      res.status(200).json(data)
    } catch (error) {
      console.log('error')
      
      res.status(500).json({error:'Somthing Went wrong'});
    }
  })
  router.post('/', async (req, res) => {
   try {
    var data=req.body;
    const newPerson=Person(data)   
    const responce = await newPerson.save();
    console.log('Done')
    res.status(200).json(responce)
   } catch (error) {
    console.log('====>>error')
    res.status(500).json({error:'Somthing Went wrong'});
   }
    
  })
  router.get('/:workType', async (req, res) => {
    try {
      const worktype=req.params.workType;
      console.log('====================================',worktype);
      if(worktype=='chef' || worktype=='maneger' || worktype=='waiter'){
        const data = await Person.find({workType:worktype});
        console.log('data fetched');
        res.status(200).json(data)
      }else{
        res.status(200).json({data:null,message:'you have entered wrong worktype'})
      }
    } catch (error) {
      console.log('error')
      res.status(500).json({error:'Somthing Went wrong'});
    }
  })
  router.put('/:id', async (req, res) => {
    try {
        var userid=req.params.id
        var data=req.body;
     const responce = await Person.findByIdAndUpdate(userid,data,{
        new:true,
        runValidators:true
     })
     if(!responce){
        return res.status(404).json({error:'User can Update'})
     }
     res.status(200).json(responce)
    } catch (error) {
     console.log('====>>error')
     res.status(500).json({error:'Somthing Went wrong'});
     }
  })
  router.delete('/:id', async (req, res) => {
    try {
        var userid=req.params.id
      
     const responce = await Person.findByIdAndDelete(userid)
     if(!responce){
        return res.status(404).json({error:'User can detete'})
     }
     res.status(200).json({message:"User Deleted Successfully"})
    } catch (error) {
     console.log('====>>error')
     res.status(500).json({error:'Somthing Went wrong'});
     }
  })

  module.exports = router ;
 