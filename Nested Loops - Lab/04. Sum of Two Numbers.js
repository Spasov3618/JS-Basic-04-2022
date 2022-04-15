function sum(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let majikNum = Number(input[2]);
    let counter = 0;
    for (let a = start; a <= end; a++)
    {
        for (let b = start ; b <= end; b++)
        {
            counter++;
            if (a + b == majikNum)

            {
                console.log(`Combination N:${counter} (${a} + ${b} = ${majikNum})`);
                return;

            }
           
                
        }
    }
    console.log(`${counter} combinations - neither equals ${majikNum}`);
}