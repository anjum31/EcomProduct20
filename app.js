const express=require('express');
const router=require('./src/route/userRoute');
const path = require('path');
const app=new express();



//Security Miidleware

const ratelimit=require('express-rate-limit');
const helmet=require('helmet');
const mongosanitize=require('express-mongo-sanitize');

const hpp=require('hpp');
const cors=require('cors');


//Database
const mongoose=require('mongoose');
const bodyParser = require('body-parser');

//Security Middleware Implement

app.use(cors());
app.use(helmet());
app.use(mongosanitize());
app.use(ratelimit());
app.use(hpp());

app.use(bodyParser.json());

//Rate limiter

const limiter=ratelimit({windowMs:15*60*100,max:300})

//Database Connection



const connectToDatabase = async () => {
    let URI="mongodb+srv://<username>:<password>@cluster0.00qycnk.mongodb.net/";
    let OPTION={user:'anjum31',pass:"anjum31",autoIndex:true}
    try {
        await mongoose.connect(URI,OPTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

connectToDatabase();


app.use('/users', userRoutes);

module.exports=app;
