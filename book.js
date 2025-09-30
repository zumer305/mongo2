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
    },
    author:{
        type:String,
    },
 
});
const bok=mongoose.model("bok",userSchema); 