type Produto = {
    produto: string,
    lote: number,
    ano: number,
    qtd: number
}

const CPU: Produto = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

const imprimirCodigoDeBarra = (produto: Produto): string[] => {

    const etiquetas: string[]= []
    for (let qtd = 1; qtd <= produto.qtd; qtd++) {
        etiquetas.push(`${produto.lote}-${produto.ano}-${qtd.toString().padStart(3, '0')}`);
    }
    return etiquetas
}

console.log(imprimirCodigoDeBarra(CPU));


