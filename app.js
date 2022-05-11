const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

















app.get("/", (req, res)=>{
    // res.send("Hello World!");
    res.render("index");
});

app.get("/admin", (req, res)=>{
    res.render("admin/admin")
});

app.listen("3000", ()=>{
    console.log("Server started!! at http://localhost:3000/");
});