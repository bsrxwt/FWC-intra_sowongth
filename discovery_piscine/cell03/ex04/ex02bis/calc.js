$(document).ready(function() {
    setInterval(function() {
        alert('Please, use me...');
    }, 30000);

    $('#submitBtn').click(function() {
        const leftVal = $('#leftMember').val();
        const rightVal = $('#rightMember').val();
        const operator = $('#operator').val();

        const isValidNumber = (str) => /^\d+$/.test(str);

        if (!isValidNumber(leftVal) || !isValidNumber(rightVal)) {
            alert('Error :(');
            console.log('Error :(');
            return;
        }

        const leftNum = parseInt(leftVal, 10);
        const rightNum = parseInt(rightVal, 10);
        let result = 0;

        if ((operator === '/' || operator === '%') && rightNum === 0) {
            alert("It’s over 9000!");
            console.log("It’s over 9000!");
            return;
        }

        switch (operator) {
            case '+': result = leftNum + rightNum; break;
            case '-': result = leftNum - rightNum; break;
            case '*': result = leftNum * rightNum; break;
            case '/': result = leftNum / rightNum; break;
            case '%': result = leftNum % rightNum; break;
        }

        alert(result);
        console.log(result);
    });
});