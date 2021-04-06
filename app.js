const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require("path");
const app = express();
const connectDB = require('./server/database/connection');
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 3000

//log requests
app.use(morgan("tiny"));

//mongodb connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))
//Greeting message
app.get('/', (req,res)=> {
    res.send("Welcome to Favorite TV Show API")
})
//Set View engine
app.set("view engine","ejs")
//app.set("views".path.resolve(__dirname, "views/ejs"))

//load assests
app.use('/css',express.static(path.resolve(__dirname, "assets/css")))
app.use('/img',express.static(path.resolve(__dirname, "assets/img")))
app.use('/js',express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)});