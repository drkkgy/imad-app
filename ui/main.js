console.log('Loaded!');
// changer

var element = document.getElementById('ankit');
element.innerHTML = "new text ankit"

// moving the element image

var img = document.getElementById('madi');
var marginleft = 0;
function moveright()
{
    marginleft = marginleft +10;
    img.style.marginLeft = marginleft +'px';
}
img.onclick = function()
{
   var Interval = setInterval(moveright,200);
   // img.style.marginLeft = '200px';
};