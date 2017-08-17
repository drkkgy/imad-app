
// counter code
var button = document.getElementById('button');
button.onclick = function()
{
//Create a Rrequest object
var request = new XMLHttpRequest();
// capturing the response and storing it in variables
request.onreadystatechange = function()
{
    if(request.readyState === XMLHttpRequest.DONE)
    {
        // do this
        if(request.status === 200)
        {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    // do nothing
};
//make a request on counter endpoint
request.open('GET','http://drkkgy.imad.hasura-app.io/counter',true);
request.send(null);
//rendering the value
};

// submit name
var nameInput = document.getElementByid('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
    //
    //
    var names = ['name1','name2','name3'];
    var list = '';
    for (var i =0 ; i< name.length; i++){
    list += <ls>,name[i]+</li>;
        }
        var ui = document.getElementById()
{;