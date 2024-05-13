const express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('Enviando respuesta desde node');
});

// Exportar la función que inicia el servidor
module.exports.startServer = function(port) {
    return app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto: ${port}`);
    });
};

// Exportar la aplicación Express 
module.exports.app = app;