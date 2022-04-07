function dayWeek(input){
let hours = Number(input[0]);
let dayOfWeek = input[1];

if (hours >= 10 && hours <= 18)
{
    if (dayOfWeek == "Monday")

    {
        console.log("open");
    }
    if (dayOfWeek == "Tuesday")
    {
        console.log("open");
    }
    if (dayOfWeek == "Wednesday")
    {
        console.log("open");
    }
    if (dayOfWeek == "Thursday")
    {
        console.log("open");
    }
    if (dayOfWeek == "Friday")
    {
        console.log("open");

    }
    if (dayOfWeek == "Saturday")
    {
        console.log("open");
    }
}
else
{
    console.log("closed");
}


if (dayOfWeek == "Sunday")
{
    console.log("closed");
}
}