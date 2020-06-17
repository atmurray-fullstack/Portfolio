const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

var PORT = process.env.PORT ||8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


app.listen(PORT,console.log(`Listening on ${PORT}`));