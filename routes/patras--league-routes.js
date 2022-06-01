const express = require('express');
const router = express.Router({caseSensitive:true});

const patrasleagueController = require('../controller/patras--league-controller');
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
  res.render('index',{aftersignup:false,loggedin :false, style:["modal","loginstyle","navbar","index",'alert2']})
  });

router.get('/matches',  (req, res) => {
  res.render('matches',{aftersignup:false,match :matches,loggedin :false, style:["modal","loginstyle","navbar",'matches']})
  });

router.get('/teams',  (req, res) => {
    res.render('teams',{aftersignup:false,loggedin :false, style:["modal","loginstyle","index",'players']})
    });

router.get('/scores',  (req, res) => {
      res.render('scores',{aftersignup:false,loggedin :false, style:["modal","loginstyle","index",'matches']})
      });

router.get('/statistics',  (req, res) => {
    res.render('statistics',{aftersignup:false,loggedin :false, style:["modal","loginstyle","index",'statistics']})
    });
  
router.get('/players',  (req, res) => {
  res.render('players',{aftersignup:false,loggedin :false, style:["modal","loginstyle","index",'players']})
});

router.get('/manager-register', (req, res) => {
      res.render('manager-register', { loggedin: false,notadmin:true, disabled:false,teamname:"My Team" ,
        style: ["modal","loginstyle","index","manager-register"]})
    });

//##############################################################
// router.get('/',  patrasleagueController.PPRINT)
//##############################################################

// router.post('/signup', leagueController.PPRINT)

// router.get('/this/this',  controller.funct)
// router.post('/signup', (req, res) => {console.log(req.body.FirstName)});
router.get('/', (req, res) => res.render('index',{notadmin:true,style:["modal","loginstyle","index"]}))
// router.get('/s', (req, res) => res.render('manager-register',
//     { loggedin : false , style:["modal","loginstyle","index","manager-register"]}))
router.get('/registration-page', (req, res) => res.render('registration-page',{ notadmin:true, style:["modal","loginstyle","index","registration-page"]}))

// router.get('/yes',patrasleagueController.showMyTeam)
router.get('/team-layout-management',patrasleagueController.showMyTeam)

router.post('/submit1-status',patrasleagueController.doPlayers)
// router.post('/submit-status',patrasleagueController.doPlayers)

// router.post('/submit-status',patrasleagueController.doPlayers)



router.post('/login', patrasleagueController.doLogin);
router.post('/signup', patrasleagueController.doRegister);
router.get('/login', (req, res) => res.render('index',{ style:["modal","loginstyle","index"]}))
router.get('/loggedin',patrasleagueController.checkAuthenticated,(req, res) => res.render('signed-manager',{ notadmin:true,loggedin:true , mainpage:true, style:["modal","loginstyle","signed-manager-main"]}))
router.get('/logout', patrasleagueController.doLogout);

router.get('/afterregister',(req, res) => res.render('signed-manager', {partialContext: {name:req.session.loggedUserName},aftersignup:true , notadmin:true,loggedin:true,style:["modal","loginstyle","index","alert2"]}))
router.get('/failed', (req, res) => res.render('index',{ failedloggin: true ,style:["modal","loginstyle","index","alert3"]}))

router.get('/admin-login', (req, res) => res.render('admin-login', {notadmin:false, style: ["main", 'admin-login']} ))
router.post('/admin-login', patrasleagueController.doAdminLogin)

router.get('/admin', patrasleagueController.checkAdminAuthenticated, (req, res) => res.render('admin', {style: ["admin","signed-manager-main"]}))
router.get('/admin-requests', patrasleagueController.checkAdminAuthenticated, (req, res) => res.render('admin-requests', {style: ["signed-manager-main","admin-requests"]}))
router.get('/draw', patrasleagueController.checkAdminAuthenticated, (req, res) => res.render('admin', {style: ["admin","signed-manager-main"]}))

module.exports = router;
