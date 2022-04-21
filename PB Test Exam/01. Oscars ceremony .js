function ceremony(input) {
 let budjet = Number(input[0]);
 let oscar = budjet *0.7;
 let  ketering = oscar*0.85;
 let music = ketering/2;
 let total = budjet+oscar+ketering+music;  
 console.log(`${total.toFixed(2)}`)
}
