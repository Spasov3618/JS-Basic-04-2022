function coins(input) {
    let change = Number(input[0]);
    let cent =Math.floor(change * 100);
    
    let coint = 0;
    while (cent > 0)
    {
        if (cent - 200 >= 0)
        {
            coint++;
            cent -= 200;
        }
        else if (cent - 100 >= 0)
        {
            coint++;
            cent -= 100;
        }
        else if (cent - 50 >= 0)
        {
            coint++;
            cent -= 50;
        }
        else if (cent - 20 >= 0)
        {
            coint++;
            cent -= 20;
        }
        else if (cent - 10 >= 0)
        {
            coint++;
            cent -= 10;
        }
        else if (cent - 5 >= 0)
        {
            coint++;
            cent -= 5;
        }
        else if (cent - 2 >= 0)
        {
            coint++;
            cent -= 2;
        }
        else if (cent - 1 >= 0)
        {
            coint++;
            cent -= 1;
        }
    }
   console.log(coint);
}
