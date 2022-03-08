var caixa,heading;


function setup() {
  createCanvas(400, 400);
  background(178,255,102);
 
  caixa = createInput();
  caixa.position(5, 60);

  heading = createElement('h4', 'Insira uma vogal');
  heading.position(5, 20);

  textAlign(CENTER);
  textSize(20);
}

function draw() {


  const letra = caixa.value()

  switch(letra){
    case "a": console.log("Acertou");
    break;

    case "e": console.log("Acertou");
    break;

    case "i": console.log("Acertou");
    break;

    case "o": console.log("Acertou");
    break;

    case "u": console.log("Acertou");
    break;

    default: console.log("Errou");
    break;

  }
 
    
}

