const express = require("express");
const app = express();

app.get('/hola', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	res.send('[{"name": "Marce", "email": "m@s.com","phone": "2040"},{"name": "willy", "email": "guille@s.com","phone": "15-2040"},{"name": "master", "email": "movie@s.com","phone": "456789"}]');
});

app.get('/hola2', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  res.send('[{"estilo": "Irish Red"},{"estilo": "Apa"},{"estilo": "Ipa"},{"estilo": "Porter"},{"estilo": "Stout"}]');
});


app.get('/recetas/:nombre', function(req, res) {
	
	var sMens = ""
	if (req.params.nombre === "Irish Red" ) {
		sMens = "Irish Red"
	}
	if (req.params.nombre === "Apa" ) {
		sMens = "Apa"
	}
	if (req.params.nombre === "Ipa" ) {
		sMens = "Ipa"
	}
	if (req.params.nombre === "Porter" ) {
		sMens = "Porter"
	}
	if (req.params.nombre === "Stout" ) {
		sMens = "Stout"
	}
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  res.json({ mensaje: 'Aca va la receta de la: ' + sMens})  
  
});

app.get('/:id', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	if (req.params.id == 1) {res.send('prueba parametros: envio 1');}
	else {
		res.send('prueba parametros, no es 1, es ' + req.params.id);
	}
});

/*app.listen(8080, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});*/

export.app = functions.https.onRequest(app);
