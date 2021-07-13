function Value() {
    let promptValue: any = prompt('Enter any value from 25 to 99 to prove you are not a robot', '');
    if (promptValue = null) {
        promptValue = prompt('Enter any value from 25 to 99 to prove you are not a robot', '');
    }
    while (promptValue <= 25 && promptValue >= 99); {
        promptValue = prompt('Enter any value from 25 to 99 to prove you are not a robot', '');
        console.log(promptValue);
    }
}

function RezultNubmer(): void {
    let rezult: any = prompt('Enter any value to see wich one is bigger', '');
    let c: any = prompt("Enter first value", '');
    let d: any = prompt("Enter second value", '');
    rezult =
        c === d ? rezult = "a and b are equal" : c > d ? rezult = "c is greater" : rezult = "d is greater";
        console.log(rezult);
    
}

//Вивести в консоль всі непарні числа від 20 до 40

function oddNumbers(): void {
    for (let i: number = 20; i <= 40; i++) {
        if (i % 2) {
            console.log(i)
        }
    }
} 

