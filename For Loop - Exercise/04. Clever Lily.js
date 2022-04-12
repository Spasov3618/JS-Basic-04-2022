function clever(input) {
    let age = Number(input[0]);
    let priceMashine = Number(input[1]);
    let priceToy = Number(input[2]);
let money =10;
let total = 0;
let toyCounter = 0;
    for (let i = 1; i <=age ; i++) {
       if (i% 2 ===0) {
           total += money;
           money+=10;
           total--;
       }
       else {
toyCounter++;
       }
        
    }
    total+= toyCounter*priceToy;
    if (total >= priceMashine) {
        console.log(`Yes! ${(total-priceMashine).toFixed(2)}`);  
        
    }
    else{
        console.log(`No! ${(priceMashine-total).toFixed(2)}`);  
    }
    
}

