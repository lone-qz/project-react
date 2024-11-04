var mongoose=require('./db');


// 定义数据模型
let bookSchema =new mongoose.Schema({
    title:String,
    text:String,
    img:String,
    cate:String,
})

// 导出模型
let bookModel=mongoose.model('book',bookSchema,'book');

module.exports =  {bookModel};  