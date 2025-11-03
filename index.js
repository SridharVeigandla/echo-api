const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

const connectDB = require('./dbconfig');
const port = 3000;

connectDB();
app.use(express.json()); 




app.get('/',(req,res)=>{

    res.send("Hello World this is my first api")
});

app.use('/api', userRoutes);

app.listen(port,()=>{
    console.log('server is running on port 3000')
})