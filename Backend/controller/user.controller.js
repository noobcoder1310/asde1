import User from "../model/user.model.js"
import bcryptjs from "bcryptjs"
export const signup=async(req,res)=>{
try {
    const{Fullname,email,password}=req.body
    const user=await User.findOne({email})
    if(user){
        return res.status(400).json({message:"Email already exist"})
    }
    const hashPassword= await bcryptjs.hash(password,10)
    const createdUser=new User({
       Fullname,
       email,
       password:hashPassword
    });
     await createdUser.save();
    res.status(201).json({message:"user created successfully"})
} catch (error) {
    console.log("Error:"+error.message)
    res.status(500).json({message:"Internal Server error"})
}
};
export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch= await bcryptjs.compare(password,user.password);
        if(!user||!isMatch){
            return res.status(400).json({message:"Invalid username or password"});
        }
            else{
                  return res.status(200).json({
                    message:"Login successfully",
                    user:{
                    _id:user._id,
                    Fullname:user.Fullname,
                    email:user.email,
                    
                 },
                }); 
          }
        
    } catch (error) {
        
        console.log("Error:"+error.message)
        return res.status(500).json({message:"Internal server error"})
    }

}