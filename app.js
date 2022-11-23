function inicioReloj() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  ap = hr < 12 ? "<span>A.M</span>" : "<span>P.M</span>";
  hr = hr == 0 ? hr - 12 : hr; // Lo utilizamos para que cuando pase del 12 no sea 00 si no que vuelva a 12 pero con el parametro de arriba cambie de span

  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.querySelector(".hora").innerHTML = hr;
  document.querySelector(".minutos").innerHTML = min;
  document.querySelector(".segundos").innerHTML = sec;
  document.querySelector(".ampm").innerHTML = ap;

  var tiempo = setTimeout(function () {
    inicioReloj();
  }, 500);
}
// Esta funcion es para si el numero es menor a 10 quede acompaado con un 0 antes del valor
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
