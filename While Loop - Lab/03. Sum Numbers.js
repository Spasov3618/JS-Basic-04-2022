function sum(input) {
    let num = Number(input[0]);
    let index = 1;
    let counter = 0;
    while(counter<num){
        counter+= Number(input[index]);
        index++;
    }
    console.log(counter);
}
sum(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
