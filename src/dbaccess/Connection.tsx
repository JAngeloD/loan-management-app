/*
  Code from the 'Suggested Code Structure' section in node-postgres docs.

  -Allows for one-stop logging/diagnostics
  -Adjust node-postgre API without having to change code in every route

*/

const { Pool } = require('pg')

// Will make use of env variables, the config block is temporary.
const pool = new Pool({
  //DO NOT PULL ACTUAL DATA IN HERE PLEASE
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})

module.exports = {
  async query(text: string, params: any) {
    const start = Date.now()
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log('executed query', { text, duration, rows: res.rowCount })
    return res
  },

  async getClient() {
    const client = await pool.connect()
    const query = client.query
    const release = client.release

    const timeout = setTimeout(() => {
      console.error('A client has been checked out for more than 5 seconds!')
      console.error(`The last executed query on this client was: ${client.lastQuery}`)
    }, 5000)

    client.query = (...args: [any]) => {
      client.lastQuery = args
      return query.apply(client, args)
    }
    client.release = () => {

      clearTimeout(timeout)

      client.query = query
      client.release = release
      return release.apply(client)
    }
    return client
  },
}
