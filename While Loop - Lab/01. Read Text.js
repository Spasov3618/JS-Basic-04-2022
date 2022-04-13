function read(input) {
    let index = 0;
    let word;
    while((word = input[index]) !== 'Stop'){
        console.log(word);
        index++;
        
    }
}
read(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])

