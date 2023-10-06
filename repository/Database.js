var mysql  = require('mysql2');

var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'dbsteam'
}).promise();

async function selectSkins(){
  const query = await connection.query('SELECT * FROM SKINS')
  return query[0]
} 

module.exports = {
  selectSkins
}

