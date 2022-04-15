const db = require('../db')

module.exports = {
  loadAll: (data)=>{
    var cs = new db.pgp.helpers.ColumnSet(['url', 'lastModified'], {table: 'photos'})
    var insertQuery = db.pgp.helpers.insert(data, cs)

    return db.db.none(insertQuery)
  },
  getAll: (number=30, condition)=> {
    if (condition === 'everything') {
      return db.db.query(`SELECT * from photos LIMIT ${number}`)
    } else {
    return db.db.query(`SELECT * from photos WHERE foaming IS ${condition} LIMIT ${number}`)
    }
  },
  changeBoolean: (id, boolean)=>{
    return db.db.query(`UPDATE photos SET foaming=${boolean} WHERE id=${id}`)

  }
}