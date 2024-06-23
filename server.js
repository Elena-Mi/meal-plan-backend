const express = require('express');
const app = express();
const routes = require('./MealRoutes');
const cors = require('cors')

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set("strictQuery", false)

const PORT = 4000 || process.env.port 

app.use(express.json());
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then( () => console.log( 'we were connect to Mongodb'))
.catch( (err) => console.log(err))

app.use(routes)


app.listen(PORT, () => {
    console.log(`I'm listenning PORT ${PORT}`)
})

// tangaloyna  goSsLYbtDvYTAspM

// npm install mongodb

// mongodb+srv://tangaloyna:goSsLYbtDvYTAspM@cluster0.lnkhu3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0