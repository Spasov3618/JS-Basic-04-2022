function bakery(input) {
    //цената на килограм захар е с 25% по-ниска от тази на килограм брашно
    //цената на една кора с яйца е с 10% по-висока от цената на килограм брашно
    //цената на един пакет мая е с 80% по-ниска от цената на килограм захар
    // Вход
    // От конзолата се четат 5 реда:
    // 1.	Цена на брашното за един килограм – реално число в интервала [0.00 … 10000.00]
    // 2.	Килограми на брашното – реално число в интервала [0.00 … 10000.00]
    // 3.	Килограми на захарта – реално число в интервала [0.00 … 10000.00]
    // 4.	Брой кори с яйца – цяло число в интервала [0 … 10000]
    // 5.	Пакети мая  – цяло число в интервала [0 … 10000]
    // Изход
    // Да се отпечата на конзолата едно число:
    // •	Сумата, която ще им е необходима, форматирана до втория знак след десетичната запетая
    let priceFlour = Number(input[0]);
    let flourkg = Number(input[1]);
    let sugarkg = Number(input[2]);
    let numEgg = Number(input[3]);
    let numMay = Number(input[4]);
    let priceSugar = priceFlour*0.75;
    let priceEgg = priceFlour*1.10;
    let priceMay = priceSugar*0.2;
    let total = flourkg*priceFlour+sugarkg*priceSugar+numEgg*priceEgg+numMay*priceMay;
    console.log(total.toFixed(2));
    
    }