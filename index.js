const express = require("express");
const app = express();
const { Pool, Client } = require('pg')

const client = new Client({
  user: 'humlprjlvdbdnt',
  host: 'ec2-23-20-124-77.compute-1.amazonaws.com',
  database: 'ddsogo2cmtup33',
  password: 'f8280465b2f538726d073816c7862c981b13ada9fbd7a0b6813e7ffe620077a6',
  port: 5432,
  //ssl: true
  ssl: {
    rejectUnauthorized: false
  }
})
client.connect()
var donde = 'mi donde ger'

app.get('/db', function (req, res) {
	var oRta = ""
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	client.query("SELECT id, name FROM leads WHERE id = 2;", (err, res) => {
      oRta = res.rows[0]["id"]
      console.log(err, oRta, donde)
	  res.send(oRta);
//  client.end()
   })
	res.send(oRta);
});

/* GET users listing. */
app.get('/db2', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  client.query('SELECT id, estilo, receta FROM cerveza;', (err, result) => {
   return res.json(result.rows)
  });

});


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

app.get('/recetas2/:nombre', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    console.log(req.params.nombre);
	var sMens = req.params.nombre
    console.log(sMens);
	var que = {
		  // give the query a unique name
		  name: 'fetch-user',
		  text: "SELECT receta FROM cerveza WHERE estilo = $1",
		  values: [sMens],
		}
//  client.query("SELECT receta FROM cerveza WHERE estilo = ${sMens};", (err, result) => {
  client.query(que, (err, result) => {
	  console.log(err, result);
   return res.json(result.rows)
  });
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

/*export.app = functions.https.onRequest(app);*/
