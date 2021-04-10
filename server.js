const express=require('express')
const app=express()
const data=require('./model/data')
app.use(express.json())
const router = express.Router()
router.post('/',async(req,res)=>{
    const data=new Data({
        userid:req.body.userid,
        info:req.body.info
    })
    try{
        const newdata=await data.save()
        res.status(200).json(newdata)
    }catch(err){
        console.log(err)
        res.status(400).json({message:err.message})
    }
})
module.exports=router
app.listen(8080,()=>{console.log("Server started")})
