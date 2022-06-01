const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();
// // console.log(process.env)

const sql = require('./db-pg.js');
const bcrypt = require('bcrypt');



// // const pool = new pg.Pool({
// //     connectionString: process.env.DATABASE_URL, //μεταβλητή περιβάλλοντος
// //     ssl: {
// //       rejectUnauthorized: false
// //     }
// //   });

// // const pool = new pg.Pool();  // to connect to the local database


// // εναλλακτικά...
// const pool = new pg.Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'league',
//     password: '24121998',
//     port: 5432
// })

// async function connect() {
//     try {
//         const client = await pool.connect();
//         console.log("connected")
//         return client
//     }
//     catch(e) {
//         console.error(`Failed to connect ${e}`)
//     }
// }

// exports.PPRINT = function (firstname, password, email, lastname, address, phone, ps,org, callback) {

// 	const query = {
// 		text: `INSERT INTO public."Manager" ("FirstName", "Password", "e-mail","LastName","Address","PostalCode","Phone,"Org") VALUES
// 		($1, $2, $3, $4, $5, $6, $7);`,
// 		values: [firstname, password, email, lastname, address, phone, ps,org]
// 	}

// 	  sql.query(query, (err, res) => {
// 		if (err) {
// 			console.log(err.stack)
// 			callback(err.stack)
// 		}
// 		else {
// 			callback(null, res)

// 		}
// 	})
// }

//################################################

exports.PPRINT = function(req, callback) {

	const query = {
		text: `SELECT * FROM public."Manager"`,
		values: [],
	}
	sql.query(query, (err, res) => {
		if (err) {
			console.log(err)
			callback(err)
		}
		else {
            console.log(res.rows[0])
		}
	})

}
//################################################

function getTeamIdfromManager (managerid,callback) {
	// managerid = "367643"
	const query = {
		text: `SELECT "TeamID" FROM public."Team" JOIN public."Manager"
		 ON "ManagerID"=$1 AND public."Team"."ManagerID" = public."Manager"."MngrID" ;`,
		values: [managerid]
	}

	  sql.query(query, (err, res) => {
		if (err) {
			console.log(err.stack)
			callback(err.stack)
		}
		else {
			callback(null, res)
		}
	})
}

function getTeamPlayers(managerid, callback) {

	const query = {
		text: `SELECT "FullName","PlayerPosition","PlayerRole",public."Team"."TeamID" FROM public."Player" JOIN public."Team"
		 ON "ManagerID"=$1 AND public."Team"."TeamID" = public."Player"."TeamID" ;`,
		values: [managerid]
	}

	  sql.query(query, (err, res) => {
		if (err) {
			console.log(err.stack)
			callback(err.stack)
		}
		else {
			callback(null, res)

		}
	})
}

exports.showMyTeam = function(req,callback){

	const userid = req.session.loggedUserId
	// const userid = "367643";
	getTeamPlayers(userid, callback)

}


function createMyTeam (req,res) {
	const userid = req.session.loggedUserId

	const query = {
		text: `INSERT INTO public."Team" ("Members","TeamID","MangerID","Field")
		VALUES($1,$2,$3);`,
		values: ["0",makeid(6),managerid]
	}

	  sql.query(query, (err, res) => {
		if (err) {
			console.log(err.stack)
			callback(err.stack)
		}
		else {
			callback(null, res)
		}
	})
}

exports.doPlayers = function(req,res) {

	const query = {
		text: `SELECT COUNT(*)
			FROM "Team" JOIN "Manager"
			WHERE "MngrID"=$1 AND "MngrID"="ManagerID",;`,
		values: [managerid]
	}

	  sql.query(query, (err, res) => {
		if (err) {
			console.log(err.stack)
			callback(err.stack)
		}
		else {
			callback(null, res)
		}
	})

}


//ignore below
// exports.doPlayers = function(req,res){
// 	const userid = req.session.loggedUserId
// 	// const userid = "367643";
// 	new Promise( (resolve) => {
// 				getTeamIdfromManager((err, result) => {
// 					if (err) {
// 						callback(err);
// 					}
// 					console.log(result.rows[0].teamId)
// 					teamId = result.rows[0].teamId
// 					resolve(teamId)
// 				})
// 			})
// 			.then( (teamId) => {
// 				return new Promise( (resolve) =>{
// 					const query = {
// 						text:`SELECT COUNT(*)
// 						FROM "Player" 
// 						WHERE "TeamID"=$1;`,
// 						values: [teamId]
// 					}
		
