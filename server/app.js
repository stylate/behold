var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var terms = require("./assets/diseases.json");
var studies = require("./assets/studies.json");
var app = express();

app.listen(8000, () => {
    console.log("Server running on port 8000.");
});

app.use(cors());
app.use('/images', express.static('images'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/diseases", (req, res, next) => {
    let d = {
        diseases: terms
    };
    res.json(d);
});

app.get("/images", (req, res, next) => {
    res.json(studies);
});

app.post("/images/:id", (req, res, next) => {
    const data = req.body;
    console.log("post request data: ", data);
    res.send({data});
})
