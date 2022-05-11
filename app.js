const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

const dbURL = "mongodb://localhost:27017";
mongoose.connect(dbURL + "/surveyDB");

const questionSchema = mongoose.Schema({
    question: "",
    answer: "option a",
    answer: {
        a: "option a",
        b: "option b",
        c: "option c",
        d: "option d",
    }
});

const Question = mongoose.model("Question", questionSchema);

const questionTemp = new Question({
    question: "Captial of India:",
    answer: "Delhi",
    answer: {
        a: "Delhi",
        b: "Chennai",
        c: "Mumbai",
        d: "Bengaluru",
    }
});

const questions = [questionTemp];














app.get("/", (req, res) => {
    // res.send("Hello World!");
    res.render("index");
});

app.get("/admin", (req, res) => {
    res.render("admin/admin")
});

app.listen("3000", () => {
    console.log("Server started!! at http://localhost:3000/");
});