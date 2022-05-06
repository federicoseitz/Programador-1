//document.write("<h1>BUEN VIAJE</h1>");

var metros = prompt("ingrese los metros que quiere recorrer");
if (metros > 0 && metros <= 1000) {
  alert("Es la distancia perfecta para una hermosa caminata,vamos a Pie");
}
if (metros > 1000 && metros <= 10000) {
  alert("Un hermoso recorrido para hacer en Bicleta");
}
if (metros > 10000 && metros <= 30000) {
  alert("La mejor opcion es tomarse el Colectivo que pasa cada 5 minutos");
}
if (metros > 30000 && metros <= 100000) {
  alert("La mejor opcion es ir con el Auto");
}
if (metros > 100000) {
  alert("Los vuelos son lo mas seguro tomase un Avion");
}
