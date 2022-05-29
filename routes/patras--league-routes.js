const express = require('express');
const router = express.Router({caseSensitive:true});

const leagueController = require('../controller/patras--league-controller');
const model = require('../model/db-pg.js');

router.get('/manager-register', (req, res) => {
      res.render('manager-register', { loggedin: false, disabled:false,teamname:"My Team" ,
        style: ["modal","loginstyle","index","manager-register"]})
    });

//##############################################################
router.get('/',  leagueController.addNewUser)
//##############################################################

// router.post('/signup', leagueController.addNewUser)

// router.get('/this/this',  controller.funct)
// router.post('/signup', (req, res) => {console.log(req.body.FirstName)});


module.exports = router;
