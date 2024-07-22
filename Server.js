const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
require('dotenv').config()
app.use(bodyParser.json())

const personRouts= require('./routes/personRouts')
const menuRouts= require('./routes/menuRouts')
app.get('/', async (req, res) => {
  try {
    
    res.status(200).json({message:'done get api'})
  } catch (error) {
    console.log('error')
    res.status(500).json({error:'Somthing Went wrong'});
  }
  
})
app.use('/user',personRouts);
app.use('/menue',menuRouts);

const myPort=process.env.PORT || 3000

app.listen(myPort,()=>{
    console.log('Helle the Server is Running on 3000');
})
// ashuuhsih 
