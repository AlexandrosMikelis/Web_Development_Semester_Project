const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'patras-league-db',
    password: 'koko1234',
    port: 5433
})

const getManagers = (request, response) => {
    
    pool.query('SELECT * FROM public."Manager"', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows);
    })
  }

const getManagerById = (request, response) => {
    const id = parseInt(request.params.MngrID);
    pool.query('SELECT * FROM public."Manager" WHERE "MngrID"=$1',[id],(error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
}

const createManager = (request, response) => {
    const { Email, MngrPassword, MngrID, FirstName, LastName, Address, PostalCode, Phone, TeamName, Org} = request.body;
    pool.query('INSERT INTO public."Manager"(Email, MngrPassword, MngrID, FirstName, LastName, Address, \
                PostalCode, Phone, TeamName, Org) VALUES ($1, %2, $3, %4, $5, %6, $7, $8, $9, $10)',
                [Email, MngrPassword, MngrID, FirstName, LastName, Address, PostalCode, Phone, TeamName, Org],(error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
}
module.exports = {getManagers,getManagerById,createManager};