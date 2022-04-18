function building(input){
    let numFloors = Number(input[0]);
    let numRooms = Number(input[1]);
    for (let floors = numFloors ; floors >= 1; floors--)
    {
        let exit = '';
        for (let rooms = 0; rooms < numRooms; rooms++)
        {
            
            if (floors == numFloors )
            {
                exit += `L${floors}${rooms} `;
                
                continue;
            }
            if (floors % 2 == 0)
            {
                exit += `O${floors}${rooms} `;
                
            }
            else
            {
                exit += `A${floors}${rooms} `;
                
            }
        }
        console.log(exit);
    }
}
building(["6", "4"])