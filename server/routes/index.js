var express = require('express');
var router = express.Router();
var {bookModel}=require('../model/model')

/* 定义数据. */
router.get('/ls',async function(req, res, next) {
  let list=await bookModel.find()
  res.send({
    code:200,
    data:list
  })
});
router.post('/add',async function(req, res, next) {
    let obj=req.body
        
    bookModel.create(obj).then(()=>{
        res.send({
            code:200,
            msg:'添加成功'
        })
    })
})
router.get('/del',async function(req, res, next) {
    let id=req.query.id
    bookModel.deleteOne({_id:id}).then(()=>{
        res.send({
            code:200,
            msg:'删除成功'
        })
    })
})

module.exports = router;
