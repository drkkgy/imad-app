console.log('Loaded!');
// changer

var element = document.getElementById('ankit');
element.innerHTML = "new text ankit"

// moving the element image

var img = document.getElementById('madi');
var marginleft = 0;
function moveright()
{
    marginleft = marginleft +2;
    img.style.marginLeft = marginleft +'px';
}

img.onclick = function()
{
   var Interval = setInterval(moveright,20);
   // img.style.marginLeft = '200px';
};
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
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
    // do nothing
};
//make a request on counter endpoint


//rendering the value
}