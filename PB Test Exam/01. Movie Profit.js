function movieProfit(input) {
    let nameOfMoviе = input[0];
            let numDay = Number(input[1]);
            let numTickets = Number(input[2]);
            let priceTicket = Number(input[3]);
            let percent = Number(input[4]);
            let total = numDay * numTickets * priceTicket;
            total =total - (total* percent)/100;
            console.log(`The profit from the movie ${nameOfMoviе} is ${total.toFixed(2)} lv.`);
}