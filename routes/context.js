const express = require('express')
const db = require('../models')
const router = express.Router()



router.get('/', (req, res)=>{
    res.send("This is a list of all contexts")
})

router.get('/new', (req,res)=>{
    res.send("Create a new context")
})

router.get('/:id', (req, res)=>{
    res.send(`Show context id: ${req.params.idx} for editing`)
})

router.post('/', (req, res)=>{
    res.send(req.body)
})

router.put('/', (req, res)=>{
    res.send(req.body)
})

router.delete('/:id', (req, res)=>{
    res.send(`Delete record with id: ${req.params.id}`)
})



module.exports = router