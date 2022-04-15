function moving(input){
    let index = 0;
    let lenth = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let capacity = lenth*width*height;
   
    while (capacity > 0)
    {
        let command = input[index];
        if (command == "Done")
        {
            console.log(`${capacity} Cubic meters left.`);
            break;
        }
        let free = Number(command);
        capacity -= free;
index++;

        if (capacity <= 0)
        {
            console.log(`No more free space! You need ${Math.abs(capacity)} Cubic meters more.`);
        }
    }
}


