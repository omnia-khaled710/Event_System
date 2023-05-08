const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();
const PORT=process.env.SERVER_PORT 
const MONGOOSE_URL=process.env.MONGOOSE_URL 
app.use(express.json());

mongoose.connect(MONGOOSE_URL,(err)=>{
if(!err) return console.log(`DB connected`) 
console.log('error connecting to DB')
})

const speakerRouter=require('./routes/speaker')
// const studentRouter=require('./routes/student')
// const eventRouter=require('./routes/event')

app.use('/speaker',speakerRouter);
// app.use('/event',eventRouter);
// app.use('/student', studentRouter);

app.listen(PORT,(err)=>{
if(!err) return console.log(`server running at ${PORT}`);
    console.log(err);
});
 
