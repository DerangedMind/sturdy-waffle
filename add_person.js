const insertValue = process.argv.slice(2)
const knex = require('./knex_lookup')

console.log(insertValue)
knex('famous_people')
  .insert({
    first_name: insertValue[0],
    last_name: insertValue[1],
    birthdate: insertValue[2]
  }, 'id')
  .asCallback((err, result) => {
    if (err) {
      throw new Error("failed to connect!")
    }
    console.log(result.id, 'added to db')
  })

knex.destroy(()=>{})