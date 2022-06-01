const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./model/queries');
const port = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.get('/managers', db.getManagers);
app.get('/managers/:MngrID', db.getManagerById);
app.post('/managers',db.createManager);
app.listen(port, () => { console.log("Περιμένω αιτήματα στο port " + port) });
// const express = require('express')
// const { engine } = require('express-handlebars');
// const compression = require('compression');
// const path = require('path');
// const app = express();
// let port = process.env.PORT || '3000';
// const routes = require('./routes/patras--league-routes');
// const model = require('./model/patras--league-model-pg-db.js');

// app.use(express.static('public'))
// app.engine('hbs', engine({ extname: '.hbs'}));
// app.set('view engine', 'hbs');
// app.use(express.urlencoded({ extended: false }));
// app.use(compression()); //Compress all routes
// app.use('/', routes);
// app.get('/', (request, response) => {
//     console.log(response);
//   })
// app.listen(port, () => { console.log("Περιμένω αιτήματα στο port " + port) });
  

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

