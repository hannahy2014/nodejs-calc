var express = require('express');

var app = express();

var handlebars = require('express-handlebars')
        .create({ defaultLayout: 'main' })
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');   

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));



app.get('/home', function(req, res){
  res.render('home');
})

app.get('/faq', function(req, res){
  res.render('faq');
})


app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

