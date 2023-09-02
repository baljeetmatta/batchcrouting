const express=require("express");
const app=express();
const path=require("path");
app.use(express.static("public"));
const orderRoutes=require("./routes/orderRoutes");
const uroutes=require("./routes/userRoutes");
app.use("/orders",orderRoutes);
app.use("/users",uroutes);
app.get("/products/details/:x",(req,res)=>{
res.send("Details of the product "+req.params.x);
})
// app.get("/products/details",(req,res)=>{

//     res.send(req.query.id);

// })
app.get("/gmap/:x/:y",(req,res)=>{
    res.send(req.params.x+" "+req.params.y);

})
app.get("/gmap",(req,res)=>{
    res.send(req.query.source+" "+req.query.destination);

})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/login.html");
    
})
app.get("/login",(req,res)=>{

    res.send(req.query.username+" "+req.query.password);
})
// app.get("/orders",(req,res)=>{

//     res.send("Orders ?Home PAge");


// });
// app.get("/orders/history",(req,res)=>{

//     res.send("Orders history PAge");
    

// });
// app.get("/orders/details",(req,res)=>{
//     res.send("Orders details PAge");

// })
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/public/login.html");
})
app.listen(3000,(err)=>{
    console.log("Server Started...");

})