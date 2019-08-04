const express = require('express');
const PORT = 80;
const app = express();
app.listen(PORT, function() {
    console.log("Mi http servidor escucha un puerto " + PORT + "...");
});
app.get('/foo', function(req, res) {
    console.log('Hola, Soy foo.');
});