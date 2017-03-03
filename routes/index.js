import express from 'express';
const router = express();

router.get('/', (req,res) => {
  res.render('index', {
    content: 'Hello Express and <em>EJS</em>!'
  });
});