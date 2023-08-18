const express = require('express')
const { studentRoute } = require('./Routes/studentRouter')


const app = express()
app.use(express.json())
app.use('/student',studentRoute)



app.listen(5200,()=>{
    console.log('server is a running on port 5200');
})