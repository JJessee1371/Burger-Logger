const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./controllers/burger_controller');

//Serve static content from the public directory
app.use(express.static('public'));

//Data parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use server routes
app.use(routes);

//Set Handlebars as the engine for the application
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Set server to listen for interaction
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});