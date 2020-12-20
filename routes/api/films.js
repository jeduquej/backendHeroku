const router = require('express').Router();
const { Film } = require('../../models');

const bcrypt = require('bcryptjs');

router.get('/', async(req, res)=>{
    const film = await Film.findAll();
    res.status(200).json(film);
});

router.post('/register', async(req, res)=>{
    const film = await Film.create(req.body);
    res.status(200).json(film); //revisar

});

module.exports = router;

