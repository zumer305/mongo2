// https://mongoosejs.com/ 

// npm init -y(package.json)
// npm i mongoose

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


// Schema(table structure=columns)
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});