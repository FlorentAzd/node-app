const express = require('express')
const router = express.Router()

router.all("/", function (req, res){
    res.render('index', {title:"Titre"})
})

module.exports = router