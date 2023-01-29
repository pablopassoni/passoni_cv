
document.getElementById('boton1').addEventListener('click', oculta);

function oculta() {
    var x = document.getElementById('tareas1');
    var y = document.getElementById('boton1');
    if (x.style.display === 'block') {
      x.style.display = 'none';
      y.innerHTML = "+";
    } else {
      x.style.display = 'block';
      y.innerHTML = "-";
    }
  }

document.getElementById('boton2').addEventListener('click', oculta1);

function oculta1() {
    var x = document.getElementById('tareas2');
    var y = document.getElementById('boton2');
    if (x.style.display === 'block') {
      x.style.display = 'none';
      y.innerHTML = "+";
    } else {
      x.style.display = 'block';
      y.innerHTML = "-";
    }
  }