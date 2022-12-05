const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

const port = 3000;
const app = express();


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.set("view engine", "ejs");

router(app);

// Start the server
const server = app.listen(port, (error) => {
    if (error){
        return console.log(`Error: ${error}`);
    }
    console.log(`Server listening on port ${server.address().port}`);
});