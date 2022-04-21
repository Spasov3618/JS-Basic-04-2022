function voucher(input) {
    let index=0;
    let vaucher = Number(input[index]);
    index++;
    let total = 0;
    let bilet = 0;
    let drugi = 0;
    let pokupka = input[index];
    index++;
    
        while (pokupka != "End")
        {
            let start = pokupka.length;
        if (start > 8)
        {
            let a = (pokupka.charCodeAt(0));
            let b = (pokupka.charCodeAt(1));
            total = a + b;
            if (vaucher >= total)
            {
                vaucher -= total;
                total = 0;
                bilet++;
            }
            else
            {
                break;
            }
        }
        else if (start <= 8)
        {
            let a = (pokupka.charCodeAt(0));
            total = a;
            if (vaucher >= total)
            {
                vaucher -= total;
                total = 0;
                drugi++;
            }
            else
            {
                break;
            }
        }

            pokupka = input[index];
            index++;
            
                       
        }
   

    console.log(bilet);
    console.log(drugi);
}
voucher(["300",
"Captain Marvel",
"popcorn",
"Pepsi"])
