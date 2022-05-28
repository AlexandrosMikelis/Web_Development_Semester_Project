// 'use strict';

// const model = require('../model/meet--me-model-heroku-pg-db.js');

// const bcrypt = require('bcrypt')


// exports.addNewUser = function (req, res) {
//     // model.registerUser(req.body.username, req.body.password, (err, result, message) => {
//     model.addNewUser( req.body.FirstName, req.body.UserPass,req.body.UserEmail
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
// const model = require('../model/patras--league-model-pg-db.js');

// exports.addNewUser = (res,req) => {

	
// 	model.addNewUser( (err, res) => {
// 		if (err) {
//             res.send(err);
//         }
//         else {
//             res.forEach(console.log(res))
//             }
//     })
// }
//##############################################################