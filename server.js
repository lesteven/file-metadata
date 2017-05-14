var express = require('express');
var morgan = require('morgan');
var app = express();
app.use(morgan('dev'));
var port = process.env.PORT || 3000;

var maxSize = 100000
var multer = require('multer');
var upload = multer({dest:'uploads/',
				limits:{fileSize:maxSize}})

app.use('/',express.static(__dirname + '/public'));

app.post('/filesize',upload.single('file'),function(req,res){
	console.log(req.file)
	res.json({'bytes':req.file.size})
	
})

app.listen(port,function(){
	console.log(`Listening on port ${port}`)
})

