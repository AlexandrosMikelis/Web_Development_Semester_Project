const express = require('express');
const router = express.Router({caseSensitive:true});

const leagueController = require('../controller/patras--league-controller');
const model = require('../model/db-pg.js');
const matches = [
  {
    "id" : 1,
    "time": "3:30",
    "date": "5/31/2022",
    "isLive":false,
    "isFinished":true,
    "team1": {
      "name": "Team7",
      "logo": "/images/Logo@2x.png"
    },
    "team2": {
      "name": "Team8",
      "logo": "/images/Logo@2x.png"
    },
  },
  {
    "id" : 2,
    "time": "6:30",
    "date": "5/31/2022",
    "isLive":true,
    "isFinished":false,
    "team1": {
      "name": "Team2",
      "logo": "/images/Logo@2x.png"
    },
    "team2": {
      "name": "Team3",
      "logo": "/images/Logo@2x.png"
    },
  },
  {
    "id" : 3,
    "time": "9:30",
    "date": "5/31/2022",
    "isLive":false,
    "isFinished":false,
    "team1": {
      "name": "Team2",
      "logo": "/images/Logo@2x.png"
    },
    "team2": {
      "name": "Team3",
      "logo": "/images/Logo@2x.png"
    },
  },
  {
    "id" : 4,
    "time": "3:30",
    "date": "6/1/2022",
    "isLive":false,
    "isFinished":false,
    "team1": {
      "name": "Team2",
      "logo": "/images/Logo@2x.png"
    },
    "team2": {
      "name": "Team3",
      "logo": "/images/Logo@2x.png"
    },
  },
  {
    "id" : 5,
    "time": "6:30",
    "date": "6/1/2022",
    "isLive":false,
    "isFinished":false,
    "team1": {
      "name": "Team2",
      "logo": "/images/Logo@2x.png"
    },
    "team2": {
      "name": "Team3",
      "logo": "/images/Logo@2x.png"
    },
  },
  {
    "id" : 6,
    "time": "9:30",
    "date": "5/31/2022",
    "isLive":false,
    "isFinished":false,
    "team1": {
      "name": "Team2",
      "logo": "/images/Logo@2x.png"
    },
    "team2": {
      "name": "Team3",
      "logo": "/images/Logo@2x.png"
    },
  }
]
router.get('/', (req, res) => {
  res.render('index',{aftersignup:false,loggedin :false, style:["modal","loginstyle","index",'alert2']})
  });

router.get('/index', (req, res) => {
  res.render('index',{aftersignup:false,loggedin :false, style:["modal","loginstyle","index",'alert2']})
  });

router.get('/matches',  (req, res) => {
  res.render('matches',{aftersignup:false,match :matches,loggedin :false, style:["modal","loginstyle","index",'matches']})
  });

router.get('/teams',  (req, res) => {
    res.render('teams',{aftersignup:false,loggedin :false, style:["modal","loginstyle","index",'player']})
    });

router.get('/scores',  (req, res) => {
      res.render('scores',{aftersignup:false,loggedin :false, style:["modal","loginstyle","index",'matches']})
      });

router.get('/statistics',  (req, res) => {
    res.render('statistics',{aftersignup:false,loggedin :false, style:["modal","loginstyle","index",'matches']})
    });
  
router.get('/players',  (req, res) => {
  res.render('players',{aftersignup:false,loggedin :false, style:["modal","loginstyle","index",'players']})
});

router.get('/manager-register', (req, res) => {
      res.render('manager-register', { loggedin: false, disabled:false,teamname:"My Team" ,
        style: ["modal","loginstyle","index","manager-register"]})
    });

//##############################################################
router.get('/',  leagueController.addNewUser)
//##############################################################

module.exports = router;
