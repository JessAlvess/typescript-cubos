const cidades: string[] = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const cidadesCom8Caracteres = (array: string[]): string[] => {
  return array.filter((cidade) => {
    return cidade.length <= 8;
  });
};

console.log(cidadesCom8Caracteres(cidades));
