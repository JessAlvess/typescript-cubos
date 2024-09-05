const numbers: number[] = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const oddNumbers = (numbersArray: number[]): number[] => {
    return numbersArray.filter((number) => {
        return number % 2 === 0
    })
}

console.log(oddNumbers(numbers));