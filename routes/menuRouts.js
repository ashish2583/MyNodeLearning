const express = require('express')
const router = express.Router();
const MenueItem=require('../models/menueitem')

const bodyParser = require('body-parser')
router.use(bodyParser.json())

router.post('/', async (req ,res)=>{
    try {
        var data=req.body;
        const newmenue=MenueItem(data);
        const responce= await newmenue.save();
        console.log('Done')
       res.status(200).json(responce)
    } catch (error) {
      res.status(500).json({error:'==>>Somthing Went wrong'})
    }
  })
  router.get('/',async (req,res)=>{
    try {
        const data=await MenueItem.find()
        res.status(200).json(data)
    } catch (error) {
      console.log('error')
      res.status(500).json({error:'Somthing Went wrong'});
    }
  })

  router.get('/:test', async (req, res) => {
    try {
      const test=req.params.test;
      console.log('====================================',test);
      
        const data = await MenueItem.find({test:test});
        console.log('data fetched');
        res.status(200).json(data)
     
    } catch (error) {
      console.log('error')
      res.status(500).json({error:'Somthing Went wrong'});
    }
  })

  module.exports = router ;