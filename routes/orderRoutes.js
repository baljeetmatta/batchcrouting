const express=require("express");
const router=express.Router();
/*
/orders/
/orders/history
/orders/details
*/
router.get("/",(req,res)=>{
    res.send("Order Home Page");
})

router.get("/history",(req,res)=>{
    res.send("Order History Page");
})

router.get("/details",(req,res)=>{
    res.send("Order Details Page");
})
module.exports=router;

