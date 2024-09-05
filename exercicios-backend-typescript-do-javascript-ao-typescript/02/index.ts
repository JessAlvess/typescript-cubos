const livros: string[] = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];

const encontrarLivro = (listaLivros: string[], livro: string): string => {
  if (listaLivros.includes(livro)) {
    return `O livro está na posição ${listaLivros.indexOf(livro) + 1}`;
  }

  return `Livro não encontrado`;
};

console.log(encontrarLivro(livros, "Jessé"));
