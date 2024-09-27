
try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor"));

    if(divisor == 0){
        throw new Error("You can't divide by 0");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.lag(result);
}

catch(error){
    console.error(error);
}

console.log("The end!");