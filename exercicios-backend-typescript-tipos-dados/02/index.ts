type Usuario1 = {
    nome: string,
    idade: number,
    status: boolean
}

const usuarios1: Usuario1[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const acheUsuario = (listaUsuario: Usuario1[], nome: string): Usuario1[] => {

    return listaUsuario.filter((usuario) => {
        return usuario.nome.toLowerCase().includes(nome)
    })
}

console.log(acheUsuario(usuarios1, 'da'));
