console.log('Loaded!');
// changer

var element = document.getElementById('ankit');
element.innerHTML = "new text ankit"

// moving the element image

var img = document.getElementById('madi');

img.onclick = function()
{
   var Interval = setInterval(moveright,200);
   // img.style.marginLeft = '200px';
};