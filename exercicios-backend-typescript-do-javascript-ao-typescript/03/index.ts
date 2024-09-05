const array: number[] = [0, 122, 4, 6, 7, 8, 44]
const array1: number[] = [0, 122, 4, 6, 2, 8, 44]

function isOdd(array:number[]) {
    if (array.every((number) => {
        return number % 2 === 0
    })) {
        return `Array válido`
    }
    return `Array inválido`
}

console.log(isOdd(array1));
