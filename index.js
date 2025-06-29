import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.get('/',(req,res,next)=>{
    console.log('Request received at root path');
    next();
}, (req, res) => {
  res.render('index');
});
app.get('/profile', (req, res) => {
  res.render('profile');
});

app.listen(3000)