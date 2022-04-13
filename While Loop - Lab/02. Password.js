function password(input) {
 let user = input[0];
 let password = input[1];
 let curentPass;
 let index = 2;
 while((curentPass = input[index]) !==password){
     index++;
 }   
 console.log(`Welcome ${user}!`);
}
password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
