const router = require("express").Router();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8081;
router.get('/hi',async (req,res)=>{
    let c=[]
    res.send(c)
  })
  router.post('/hi',async(req,res)=>{
    console.log(req.body)
    res.send(req.body)
  })