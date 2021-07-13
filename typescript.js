function Value() {
    var promptValue = prompt('Enter any value from 25 to 99 to prove you are not a robot', '');
    if (promptValue = null) {
        promptValue = prompt('Enter any value from 25 to 99 to prove you are not a robot', '');
    }
    while (promptValue <= 25 && promptValue >= 99)
        ;
    {
        promptValue = prompt('Enter any value from 25 to 99 to prove you are not a robot', '');
        console.log(promptValue);
    }
}
function RezultNubmer() {
    var rezult = prompt('Enter any value to see wich one is bigger', '');
    var c = prompt("Enter first value", '');
    var d = prompt("Enter second value", '');
    c === d ? rezult = "a and b are equal" : c > d ? rezult = "c is greater" : rezult = "d is greater";
    console.log(rezult);
}
//Вивести в консоль всі непарні числа від 20 до 40
function oddNumbers() {
    for (var i = 20; i <= 40; i++) {
        if (i % 2) {
            console.log(i);
        }
    }
}
