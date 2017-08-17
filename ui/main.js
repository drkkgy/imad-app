
// counter code
var button = document.getElementById('button');
button.onclick = function()
{
//Create a Rrequest object
var request = new XMLHttpRequest();
// capturing the response and storing it in variables
request.onreadystatechange = function()
{
    if(request.readystate === XMLHttpRequest.DONE)
    {
        // do this
        if(request.status === 200)
        {
            var count = request.responseText;
            var span = document.getElementById('counter');
            span.innerHTML = count.toString();
        }
    }
    // do nothing
};
//make a request on counter endpoint
request.open('GET','http://drkkgy.imad.hasura-app.io/counter',true);
request.send(null);
//rendering the value
};