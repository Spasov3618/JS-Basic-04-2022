function combination(input){
    let counter =0;
    let n = Number(input[0]);
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
        for (let k = 0; k <= n; k++) {
            let sum = i+j+k;
if (sum === n) {
    counter ++;
}
    }
    }
    
    
}
console.log(counter);
}
