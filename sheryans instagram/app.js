var isStatus = document.querySelector('h5');

var btn = document.querySelector('#add');
var check = 0;

btn.addEventListener('click', function () {
    if (check == 0) {
        isStatus.innerHTML = 'Friends';
        isStatus.style.color = 'green';
        btn.innerHTML = 'Remove'
        check = 1;
    } else {
        isStatus.innerHTML = 'Stranger';
        isStatus.style.color = 'red';
        btn.innerHTML = 'Follow'
        check = 0;
    }
})
