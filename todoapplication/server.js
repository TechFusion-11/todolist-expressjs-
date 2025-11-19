const express=require('express');
const mysql=require('mysql2');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
app.use(bodyparser().json());
app.use(cors());
app.use(express.static('public'));

const db=mysql.createConnection({
  host:'localhost',
  user:'',
  password:'',
  database:'todo_app'});
db.connect(err=>{
  if(err) throw err;
  console.log('mysql connected');
});
app.get('api/todos',(req,res)=>{
  db.query('select * from Todos',(err,result)=>{
    if(err) throw err;
    res.json(results);
  });
});
app.post('api/todos',(req,res)=>{
  const{task}=req.body;
  db.query('Insert INTO todos(task) values(?)',[task],(err,result)=>{
    if(err) throw err;
    res.json(result);});
});
app.put('api/todos',(req,res)=>{
  const {id}=params.id;
  const {status}=params.status
  db.query('update todos set status=? where id=?,[id,status],(err,result)=>{
           if (err) throw err
          res.json(result);
});
});
app.delete('api/todos',(req,res)=>{
  const {id}=req.id;
  db.query('delete from db where id=?',[id],(err,result)=>{
           if (err) throw err;
            res.json(result);
  });
});
const port=3000
app.listen(3000,()=>{
  console.log(`server is runing on the port ${port)`});
