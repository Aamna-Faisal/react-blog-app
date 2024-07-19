import mongoose from "mongoose"
 const Connection = async(username, password)=>{
    const URL=`mongodb+srv://${username}:<${password}>@cluster0.defy600.mongodb.net//`;
 try{
   await mongoose.connect(URL,{useNewUrlParser: true});
    console.log("database connected successfuly")
    
 }
 catch(error){
    console.log("error while connecting", error)

 }
}
export default Connection;