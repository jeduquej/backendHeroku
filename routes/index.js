const router = require('express').Router();
const apiRouterUser = require('./api/users.js');
const apiRouterFilm = require('./api/films.js');

router.use('/user', apiRouterUser); //.com/api/user
router.use('/film', apiRouterFilm);

module.exports = router;
