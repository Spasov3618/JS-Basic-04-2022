function sum(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;
    let num = '';
    for (let i = start; i< end; i++){
        if (i%9 ===0){
            sum+= i;
            num  +=i +  "\n" ;
        }
    }
    console.log(`The sum: ${sum}`);
   console.log(num);
   
}
 

