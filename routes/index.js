var express = require('express');
var router = express.Router();
var pool = require('../bd');
var mail = require('../mail');

/* GET home page. */
router.get('/', async function(req, res, next) {
  
  let presupuesto = await pool.query("select * from presupuesto");
  res.render('index', {data: presupuesto});
});

//chequear si llegan los datos al mail
router.post('/', async function(req, res, next) {
  
  let texto = `Nombre: ${req.body.nombre} \nSubject: ${req.body.subject} \nEmail: ${req.body.email} \nMensaje: ${req.body.comentario}`;


  let info =  await mail.main(texto);
  
  res.render('successMail', {mensaje: "Mail enviado correctamente, gracias por ayudarnos a mejorar"});
});



module.exports = router;
