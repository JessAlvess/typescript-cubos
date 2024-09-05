const imprimirTabuada = (numeros: number[]): string => {
  let tabuada: string = ''  
    for (let fator = 0; fator < numeros.length; fator++) {
    for (let multiplicador = 0; multiplicador < 11; multiplicador++) {
      tabuada += `${numeros[fator]} x ${multiplicador} = ${
        numeros[fator] * multiplicador
      } \n`;
    }
    tabuada += '-----------------------\n'
  }
  return tabuada
};

console.log(imprimirTabuada([1,5,2]));

