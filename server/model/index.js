const db = require('../db')

module.exports = {
  loadAll: (data)=>{
    var cs = new db.pgp.helpers.ColumnSet(['url', 'lastModified'], {table: 'photos'})
    var insertQuery = db.pgp.helpers.insert(data, cs)

    return db.db.none(insertQuery)
  },
  getAll: ()=> {
    return db.db.query('SELECT * from photos')
  },
  changeBoolean: (id, boolean)=>{
    return db.db.query(`UPDATE photos SET foaming=${boolean} WHERE id=${id}`)

  }
}