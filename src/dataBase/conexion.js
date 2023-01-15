const { Pool } = require('pg')

const credentials = {
    host: 'postgresql-guslopezr.alwaysdata.net',
    user: 'guslopezr',
    password: 'Gus@0920',
    database: 'guslopezr_likeme',
    port: '5432',
    allowExitOnIdle: true
}

const pool = new Pool(credentials)




module.exports = pool