const express = require('express');
const cors =require('cors');
const e = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// it must be write on the server.if it is not written,the data will show undefined 
app.use(express.json());


const users=[
    {id:1,name:'abid',email:'abid@gmail'},
    {id:2,name:'ontor',email:'ontor@gmail'},
    {id:3,name:'mintu',email:'mintu@gmail'},
    {id:4,name:'selim',email:'selim@gmail'},
];

app.get('/',(req,res)=>{
    res.send('Users Management server is running')
});
app.get('/users',(req,res)=>{
    res.send(users)
});
app.post('/users',(req,res)=>{
    // console.log('post api hitting')
    console.log(req.body);
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    res.send(newUser);

})
app.listen(port,()=>{
    console.log(`Server is running on PORT :${port}`)
});