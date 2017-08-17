var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
    'article-one' :{
    title: 'Article-one |ankit',
    heading: 'Article-one',
    date: '11 August 2017',
    content: `<p>
                para 1well this appears to be the content of the article one 
                if you are reading this then you will be reading the article one !!
            </p>
            <p>
                para 2well this appears to be the content of the article one 
                if you are reading this then you will be reading the article one !!
            </p>
            <p>
                para 3well this appears to be the content of the article one 
                if you are reading this then you will be reading the article one !!
            </p>`
            },
            'article-two' : {
    title: 'Article-two |ankit',
    heading: 'Article-two',
    date: '11 August 2017',
    content: `<p>
                para 1well this appears to be the content of the article two 
                if you are reading this then you will be reading the article two !!
            </p>
            <p>
                para 2well this appears to be the content of the article two 
                if you are reading this then you will be reading the article two !!
            </p>
            <p>
                para 3well this appears to be the content of the article two 
                if you are reading this then you will be reading the article two !!
            </p>`
            },
            'article-three' : {
    title: 'Article-three |ankit',
    heading: 'Article-three',
    date: '11 August 2017',
    content: `<p>
                para 1well this appears to be the content of the article three 
                if you are reading this then you will be reading the article three !!
            </p>
            <p>
                para 2well this appears to be the content of the article three 
                if you are reading this then you will be reading the article three !!
            </p>
            <p>
                para 3well this appears to be the content of the article three 
                if you are reading this then you will be reading the article on three !!
            </p>`
            }
            
};
function createtemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
var htmltemplate =`
<head>
    <title>
       ${title}
    </title>
    <meta name ="viewpart" content="width = device = width,initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
</head>   

    <body>
        <div class = "container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content} 
        </div>
        </div>
    </body>
    
    
</html>
`;
return htmltemplate;
}

var counter = 0;
app.get('/counter' , function(req,res) {
   counter = counter +1;
   res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 
});
app.get('/:articleName',function (req,res){
   
   var articleName = req.params.articleName;
   res.send(createtemplate(articles[articleName]));
});
app.get('/article-one/two',function (req,res){
   res.send('hey its article 1.2 being served by the server'); 
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
