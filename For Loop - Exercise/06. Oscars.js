function oscars(input) {
    let index = 0;
    let name = input[index];
    index++;
    let startPoints = Number(input[index]);
    index++;
    let n = Number(input[index]);
    index++;
    for (let i = 0; i < n; i++) {
      let nameJury = input[index];
      index++;
      let pointJury = Number(input[index]);
      index++;
      startPoints += (nameJury.length * pointJury)/2;
      if (startPoints > 1250.5) {
          console.log(`Congratulations, ${name} got a nominee for leading role with ${startPoints.toFixed(1)}!`);
          return;
      }
        
    }
    console.log(`Sorry, ${name} you need ${(1250.5-startPoints).toFixed(1)} more!`);
    }
    