// ดึงค่า Element ต่างๆ จาก HTML มาไว้ในตัวแปร
const leftInput = document.getElementById('leftMember');
const rightInput = document.getElementById('rightMember');
const operatorSelect = document.getElementById('operator');
const submitBtn = document.getElementById('submitBtn');

setInterval(function() {
    alert('Please, use me...');
}, 30000);

submitBtn.addEventListener('click', function() {
    const leftVal = leftInput.value;
    const rightVal = rightInput.value;
    const operator = operatorSelect.value;

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
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
            break;
        case '*':
            result = leftNum * rightNum;
            break;
        case '/':
            result = leftNum / rightNum;
            break;
        case '%':
            result = leftNum % rightNum;
            break;
    }

    alert(result);
    console.log(result);
});