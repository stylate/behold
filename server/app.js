var express = require("express");
var terms = require("./assets/diseases.json");
var studies = require("./assets/studies.json");
var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});

app.use('/images', express.static('images'));

app.get("/images", (req, res, next) => {
    res.json(studies);
});

app.get("/diseases", (req, res, next) => {
    let d = {
        diseases: terms
    };
    res.json(d);
});

// do post request after building front-end


