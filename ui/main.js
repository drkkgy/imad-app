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
var counter = 0;
img.onclick = function()
{
   var Interval = setInterval(moveright,20);
   // img.style.marginLeft = '200px';
};
button.onclick = function()
{
//button counter program

var button = document.getElementById('button');


//rendering the value
counter = counter+1;
var span = document.getElementById('span');
span.innerHTML = counter.toString();
}