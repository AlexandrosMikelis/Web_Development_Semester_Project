const express = require('express');
const router = express.Router({caseSensitive:true});

const patrasleagueController = require('../controller/patras--league-controller');
const model = require('../model/db-pg.js');

const statistics = [
  {
    "id": 1,
    "TeamName" : "Barcelona",
    "TeamLogo" : "/images/team-logos/barcelona.png",
    "Stats" : {
      "matches_played" : 5,
      "goals" : 20,
      "passes" : 150,
      "fouls":4,
      "yellow_cards":1,
      "topScorrer": {
        "name" : "Αλέξανδρος Μικέλης",
        "position" : "Επιθετικός",
        "photo": "/images/players/ezgif.com-gif-maker.png",
        "goals" : 6,
        "assists": 5,
        "yellow_cards":1,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 2,
    "TeamName" : "Cavalry",
    "TeamLogo" : "/images/team-logos/sevilla.png",
    "Stats" : {
      "matches_played" : 4,
      "goals" : 9,
      "passes" : 120,
      "fouls":7,
      "yellow_cards":3,
      "topScorrer": {
        "name" : "Μάρκος Σιδηρόπουλος",
        "photo": "/images/players/00001.jpg",
        "position" : "Επιθετικός",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 3,
    "TeamName" : "Ccut",
    "TeamLogo" : "/images/team-logos/ccut.jpg",
    "Stats" : {
      "matches_played" : 5,
      "goals" : 12,
      "passes" : 100,
      "fouls":9,
      "yellow_cards":2,
      "topScorrer": {
        "name" : "Αλέξανδρος Μικέλης",
        "position" : "Επιθετικός",
        "photo": "/images/players/00003.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 4,
    "TeamName" : "Dragons",
    "TeamLogo" : "/images/team-logos/dragons.jpg",
    "Stats" : {
      "matches_played" : 5,
      "goals" : 8,
      "passes" : 150,
      "fouls":4,
      "yellow_cards":1,
      "topScorrer": {
        "name" : "Χρίστος Παπανικολάου",
        "position" : "Επιθετικός",
        "photo": "/images/players/00004.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 5,
    "TeamName" : "Evergreen",
    "TeamLogo" : "/images/team-logos/evergreen.jpg",
    "Stats" : {
      "matches_played" : 5,
      "goals" : 8,
      "passes" : 150,
      "fouls":4,
      "yellow_cards":1,
      "topScorrer": {
        "name" : "Χρίστος Παπανικολάου",
        "position" : "Επιθετικός",
        "photo": "/images/players/00005.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 6,
    "TeamName" : "Hammer Heads",
    "TeamLogo" : "/images/team-logos/hammerheads.jpg",
    "Stats" : {
      "matches_played" : 4,
      "goals" : 9,
      "passes" : 120,
      "fouls":7,
      "yellow_cards":3,
      "topScorrer": {
        "name" : "Μάρκος Σιδηρόπουλος",
        "position" : "Επιθετικός",
        "photo": "/images/players/00006.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 7,
    "TeamName" : "NY",
    "TeamLogo" : "/images/team-logos/ny.jpg",
    "Stats" : {
      "matches_played" : 5,
      "goals" : 12,
      "passes" : 100,
      "fouls":9,
      "yellow_cards":2,
      "topScorrer": {
        "name" : "Αλέξανδρος Μικέλης",
        "position" : "Επιθετικός",
        "photo": "/images/players/00006.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 8,
    "TeamName" : "Weston",
    "TeamLogo" : "/images/team-logos/weston.jpg",
    "Stats" : {
      "matches_played" : 5,
      "goals" : 8,
      "passes" : 150,
      "fouls":4,
      "yellow_cards":1,
      "topScorrer": {
        "name" : "Χρίστος Παπανικολάου",
        "position" : "Επιθετικός",
        "photo": "/images/players/00002.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 9,
    "TeamName" : "Boston",
    "TeamLogo" : "/images/team-logos/boston.jpg",
    "Stats" : {
      "matches_played" : 5,
      "goals" : 8,
      "passes" : 150,
      "fouls":4,
      "yellow_cards":1,
      "topScorrer": {
        "name" : "Χρίστος Παπανικολάου",
        "position" : "Επιθετικός",
        "photo": "/images/players/00001.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 10,
    "TeamName" : "Cavalry",
    "TeamLogo" : "/images/team-logos/cavalry.jpg",
    "Stats" : {
      "matches_played" : 4,
      "goals" : 9,
      "passes" : 120,
      "fouls":7,
      "yellow_cards":3,
      "topScorrer": {
        "name" : "Μάρκος Σιδηρόπουλος",
        "position" : "Επιθετικός",
        "photo": "/images/players/00004.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 11,
    "TeamName" : "Barcelona",
    "TeamLogo" : "/images/team-logos/barcelona.png",
    "Stats" : {
      "matches_played" : 5,
      "goals" : 8,
      "passes" : 150,
      "fouls":4,
      "yellow_cards":1,
      "topScorrer": {
        "name" : "Χρίστος Παπανικολάου",
        "position" : "Επιθετικός",
        "photo": "/images/players/00002.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 12,
    "TeamName" : "Cavalry",
    "TeamLogo" : "/images/team-logos/sevilla.png",
    "Stats" : {
      "matches_played" : 4,
      "goals" : 9,
      "passes" : 120,
      "fouls":7,
      "yellow_cards":3,
      "topScorrer": {
        "name" : "Μάρκος Σιδηρόπουλος",
        "photo": "/images/players/00001.jpg",
        "position" : "Επιθετικός",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 13,
    "TeamName" : "Ccut",
    "TeamLogo" : "/images/team-logos/ccut.jpg",
    "Stats" : {
      "matches_played" : 5,
      "goals" : 12,
      "passes" : 100,
      "fouls":9,
      "yellow_cards":2,
      "topScorrer": {
        "name" : "Αλέξανδρος Μικέλης",
        "position" : "Επιθετικός",
        "photo": "/images/players/00003.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 14,
    "TeamName" : "Dragons",
    "TeamLogo" : "/images/team-logos/dragons.jpg",
    "Stats" : {
      "matches_played" : 5,
      "goals" : 8,
      "passes" : 150,
      "fouls":4,
      "yellow_cards":1,
      "topScorrer": {
        "name" : "Χρίστος Παπανικολάου",
        "position" : "Επιθετικός",
        "photo": "/images/players/00004.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 15,
    "TeamName" : "Evergreen",
    "TeamLogo" : "/images/team-logos/evergreen.jpg",
    "Stats" : {
      "matches_played" : 5,
      "goals" : 8,
      "passes" : 150,
      "fouls":4,
      "yellow_cards":1,
      "topScorrer": {
        "name" : "Χρίστος Παπανικολάου",
        "position" : "Επιθετικός",
        "photo": "/images/players/00005.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
  {
    "id": 16,
    "TeamName" : "Hammer Heads",
    "TeamLogo" : "/images/team-logos/hammerheads.jpg",
    "Stats" : {
      "matches_played" : 4,
      "goals" : 9,
      "passes" : 120,
      "fouls":7,
      "yellow_cards":3,
      "topScorrer": {
        "name" : "Μάρκος Σιδηρόπουλος",
        "position" : "Επιθετικός",
        "photo": "/images/players/00006.jpg",
        "goals" : 4,
        "assists": 2,
        "yellow_cards":0,
        "hat_tricks":0
      }
    }
  },
]

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
  },
  {
    "id" : 7,
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
    "id" : 8,
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
    "id" : 9,
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
    "id" : 10,
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
    "id" : 11,
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
    "id" : 12,
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
const season = {
  prev_year : 2022,
  next_year : 2023
}
function makeBatches(jsonArray){
  var batchedJsonArray=[];
  batch_size = 5;
  var i;
  for(i=0;i<jsonArray.length;i=i+5){
    var batchtitle = `batch'${i}'`;
    if(i == Math.ceil(jsonArray.length / batch_size) - 1 ){
      batchedJsonArray.push({id:Math.ceil(i / batch_size), batchtitle : jsonArray.slice(i,jsonArray.length)});
    }
    else batchedJsonArray.push({ id:Math.ceil(i / batch_size),batchtitle : jsonArray.slice(i,i+5)});
  }
  return batchedJsonArray;
}
router.get('/', (req, res) => {
  res.render('index',{aftersignup:false,loggedin :false,notadmin:true, style:["_globals","modal","navbar","loginstyle","index",'alert2','footer']})
  });

router.get('/index', (req, res) => {
  res.render('index',{aftersignup:false,loggedin :false,notadmin:true, style:["_globals","modal","loginstyle","navbar","index",'alert2','footer']})
  });

router.get('/matches',  (req, res) => {
  res.render('matches',{aftersignup:false,Season:season,match :makeBatches(matches),loggedin:false,notadmin:true, style:["_globals","modal","loginstyle","navbar",'matches','footer']})
  });

router.get('/teams',  (req, res) => {
    res.render('teams',{aftersignup:false,loggedin :false,notadmin:true,team:statistics ,style:["_globals","modal","navbar","footer","loginstyle","index",'teams']})
    });

router.get('/scores',  (req, res) => {
      res.render('scores',{aftersignup:false,loggedin :false,notadmin:true, style:["_globals","modal","navbar","footer","loginstyle","index","scores"]})
      });

router.get('/statistics',  (req, res) => {
    res.render('statistics',{aftersignup:false,loggedin :false,notadmin:true,stats : statistics, style:["_globals","modal","navbar","footer","loginstyle",'statistics']})
    });
  
router.get('/players',  (req, res) => {
  res.render('players',{aftersignup:false,loggedin :false,notadmin:true, style:["_globals","modal","navbar","footer","loginstyle","index",'players']})
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
router.get('/', (req, res) => res.render('index',{notadmin:true,loggedin:false,style:["modal","navbar","loginstyle","index"]}))
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
