const mongoose=require("mongoose");
const QueriesSchema = new mongoose.Schema({
    name: String,
    email:String,
    subject:String,
    message:String
  });

  const Contacts = mongoose.model('Contacts', QueriesSchema);
  module.exports=Contacts;