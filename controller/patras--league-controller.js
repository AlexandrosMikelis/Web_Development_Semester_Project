// 'use strict';

// const model = require('../model/meet--me-model-heroku-pg-db.js');

const bcrypt = require('bcrypt')
const crypto = require("crypto");

const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

function makeid(length) {
    var result           = [];
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    	result.push(characters.charAt(crypto.randomInt(0, charactersLength)));

   	}  
   return result.join('');
}

// exports.PPRINT = function (req, res) {
//     // model.registerUser(req.body.username, req.body.password, (err, result, message) => {
//     model.PPRINT( req.body.FirstName, req.body.UserPass,req.body.UserEmail
//         ,req.body.LastName,req.body.Address,req.body.Phone1,req.body.ZipCode,req.body.OrgName,(err, result, message) => {
        
//         if (err) {
//             console.error('registration error: ' + err);
//             res.render('index');
//         }
//         else if (message) {
//             res.render('index')
//         }
//         else {
//             res.redirect('/index');
//         }
//     })
// }
//##############################################################
const model = require('../model/patras--league-model-pg-db.js');

exports.PPRINT = (res,req) => {

	
	model.PPRINT( (err, res) => {
		if (err) {
            res.send(err);
        }
        else {
            res.forEach(console.log(res))
            }
    })
}
//##############################################################

// exports.createMyTeam = (req,res) => {

//     model.createMyTeam(req,(err,result) =>{
//         if (err) {
//             console.error('registration error: ' + err);
//         }
//         else {
//             console.log(res.rows)
//     }
//     })
// }

exports.showMyTeam = function (req, res) {
    
    model.showMyTeam(req, (err, result) => {
        
        if (err) {
            console.error('registration error: ' + err);
            res.render('index');
        }
        else {
            players = []
            subs = []
            players = result.rows.slice(0,11)
            subs = result.rows.slice(11)
            // console.log(result)
            // console.log(result.rows[0].FullName)
            res.render('team-layout-management',{ players: players, subs:subs, notadmin:true,loggedin: true, disabled:false, 
                teamname:"My Team" , style: ["signed-manager-main","team-layout-management"]})
        }
    })
}


exports.doPlayers = function(req,res){
    console.log(req.body.Sub0)
    console.log(req.body.Player0)
    console.log(req.body.Player1)
    console.log(req.body.Pos0)
    // model.createMyTeam(req.Player0,req,(err,res) => {
    //     if (err) {
    //         console.error('registration error: ' + err);
    //         res.render('index');
    //     }
    //     else {
    //         console.log(res)
    //     }
    // })
}


















exports.doLogin = function (req, res) {
    //Ελέγχει αν το username και το password είναι σωστά και εκτελεί την
    //συνάρτηση επιστροφής authenticated

    model.getUserByUsername(req.body.UserEmail, (err, user) => {
        if (user == undefined) {
            console.log("undefined")
            res.render('index',{ failedloggin: true ,style:["modal","loginstyle","index","alert3"]})
        }
        else {
            //Θέτουμε τη μεταβλητή συνεδρίας "loggedUserId"
            async function checkcode(){
                // console.log(req.body.UserPass)
                    //   console.log(req.body.UserPass)  
                    //   console.log(user.password)  

                bcrypt.compare(req.body.UserPass, user.password, function(err, isMatch) {

                    if (err) {
                    throw err
                    } else if (!isMatch) {
                        res.redirect("/failed");
                    } else {
                        req.session.loggedUserId = user.id;
                        // console.log(req.session.loggedUserId)
                        req.session.loggedUserName = user.firstname;
                        console.log(req.session.loggedUserName)
                        // req.session.userId = user.userId
            
                        async function saveit(){
                            await req.session.save()
                            console.log(req.session)
                            const redirectTo = "/loggedin";               
                            res.redirect(redirectTo);
                        }
                        saveit();
                    }
                })
            }
            checkcode();
        }
    })
}

