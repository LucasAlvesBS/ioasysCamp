const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    password: 'postgres',
    database: 'login_authentication',
    host: 'localhost',
    port: 5432
});

module.exports = pool;