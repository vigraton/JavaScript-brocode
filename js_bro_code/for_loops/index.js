// For loops: repeat some code a limited amout of times

for(let i = 0; i <= 2; i++){
    console.log(i);
}

// Contando de 2 em 2

for(let i = 0; i <= 2; i+=2){
    console.log(i);
}

// Contando até 20 ~ Vai pular o número 13 e continua do 14

for(let i = 1; i <= 20; i++){
    
    if(i == 13){
        continue;
    }
    else{
        console.log(i);
    }
}