function workout(input) {
//     •	На първия ред – N – брой дни, в които г-жа Иванова тренира  – цяло число в интервала [1...50]
// •	На втория ред – M – километрите, които е избягала първия ден – реално число в интервала [1.00…500.00]
// •	За всеки един ден на отделен ред :
// 	Процентите, с които се увеличава дневната си норма – цяло число в интервала [1…100]
let index =0;
let day = Number(input[index]);
index++;
let kmFirstDay = Number(input[index]);
index++;
let total = 0;
total+=kmFirstDay;
for(let i = 0; i <day; i++) {
    let percent = Number(input[index]);
    index++;
    kmFirstDay+=(kmFirstDay*percent)/100;
    total+=kmFirstDay;

}
  if (total>=1000) {
      console.log(`You've done a great job running ${Math.ceil(total-1000)} more kilometers!`);
      
  }  else{
      console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - total)} more kilometers`);
      
  }
}


