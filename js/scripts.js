var list = document.getElementById('list');
var add = document.getElementById('addElem');
var counter = 0;
add.addEventListener('click', function(e) {
    var element = document.createElement('li');
    element.innerHTML = 'item ' + counter;
    counter++;
    list.appendChild(element);
});
