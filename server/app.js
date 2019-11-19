var express = require("express");
var terms = require("./assets/diseases.json");
var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/diseases", (req, res, next) => {
    let d = {
        diseases: terms
    };
    res.json(d);
})