$(document).ready(function() {
    let size = 200;
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;

    function updateBalloon() {
        $('#balloon').css({
            'width': size + 'px',
            'height': size + 'px',
            'background-color': colors[colorIndex]
        });
    }

    $('#balloon').click(function() {
        size += 10;
        if (size > 420) size = 200;
        colorIndex = (colorIndex + 1) % 3;
        updateBalloon();
    });

    $('#balloon').mouseleave(function() {
        size -= 5;
        if (size < 200) size = 200;
        colorIndex = (colorIndex - 1 + 3) % 3;
        updateBalloon();
    });
});