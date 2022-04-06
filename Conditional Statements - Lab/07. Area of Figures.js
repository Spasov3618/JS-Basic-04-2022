// Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle). 
// •	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// •	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
// •	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// •	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
// Резултатът да се закръгли до 3 цифри след десетичната запетая. 
function area(input){
    let figure = input[0];
    if(figure == 'square'){
        let length = input[1];
        console.log((length*length).toFixed(3));
    }
    else if(figure == 'rectangle'){
        let length = input[1];
        let height = input[2];
        console.log((length*height).toFixed(3));
    }
    else if (figure == 'circle'){
        let r = input[1];
        console.log(((r*r)*Math.PI).toFixed(3));
    }
    else if ('triangle'){
        let length = input[1];
        let height = input[2];
        console.log(((length*height)/2).toFixed(3));
    }
}



