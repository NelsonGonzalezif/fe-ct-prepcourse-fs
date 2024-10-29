function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
  let par = num % 2;
  if (par === 0){
    return false;
  }
  else{
    return true;
  }
}

module.exports = esImpar;