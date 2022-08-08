const mongoose=require("mongoose");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const emloyeeSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]


})
emloyeeSchema.methods.generateAuthtoken=async function(){
    try {
        // console.log(this._id)
        const token=jwt.sign({_id:this._id},process.env.SECRET_KEY)
        // console.log(token);
        this.tokens=this.tokens.concat({token:token})
        await this.save();
        return token;
    } catch (error) {
        res.status(400).send(error);
        console.log("error");
    }
}

emloyeeSchema.pre("save",async function(next){
   if(this.isModified("password")){
    this.password=await bcrypt.hash(this.password,10);
    this.confirmpassword=await bcrypt.hash(this.password,10);
    next();
   }
})
const Register=new mongoose.model("Register",emloyeeSchema);
module.exports=Register;