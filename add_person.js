const insertValue = process.argv.slice(2)
const knex = require('./knex_lookup')

console.log(insertValue)
knex('famous_people')
  .insert({
    first_name: insertValue[0],
    last_name: insertValue[1],
    birthdate: insertValue[2]
  }, 'id')
  .then((id) => {
    console.log(id)
  })
  .catch((err) => {
    console.log(err)
  })  

knex.destroy(()=>{})