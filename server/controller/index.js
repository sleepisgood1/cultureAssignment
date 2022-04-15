const model = require('../model')
const axios = require('axios')

module.exports = {
  load: (req, res) => {
    axios.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4fc14642-a3d6-424b-b621-5ecf5d955d7f/foam-seed.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220415T010914Z&X-Amz-Expires=86400&X-Amz-Signature=31aac1242ff220b52917bdb7a6fb704e63d5e34f48512ffdc9a7b8224130a7f1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22foam-seed.json%22&x-id=GetObject')
      .then((fileData)=>{
        model.loadAll(fileData.data)
          .then((response)=>{
            res.send('your data has been inserted to the Database')
          })
          .catch((err)=>{
            res.json(err)
          })
      })
    // model.loadAll(req.body)
  },
  get: (req, res) => {
    model.getAll(req.query.number, req.query.condition)
      .then((dbResponse)=>{
        res.json(dbResponse)
      })
      .catch((err)=>{
        res.json(err)
      })
  },
  change: (req, res) => {
    model.changeBoolean(req.body.id, req.body.foaming)
      .then((dbResponse)=>{
        req.query.condition = "everything"
        module.exports.get(req, res)
      })
      .catch((err)=>{
        res.json(err)
      })
  }
}