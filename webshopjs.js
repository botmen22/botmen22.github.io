
function print(something) {
    console.log(item)
}

function creatediv(num) {
    for (let i = 0; i < num; i++) {
        var image = document.createElement('img');
        var div = document.getElementById('imgs');
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Scramble.svg/1200px-Scramble.svg.png";
        image.height = 150;
        image.width = 150;
        div.appendChild(image);
    }
}

creatediv(5);

function toPage(item) {
    print('hello')
}