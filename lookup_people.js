const search = process.argv.slice(2)
client = require('./server')

client.query('SELECT * FROM famous_people WHERE first_name = $1 OR last_name = $1', search, (err, result) => {
  if (err) {
    return console.error('error running query', err)
  }
  console.log(`Found ${result.rowCount} person(s) by the name of '${search}':`)
  console.log(`- {result.rows[0].id}: ${result.rows[0].first_name} ${result.rows[0].last_name}, born '${result.rows[0].birthdate}`)
})