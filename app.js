const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT

//Database Connection
const mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ycrkdr4.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0"`

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Database Connection Sucessfull"))
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
app.listen(process.env.PORT, () =>{
  console.log("Server on in port: " + process.env.PORT)

})
