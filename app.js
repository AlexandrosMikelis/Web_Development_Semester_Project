 // "type": "module" in package.json to use import in .js files
// import { engine } from 'express-handlebars';
// import express from 'express'
// import compression from 'compression' 

const express = require('express')
const { engine } = require('express-handlebars');
const compression = require('compression');
const path = require('path')

const app = express()
const router = express.Router({caseSensitive:true});

app.use(express.static('public'))

app.engine('hbs', engine({ extname: '.hbs'}));
app.set('view engine', 'hbs');
let port = process.env.PORT || '3000';

const server = app.listen(port, () => { console.log("Περιμένω αιτήματα στο port " + port) });

app.use(express.urlencoded({ extended: false }));

const routes = require('./routes/patras--league-routes');

app.use(compression()); //Compress all routes
app.use('/', routes);

const model = require('./model/patras--league-model-pg-db.js');

// router.get('/afterregister',(req, res) => res.render('index',{style:["index"],layout:false}))
// app.use('/', router);
//app.use('/', routes); in start.js file //module.exports = router in router file and require in app.js
// app.get("/",(req, res) => {
// })

//*****************************************************************************
// app.get('/', (req, res) => {
//     res.render('manager-register',{ loggedin : false , style:["modal","loginstyle","index","manager-register"]})
//   });

// app.get('/', (req, res) => {
//       res.render('time-selection',{loggedin:true , style: ["signed-manager-main","time-selection"]})
//     });

// app.get('/', (req, res) => {
//     res.render('signed-manager', { loggedin: true,mainpage : true,
//        partialContext: {name: "John"},style : ["signed-manager-main"]})
//   });

// app.get('/', (req, res) => {
//   res.render('team-layout-management', { loggedin: true, disabled:true,teamname:"My Team" ,
//     style: ["signed-manager-main","team-layout-management","alert"]})
// });

// app.get('/afterregister', (req, res) => {
//   res.render('index',{aftersignup:true,loggedin :false, style:["modal","loginstyle","index",'alert2']})
//   });


// app.post("/signup", (req, res) => {
//     console.log("/", req.body.UserEmail);
//     // έχει συμπληρωθεί το userName στη φόρμα
//     // βρες τον χρήστη id ή δημιούργησε χρήστη αν δεν υπάρχει
//     const newuser = {"email":req.body.UserEmail, "password":req.body.UserPass, "id": req.body.UserPass, "firstname":req.body.FirstName, "lastname": req.body.LastName,"address": req.body.Address,"ps": req.body.ZipCode,"phone": req.body.Phone1,"org": req.body.OrgName}
//     let id="33373"
//     model.addNewUser(id,newuser,(err, row) => {
//     if (err){
//       console.log(err.message);
//       // return console.log(err.message);
//     }

//       console.log('POST / returned row....', row)
//       res.redirect("/manager-register")}
    
//   )});
module.exports = app;

//in start.js 
// require('dotenv').config();

// const app = require('./app');

