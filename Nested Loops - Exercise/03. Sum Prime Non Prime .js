function primeNonPrime(input) {
    let index =0;
    let num = input[index];
    index++;
            let prime = 0;
            let nonPrime = 0;
            while (num != "stop")
            {
                let n = Number(num);
                if (n < 0)
                {
                    console.log("Number is negative.");

                }
                else
                {

                    let countner = 0;


                    for (let i = 1; i <= n; i++)
                        if (n % i === 0)
                        {
                            countner++;
                        }

                    if (countner == 2)
                    {
                        prime += n;
                    }
                    else
                    {
                        nonPrime += n;
                    }
                }
                num = input[index];
                index++;
            }
            console.log(`Sum of all prime numbers is: ${prime}`);
            console.log(`Sum of all non prime numbers is: ${nonPrime}`);
        
}
primeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])

