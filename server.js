var express = require("express");
var mongoose = require("mongoose");

var users = require("./routes/api/users");
var profile = require("./routes/api/profile");
var posts = require("./routes/api/posts");

var app = express();

mongoose.connect("mongodb://localhost/reactapp").catch(function(err){console.log(err)});

app.get("/", function(req,res){
   res.send("Ssup buddy boy"); 
});

app.use('/api/users', users);
app.use('/api/profiles', profile);
app.use('/api/posts', posts);

app.listen(process.env.PORT, process.env.IP, () => 
    console.log('Server taking off')
);

//npm run server for nodemon