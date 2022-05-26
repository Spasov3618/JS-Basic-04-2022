function lunch(input) {
    let bred = Number(input[0]);
    let egg = Number(input[1]);
    let biscuit = Number(input[2]);
    let paintEgg = egg*12;
    let total = bred*3.20+egg*4.35+biscuit*5.40+paintEgg*0.15;
    console.log(total.toFixed(2));
}