// 					sql.query(query, (err, res) => {
// 						if (err) {
// 							console.log(err.stack)
// 							callback(err.stack)
// 						}
// 						memcount = res.rows[0]
// 						resolve(memcount)
// 					})
// 				})
// 			})
// 			.then( (memcount) => {
// 				const promiseList = []
// 		        if(memcount !== 0) {   
// 					players.forEach(el => {
// 					const query = {
// 						text: `INSERT INTO public."Player" \
// 						("PlayerID", "FullName", "PlayerPosition","PlayerRole","TeamID") VALUES
// 						($1, $2, $3 ,$4, $5);`,
// 						values: [players.id, players.name, players.position, players.role , players.teamId],
// 						}
// 					promiseList.push(
// 						sql.query(query)
// 					)
// 				})
// 				Promise.all(promiseList)
// 					.then(callback(null))
// 					.catch(e => {
// 						console.error(e)
// 						callback(e)
// 					})
// 				}
// 			})
// 			.catch(e => {
// 				console.error(e)
// 				callback(e)
// 			})
// 		}








function getUserNames(username, callback) {

	const query = {
		text: `SELECT * FROM public."Manager" WHERE "Email"=$1;`,
		values: [username]
	}

	  sql.query(query, (err, res) => {
		if (err) {
			console.log(err.stack)
			callback(err.stack)
		}
		else {
			callback(null, res)

		}
	})
}
exports.getUserByUsername = (username, callback) => {

	getUserNames(username, callbackFunction);
	
	function callbackFunction(err, res) {
		let user;
		if (err) {
			callback(err);
		}
		if (res.rowCount == 0){
			console.log("No such user exists")
			callback(null)
		}
		else {
			// user = { id: res.rows[0].MngrID };
            user = { id: res.rows[0].MngrID, email: res.rows[0].Email, password: res.rows[0].MngrPassword, firstname: res.rows[0].FirstName};
			const query = {
				text: `SELECT "MngrID" FROM public."Manager" WHERE "MngrID"=$1;`,
				values: [user.id]
			}
		
			sql.query(query, (err, res) => {
				if (err) {
					console.log(err.stack)
					callback(err.stack)
				}
				else {
					user.userId = res.rows[0].MngrID
					callback(null, user)
		
				}
			})
		}
		
	} 

}
function addNewUser(newuser, callback) {

	const query = {
		text: `INSERT INTO public."Manager" ("Email", "MngrPassword", "MngrID", "FirstName","LastName","Address","PostalCode","Phone", "TeamName", "Org") 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`,
		values: [newuser.email, newuser.password, newuser.id, newuser.fistname, newuser.lastname,
            newuser.address, newuser.postalcode, newuser.phone, newuser.teamname, newuser.org]
	}

	  sql.query(query, (err, res) => {
		if (err) {
			console.log(err.stack)
			callback(err.stack)
		}
		else {
			callback(null, res)
		}
	})
}
exports.registerUser = function (email, password, id, firstname, lastname, address, postalcode, phone, teamname, org, callback) {
    // ελέγχουμε αν υπάρχει χρήστης με αυτό το username
    exports.getUserByUsername(email, async (err, user) => {
        if (user != undefined) {
            callback(null, null, { message: "Υπάρχει ήδη χρήστης με αυτό το όνομα" })
        } else {
            try {
                const hashedPassword = await bcrypt.hash(password, 10);
                let newuser = {"email" : email, "password":hashedPassword, "id": id, "fistname":firstname, "lastname":lastname, "address":address, "postalcode":postalcode, "phone":phone, "teamname":teamname, "org":org}
				addNewUser(newuser, callbackFunction)
				function callbackFunction(err, res) {
					let user;
					if (err) {
						callback(err);
					}
					callback(null,res);
				}

            } catch (error) {
                callback(error);
            }
        }
    })
}

//admin accept button action=/managerid routerget()/:managerid 
//meta id=res.body.managerid kai update Manager 
//################################################

// exports.PPRINT = async function (id,user, callback) {
//     console.log('to insert...',user)

//     const sql = `INSERT INTO "Manager" ("e-mail", "Password","ID" ,"FirstName","LastName","Address","PostalCode","Phone","Org") 
//         VALUES ('${user.email}', '${user.password}', '${id}' , '${user.firstname}','${user.lastname}', '${user.address}', '${user.ps}', '${user.phone}', '${user.org}');`;
//     try {
//         const client = await connect();
//         const res = await client.query(sql)
//         await client.release()
//         callback(null, res.rows) // επιστρέφει array
//     } 
//     catch (err) {
//             callback(err, null);
//         }
//     }

