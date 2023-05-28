const user = require('../models/userSchema')
const validator = require('validator')



exports.register =  async (req,res)=>{
    try {
        const { name, email, password } = req.body;
           
       
        if (!email || !name || !password) {
           return res.status(400).json("All field are required")
        }
        if(!validator.isEmail(email)){
           return res.status(400).json("Email should be valid")
        }
        let User = await user.findOne({ email });
        if (User) {
           return res.status(400).json({ "message": "User alerdy exist" })
        }

        User = new user({name,email,password})

        await User.save();

        const token = await User.getJWTToken()

        res.status(200).json({_id:User._id,name,email,token})

        

       
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

}

exports.login = async (req,res)=>{
    try {
        const { email, password } = req.body;
        if (!email || !password) {
           return res.status(400).json("All field are required")
        }
        let User = await user.findOne({ email })

        if (!User) {
           return res.status(400).json("No user exist")
        }
        const isMatch = await User.matchPassword(password);

        if (!isMatch) {
          return res.status(400).json("Invalid Creditails")
        }

        const token = await User.getJWTToken()
        res.status(200).json({ _id: User._id, name:User.name, email, token })


    } catch (error) {
        res.status(500).json(error)
        
    }
   

    
}

exports.findUser = async(req,res)=>{
    try {
        const id = req.params._id;
        let User = await user.findById(id);

        res.status(200).json(User)
    } catch (error) {
        res.status(500).json(error)
    }
   
}

exports.getUser = async (req,res)=>{
    try {
        const User = await user.find({})

        res.status(200).json(User)
        
    } catch (error) {
        res.status(500).json(error)
    }



}


