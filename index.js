const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const bodyPArser = require('body-parser');
const cors = require('cors');

//instancia de express en mi app
const app = express();
app.use(cors())

// app.use((req, res, next)=>{
//      res.header("Access-Control-Allow-Origin", "*");
//      res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
//      res.header("Access-Control-Allow-Methods: GET, POST, DELETE");
//      next();
//  })

//middleware morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({ extended: true}));

//primera ruta
app.use('/api', apiRouter);

app.set('PORT', 3000);

app.listen(app.get('PORT'), ()=>{
    console.log('server up'); 
});

