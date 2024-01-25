const express = require("express");
const app = express();
const PORT = 5000;
const router = require("./router/auth-router");

app.use("/api/auth", router)

// app.get("/",(req,res)=> {
//     res.status(200).send("Welcome to the job search world");
// });

// app.get("/himanshu",(req,res)=> {
//     res.status(200).send("Welcome !!");
// });

app.listen(PORT, ()=>{
    console.log(`server is live at port : ${PORT}`);
});