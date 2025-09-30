// https://mongoosejs.com/ 
// npm init -y(package.json)
// npm i mongoose




// --------------------------------------------------------------------------------
const mongoose = require('mongoose');
// let url="https://localhost:8080/user"; extra
main()
.then(()=>{
    console.log("success");

})
.catch(err => console.log(err));
// mongoose.connect('mongodb://127.0.0.1:27017/test'); //(asynawait) OR------------
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
}
// --------------------------------------------------------------------------------






// set of rules 
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
const user=mongoose.model("user",userSchema); //collection------ user(table)
// show collections (cmd) 
// capital=small
// singular=plural
const user1=new user({
    name:"zumer",
    age:23,
    email:"zumer305@gmail.com",
})
// user1.save();
// const user2=new user({
//     name:"ali",
//     age:24,
//     email:"ali305@gmail.com",
// })
// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
user.insertMany([
    {name:"wahab",age:12,email:"wahab@gmail.com"},
    {name:"wahib",age:13,email:"wahib@gmail.com"},

]).then((data)=>{
    console.log(data);
});
// db.users.deleteMany({});
user.find({age:{$gt:10}}).then((res)=> {console.log(res);}) //findOne
.catch((err)=>{console.log (err);});