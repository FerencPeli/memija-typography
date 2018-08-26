const express = require("express");
const compression = require("compression");

var app = express();

app.use(compression());
app.use(express.static(__dirname + '/dist'));
app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
});
app.listen(process.env.PORT || 8080);
