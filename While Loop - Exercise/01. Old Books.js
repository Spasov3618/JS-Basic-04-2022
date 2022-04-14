function oldBooks(input) {
    let index = 0;
    let searchBook = input[index];
    index++;
    let book;
    let counter = 0;
    while((book = input[index]) !== 'No More Books'){
        if (book === searchBook) {
            console.log(`You checked ${counter} books and found it.`);
            return;
        }
        counter++;
        index++;
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`);
}

