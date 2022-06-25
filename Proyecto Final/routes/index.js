var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {

var nombre = req.body.nombre;
var apellido = req.body.apellido;
var email = req.body.email; 
var telefono = req.body.telefono;
var mensaje = req.body.mensaje;
//console.log(req.body)

var obj = {
  to: 'federico.seitz@gmail.com',
  subject: 'CONTACTO WEB',
  html: nombre + " " + apellido + " se contacto a travez de la web y quiere mas informacion a este correo : " + email + ". <br> Ademas, hizo este comentario : " + mensaje + ". <br> Su telefono es : " + telefono
} //cierra obj

var transporter = nodemailer.createTransport({
  host : process.env.SMTP_HOST,
  port : process.env.SMTP_PORT,
  auth: {
      user : process.env.SMTP_USER,
      pass : process.env.SMTP_PASS

  }
}) //cierra transporter


var info = await transporter.sendMail(obj);

res.render('index', {
  message: 'Mensaje enviado correctamente'
});

}); //cierra peticion del post

module.exports = router;
