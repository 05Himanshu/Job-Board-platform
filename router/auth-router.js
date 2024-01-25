const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("Router hosted")
});

router.route("/himanshu").get((req,res)=>{
    res.status(200).send("Router hosted himanshu")
});

router.route("/register").get((req,res)=>{
    res.status(200).send("Welcome to registration page")
});

module.exports = router;