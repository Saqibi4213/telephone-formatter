var arr = [
    {
        dp: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
        dp: 'https://images.unsplash.com/photo-1543096222-72de739f7917?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1520565628182-8b368f57d415?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
    }, {
        dp: 'https://images.unsplash.com/photo-1619319999528-65275b1356da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D', story: 'https://images.unsplash.com/photo-1593359129100-9c51afc11c75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D'
    }, {
        dp: 'https://images.unsplash.com/photo-1470072508653-1be229b63562?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: 'https://images.unsplash.com/photo-1511424323602-d3c1a4138056?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8'
    },
]

var storiyan = document.querySelector('#storiyan');

var cluture = ''
arr.forEach(function (elem, idx) {
    cluture += `<div class="story">
    <img id= "${idx}" src="${elem.dp}"/>
</div>`
})

document.querySelector('#storiyan').innerHTML = cluture;


storiyan.addEventListener('click', function (dets) {
    document.querySelector('#full-screen').style.display = 'block';
    document.querySelector('#full-screen').style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function () {
        document.querySelector('#full-screen').style.display = 'none';
    }, 2000);
});


