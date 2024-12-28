function isArmstrongNumber(num) 
{
    let sum = 0;
    let digits = num.toString().split('');
    let power = digits.length;

    for (let digit of digits) 
    {
        sum += Math.pow(parseInt(digit), power);
    }
    return sum === num;
}

function findArmstrongNumbers(a, b) 
{
    let ArmstrongNumbers = [];
    for (let i = a; i <= b; i++) 
        {
        if (isArmstrongNumber(i)) 
            {
            ArmstrongNumbers.push(i);}
        }
    return ArmstrongNumbers;
}

let a = parseInt(prompt("Enter the left boundary of the segment:"));
let b = parseInt(prompt("Enter the right boundary of the segment:"));
let result = findArmstrongNumbers(a, b);

console.log(`Armstrong numbers on the segment [${a}, ${b}]: ${result.join(", ")}`);