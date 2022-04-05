function vacation(input){
    let numLeters = Number(input[0]);
    let letersForHours = Number(input[1]);
    let days =Number(input[2]);
    let total = (numLeters/letersForHours)/days;
    console.log(total);
}
vacation(["212 ","20 ","2 "]);