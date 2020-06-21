
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');



const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

var bandera= false



app.get("/user",(req,res) => {

    console.log(bandera)
    const user= req.body
    //res.send("Welcome ",user)
    if(bandera===false){
        return res.redirect("/login");
    }else{
        return res.sendFile(path.join(__dirname, './public', 'index.html'));
    }
    //res.sendFile(path.join(__dirname, './public', 'index.html'));
    
})

app.get("/Error",(req,res)=>{
    //res.send("Usuario no valido")
    res.sendFile(path.join(__dirname,'./public','Error.html'))
})


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'Login.html'));
})

app.post('/login',(req,res)=>{
    const mail = req.body.email
    const pass = req.body.password
    console.log(req.body)

    const user= req.body
    
    if(mail ==='lil@email.com' && pass==='lila'){
        bandera = true
        const user = req.body
        const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
        console.log(bandera)
        //res.send({accessToken})
        return res.redirect("/user");
    }else{
        
       // return res.redirect("/Error")
        return res.status(401).redirect("/Error")
        /*res.status(401).send({
            error: 'usuario o contraseña incorrectos'
            
        })*/
    } 
    

})





app.listen(3000, () => {
    console.log('Listening on port 3000');
})