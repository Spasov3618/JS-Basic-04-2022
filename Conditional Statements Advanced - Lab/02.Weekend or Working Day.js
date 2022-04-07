function weekend(input){
    switch (input[0])
            {
                case "Monday":
                case "Wednesday":
                case "Thursday":
                case "Tuesday":
                case "Friday":
                    console.log("Working day");
                    break;
                case "Saturday":
                case "Sunday":
                    console.log("Weekend");
                    break;
                default:
                    console.log("Error");
                    break;
            }
}
