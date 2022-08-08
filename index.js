require('dotenv').config();
const express = require('express');
const app = express();
const hbs=require('hbs');
const bcrypt=require("bcryptjs");
const port = process.env.PORT || 80;
const path = require('path');
const bodyParser = require('body-parser');
const Register=require("./models/register");
const contacts = require("./models/query")
const{ json }=require("express");
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/static',express.static('static'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/Js'));

app.set("view engine","hbs");
const template_path=path.join(__dirname,"templates/views");
app.set("views",template_path);
const mongoose = require('mongoose');
const { stringify } = require('querystring');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/myquery');
}

// const QueriesSchema = new mongoose.Schema({
//     name: String,
//     email:String,
//     subject:String,
//     message:String
//   });

//   const Contacts = mongoose.model('Contacts', QueriesSchema);
console.log(process.env.SECRET_KEY);

app.get('/',(req,res)=>{
  res.status(200).render('index')

})

app.get('/contact',(req,res)=>{
  res.status(200).render('contact')
});
app.get('/about',(req,res)=>{
  res.status(200).render('about')
});
app.get('/about',(req,res)=>{
  res.status(200).render('about')
});
app.get('/products',(req,res)=>{
  res.status(200).render('products')
});
app.get('/login',(req,res)=>{
  res.status(200).render('login')
});
app.post('/login',async(req,res)=>{
try {
  const email=req.body.email;
  const password=req.body.password;
  const useremail=await Register.findOne({email:email});
  const ismatch=await bcrypt.compare(password,useremail.password);
  const token=await useremail.generateAuthtoken();
  if(ismatch){
    res.status(201).render("index");
  }else{
    res.send("incorrect details")
  }

} catch (error) {
  res.status(400).send("invalid email")
}
})
app.get('/register',(req,res)=>{
  res.status(200).render('register')
});

app.post('/contact',(req,res)=>{
  var mydata=new contacts(req.body);
  
  mydata.save().then(()=>{
    res.status(201).json({
      "message":"Your query has been submitted",
      "status":201
    })
  }).catch(()=>{
    res.status(400).json({
      "message":"An Error Occurred",
      "status":400
    })
  });
});
app.post('/register',async(req,res)=>{
  try{
    const password=req.body.password;
    const cpassword=req.body.confirmpassword;
    if(password===cpassword){
      
      const mydata=new Register(req.body);
      const token=await mydata.generateAuthtoken();
      // console.log(token);
  
      const registered=await mydata.save();
      res.status(201).render("index");

    }else{
      res.send("password are not matching")
    }

  }catch(error){
    res.status(400).send(error);
  }
})


app.get('/admin/query' , async(req,res)=>{

try{
  let data = await contacts.find({});
   res.status(200).send(data);

}catch{
  res.status(400).json({
    message: "Server Error Occured!"
  });
}
})
app.get('/admindash',(req,res)=>{
  // res.status(200).sendFile(path.join(__dirname, "static/admindashboard.html"));
  res.status(200).render('admindash')
})

// app.post("/admin/queryResolved" , 




app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })