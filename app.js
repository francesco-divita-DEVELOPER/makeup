const express=require("express");
const ejs=require("ejs");
const request=require("request");
const bodyParser=require("body-parser");

const app= express();



app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){

    res.render("home")

})

app.get("/about", function(req, res){

    res.render("about");

})

app.get("/register", function(req, res){
    res.render("registrer")
})


//66af3c68d30be07aa89581d0a848a79c-us17
//819778fe53
app.listen(process.env.PORT || 3000, function(){
    console.log("Server in ascolto ...")
})