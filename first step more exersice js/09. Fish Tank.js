function tank(input){
    let shirina = Number(input[0]);
    let daljina = Number(input[1]);
    let visochina = Number(input[2]);
    let percent = Number(input[3])/100;
    let obem = (shirina*daljina*visochina)/1000;
    let total = obem *(1-percent);
    console.log(total);
}
tank(["85 ",
"75 ",
"47 ",
"17 "]
);