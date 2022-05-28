const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();
// // console.log(process.env)

// // const pool = new pg.Pool({
// //     connectionString: process.env.DATABASE_URL, //μεταβλητή περιβάλλοντος
// //     ssl: {
// //       rejectUnauthorized: false
// //     }
// //   });

// // const pool = new pg.Pool();  // to connect to the local database


// // εναλλακτικά...
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'league',
    password: '24121998',
    port: 5432
})

async function connect() {
    try {
        const client = await pool.connect();
        console.log("connected")
        return client
    }
    catch(e) {
        console.error(`Failed to connect ${e}`)
    }
}

// exports.addNewUser = function (firstname, password, email, lastname, address, phone, ps,org, callback) {

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
// const sql = require('./db-pg.js');

// exports.addNewUser = function(req, callback) {

// 	const query = {
// 		text: `SELECT * FROM public."Manager"`,
// 		values: [],
// 	}
// 	sql.query(query, (err, res) => {
// 		if (err) {
// 			console.log(err)
// 			callback(err)
// 		}
// 		else {
//             console.log(res.rows[0])
// 		}
// 	})

// }
//################################################

exports.addNewUser = async function (id,user, callback) {
    console.log('to insert...',user)

    const sql = `INSERT INTO "Manager" ("e-mail", "Password","ID" ,"FirstName","LastName","Address","PostalCode","Phone","Org") 
        VALUES ('${user.email}', '${user.password}', '${id}' , '${user.firstname}','${user.lastname}', '${user.address}', '${user.ps}', '${user.phone}', '${user.org}');`;
    try {
        const client = await connect();
        const res = await client.query(sql)
        await client.release()
        callback(null, res.rows) // επιστρέφει array
    } 
    catch (err) {
            callback(err, null);
        }
    }
