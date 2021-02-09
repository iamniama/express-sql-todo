const express = require('express')
const db = require('../models')
const router = express.Router()



router.get('/', (req, res)=>{
    res.send("This is a list of all tasks")
})



router.get('/cat/:catid', (req,res)=>{
    res.send(`View tasks by category id: ${req.params.catid}`)
})

router.get('/status/:statid', (req, res)=>{
    res.send(`View tasks by status id: ${req.params.statid}`)
})

router.get('/context/:conid', (req, res)=>{
    res.send(`View tasks by context id: ${req.params.conid}`)
})

router.post('/', (req, res)=>{
    res.send(req.body)
})

router.get('/new', (req,res)=>{
    res.send("This is where new tasks get created")
})

router.put('/edit', (req, res)=>{
    res.send(req.body)
})

router.get('/:id', (req, res)=>{
    res.send(`This is where we will edit existing tasks, such as task with id: ${req.params.id}`)
})



router.delete('/:id', (req, res)=>{
    res.send(req.body)
})




module.exports = router