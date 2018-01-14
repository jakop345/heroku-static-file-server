var express = require('express')
  , app = module.exports = express();
 
app.get('/', function(req, res){
  res.send('<ul>'
    + '<li>Download <a href="/1.avi">1.avi</a>.</li>'
    + '</ul>');
});

app.get('/:file(*)', function(req, res, next){
  var file = req.params.file
    , path = __dirname + '/' + file;

  res.download(path);
});

app.listen(8080);
console.log('Express started on port %d', 8080);
