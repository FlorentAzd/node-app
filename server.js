let express = require('express');

let app = express();

let indexRouter = require('./routes/index')

// Define path of static file
app.use(express.static(__dirname+'/assets'))

//Defined view  path
app.set("views", __dirname+"/views");
app.set('view engine', 'ejs');

app.use("/", indexRouter)


// Faire écouter notre server sur un port ouvert
app.listen(process.env.PORT || 8080, function(){
    console.log("Server running on port http://localhost:8080")
});

module.exports = app