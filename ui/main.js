
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
    //make a request to thebserver 
    //cpture the list of name and render it as a list
    var names = ['name1','name2','name3' , 'name4'];
    var list = '';
    for (var i=0;i < names.length;i++){
    list +='<li>' + names[i] + '</li>';
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
};