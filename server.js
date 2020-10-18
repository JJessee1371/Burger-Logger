const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const app = express();
const routes = require('./controllers/burger_controller');
const PORT = process.env.PORT || 3000;

app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});