//Τη χρησιμοποιούμε για να ανακατευθύνουμε στη σελίδα /login όλα τα αιτήματα από μη συνδεδεμένςου χρήστες
exports.checkAuthenticated = function (req, res, next) {
    //Αν η μεταβλητή συνεδρίας έχει τεθεί, τότε ο χρήστης είναι συνεδεμένος
    // if(req.originalUrl=="/" && req.session.loggedUserId){
    //     console.log("efttasa")
    //     res.render('index',{ loggedin:true ,style:["modal","loginstyle","index2","alert2"]})
    // }
    // else if(req.originalUrl=="/"){
    //     next()
    // }
    // else if (req.session.loggedUserId) {
    //     console.log("user is authenticated", req.originalUrl);
    //     //Καλεί τον επόμενο χειριστή (handler) του αιτήματος
    //     next();
    // }
    // else {
    //     res.redirect('/login');
    // }
    //Αν η μεταβλητή συνεδρίας έχει τεθεί, τότε ο χρήστης είναι συνεδεμένος
    if (req.session.loggedUserId) {
        console.log("user is authenticated", req.originalUrl);
        //Καλεί τον επόμενο χειριστή (handler) του αιτήματος
        next();
    }
    else if(req.originalUrl=="/"){
        next()
    }
    else {
        //Ο χρήστης δεν έχει ταυτοποιηθεί, αν απλά ζητάει το /login ή το register δίνουμε τον
        //έλεγχο στο επόμενο middleware που έχει οριστεί στον router
        if ((req.originalUrl === "/login") || (req.originalUrl === "/register")) {
            console.log("yes")
            next()
        }
        else {
            //Στείλε το χρήστη στη "/login" 
            console.log("not authenticated, redirecting to /login")
            res.redirect(req.originalUrl)
        }
    }
}


exports.doLogout = (req, res) => {
    //Σημειώνουμε πως ο χρήστης δεν είναι πια συνδεδεμένος
    console.log("loggedout")
    req.session.destroy();
    res.redirect('/');
}

exports.doRegister = function (req, res) { 
    // model.registerUser(req.body.username, req.body.password, (err, result, message) => {
    model.registerUser(req.body.UserEmail, req.body.UserPass, makeid(7), req.body.FirstName,req.body.LastName, req.body.Address,
         req.body.ZipCode,req.body.Phone1, req.body.TeamName, req.body.OrgName, (err, result, message) => {
        
        if (err) {
            console.error('registration error: ' + err);
            res.render('index', { message: 'An error occured in the database' });
        }
        else if (message) {
            res.render('index')
        }
        else {
            res.redirect('/afterregister');
        }
    })
}


exports.doAdminLogin = function (req, res) {

    if (req.body.username == process.env.ADMINUSERNAME && req.body.password == process.env.ADMINPASSWORD){
        req.session.loggedUserId=undefined;
        req.session.loggedLibraryId=undefined;


        req.session.loggedUserName='Admin';
        req.session.admin=1;
        console.log( process.env.ADMINUSERNAME)
        // req.session.userId = user.userId
        
        async function saveit(){
            await req.session.save()
            // console.log(req.session)
            // const redirectTo = "/loggedin";               
            //res.render('home', {alert: 'Επιτυχής σύνδεση', style: ['home'], partialContext: {name:req.session.loggedUserName, userid: req.session.loggedUserId}, loggedin:true})
            // res.render('admin', {style: ["staff"], partialContext: {name:'Admin', admin:true}, loggedin:true})
            res.redirect('/admin')
        }
        saveit();
    }
    else {
        res.render('admin-login', {alert:'Λάθος στοιχεία', style: ["main", 'admin-login'], loggedin:false})
    }

}


exports.checkAdminAuthenticated = function (req, res, next) {
    //Αν η μεταβλητή συνεδρίας έχει τεθεί, τότε ο χρήστης είναι συνεδεμένος
        // console.log("🚀 ~ file: library-network-controller.js ~ line 475 ~ req.originalUrl", req.session)

    if(req.session.admin){
        next()
    }
    else {
        res.redirect('/admin-login');
    }
}