function setup() {
  createCanvas(900, 800);
}

function draw() {
  background(0);
  circle(xBol,yBol,diametro);
  //movimentaBol();
  colisaoBol();
  minhaRaquete();
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  oponeteRaquete();
 
}

//Aqui determina o tamanho da Bolinha//
let xBol = 450;
let yBol = 400;
let diametro = 40;
let raio = diametro / 2;

//Aqui determina o tamanho da minha raquere//
let xMinhaRaquete = 5;
let yMinhaRaquete = 350;
let comprimentoMinhaRaquete = 15;
let alturaMinhaRaquete = 120;

//aqui determina raquete oponente//
let xRaqueteOponente = 880;
let yRaqueteOponente = 350;
let comprimentoRaqueteOponente = 15;
let alturaRaqueteOponente = 120;


//Aqui determina a velocidade da bolinha cime e lados //
let veloXBol = 1;
let veloYBol = 4;
//-------------------------------//
let colidiu = false;

// momento da Bolinha//
function movimentaBol(){
  xBol = xBol+ veloXBol;
  //yBol = yBol+ veloYBol;
}

//colisao da bolinha nas paredes//

function colisaoBol(){
  if (xBol +raio > width || xBol - raio  < 0){
      veloXBol *= -1;
      }
  if (yBol + raio > height || yBol - raio < 0){
      veloYBol *= -1;
      }
}


function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
     yMinhaRaquete -= 10;
     }
  if(keyIsDown(DOWN_ARROW)){
     yMinhaRaquete += 10;
     }
}

function verificaColisaoRaquete(){
  if(xBol - raio < xMinhaRaquete + larguraMinhaRaquete && yBol- raio < yMinhaRaquete + alturaMinhaRaquete && yBol + raio > yMinhaRaquete){
     veloXBol *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca(){
  colidiu =
  collideRectCircle(xMinhaRaquete, yMinhaRaquete, comprimentoMinhaRaquete, alturaMinhaRaquete,xBol,yBol,raio)
  if(colidiu){
     veloXBol *= -1;
     }
  
}

function minhaRaquete(x, y){
  rect(x, y,comprimentoMinhaRaquete,alturaMinhaRaquete)
}

function oponeteRaquete(){
  rect(xRaqueteOponente,yRaqueteOponente,comprimentoRaqueteOponente,alturaRaqueteOponente)
}




