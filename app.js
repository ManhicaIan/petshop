const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || 3000


//Database Connection
const mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ycrkdr4.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0"`

mongoose.connect(uri)
.then(() => console.log("Connection Sucessful"))
.catch(e => console.log(e))



//EJS config
app.set('view engine', 'ejs')
app.set('views', __dirname+"/views")

app.use(express.static(__dirname+'/public'))


//Routes
app.use('/', require('./routes/MainRouter'))
app.use('/pets', require('./routes/PetRouter'))

app.use((req, res, next) =>{
  res.status(404).render('NotFound')
})
app.listen(port, () =>{
  console.log("Server on in port: " + port)

})
