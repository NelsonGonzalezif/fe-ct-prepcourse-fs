function obtenerAreaRectangulo(alto, ancho) {
  // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 2 ---> 2
  // Tu código:
  if (alto === 0 || ancho === 0){
    if(alto === 0){
      return ("como no es un rectangulo, la linea mide: " + ancho + " de ancho");
    }
    else{
      return ("como no es un rectangulo, la linea mide: " + alto + " de alto");
    }
  }
  else{
    return alto * ancho;
  }
}

module.exports = obtenerAreaRectangulo;
