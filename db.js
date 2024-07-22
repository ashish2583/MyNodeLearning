const mongoose = require('mongoose');
require('dotenv').config()

 // const murl= process.env.LOCALURL  // locathost URL
  //const murl=process.env.DB_URL
 // const murl='mongodb+srv://7843949343akv:nmpDyQ70lVFOVt5t@cluster0.lzipulc.mongodb.net/'
   const murl='mongodb+srv://7843949343akv:1gyMZedN5JedmlFh@cluster0.lzipulc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

 var db= mongoose.connect(murl)
  .then(() => console.log('Connected!'));
module.exports=db