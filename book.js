const mongoose = require('mongoose');
main()
.then(()=>{
    console.log("success");

})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/book');
  
}
const userSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,//not null
        maxLength:20,
    },
    author:{
        type:String,
    },
    discount:{
        type:Number,//"299" string ma bhj skty
        default:0,
    },
    category:{
        type:String,
        enum:["yes","no"],//bs in dono ma sa ho skti category ki value
    },
    genre:[String],
 
});
const bok=mongoose.model("bok",userSchema); 