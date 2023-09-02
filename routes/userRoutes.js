const express=require("express");
const router=express.Router();
/*
/orders/
/orders/history
/orders/details
*/
router.get("/",(req,res)=>{
    res.send("USer Home Page");
})

router.get("/history",(req,res)=>{
    res.send("USer History Page");
})

router.get("/details",(req,res)=>{
    res.send("USer Details Page");
})
module.exports=router;

