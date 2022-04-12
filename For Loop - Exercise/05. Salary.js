function salary(input) {
    let index = 0;
    let n =Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    for (let i = 0; i < n; i++) {
        let page = input[index];
        index++;
//	"Facebook" -> 150 лв.
//	"Instagram" -> 100 лв.
//	"Reddit" -> 50 лв.
if (page ==='Facebook') {
    salary-=150;
}else if (page === 'Instagram') {
    salary-= 100;
}else if (page === 'Reddit') {
    salary-= 50;
}
        
    }
    if (salary >0) {
        console.log(salary);
    }
    else{
        console.log('You have lost your salary.');
    }
}



