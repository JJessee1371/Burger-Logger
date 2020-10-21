const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;

//Import server routes
const routes = require('./controllers/burger_controller');
app.use(routes);

//Data parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Handlebars as the engine for the application
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Set server to listen for interaction
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});