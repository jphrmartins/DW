var body = document.querySelector('body')
var div = document.createElement('h1');
var h1 = document.createElement('h1');
body.style.backgroundColor = '#fdd835';
h1.style.textAlign = 'center';
h1.style.color = '#1e88e5';
h1.style.fontSize = '100px';
h1.innerText = 'Insira o texto';

document.body.append(h1);

div.style.height = '150px';
div.style.width = '150px';
div.style.color = '#1e88e5';
div.innerText = 'Girando';
div.style.fontSize = '150px';
div.style.margin = '10px auto';
document.body.append(div);

var giro = 1;
var troca = false;
setInterval(function () {
  if (!troca) {
    h1.style.color = '#fdd835';
    div.style.color = '#fdd835';
    body.style.backgroundColor = '#1e88e5';
    troca = true;
  } else {
    h1.style.color = '#1e88e5';
    div.style.color = '#1e88e5';
    body.style.backgroundColor = '#fdd835';
    troca = false;
  }
}, 500);
setInterval(function () {
  if (giro === 1) {
    div.style.transform = 'rotate(45deg)';
    giro = 2;
  } else if (giro === 2) {
    div.style.transform = 'rotate(90deg)';
    giro = 3;
  } else if (giro === 3) {
    div.style.transform = 'rotate(135deg)';
    giro = 4;
  } else if (giro === 4) {
    div.style.transform = 'rotate(180deg)';
    giro = 5;
  } else if (giro === 5) {
    div.style.transform = 'rotate(225deg)';
    giro = 6;
  } else if (giro === 6) {
    div.style.transform = 'rotate(270deg)';
    giro = 7;
  } else if (giro === 7) {
    div.style.transform = 'rotate(315deg)';
    giro = 8;
  } else {
    div.style.transform = '';
    giro = 1;
  }
}, 300);
