const balloon = document.getElementById('balloon');

let size = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

function updateBalloon() {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener('click', function() {
    size += 10;

    if (size > 420) {
        size = 200;
    }

    colorIndex = (colorIndex + 1) % 3;
    
    updateBalloon();
});


balloon.addEventListener('mouseleave', function() {
    size -= 5;
    

    if (size < 200) {
        size = 200;
    }
    colorIndex = (colorIndex - 1 + 3) % 3;
    
    updateBalloon();
});