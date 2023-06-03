function paper(quantidadeM, quantidadeRolos) {
    // passar: [], {},
    // barrar: 0

    // !![].length = false
    // !!0 = false

    // tem q passar 0, e barrar undefined

    // vejo se é array, e tem tamanho 0
    if (Array.isArray(quantidadeRolos) && quantidadeRolos.length === 0) {
        console.log('informe rolos')

        return;
    }

    // transformo quantidadeRolos em number e vejo se é NaN
    if (isNaN(+quantidadeRolos)){
        console.log('informe rolos')

        return;
    }

    // vejo se é null
    if (quantidadeRolos === null) {
        console.log('informe rolos')

        return;
    }

    if (quantidadeRolos){
        console.log(quantidadeM / quantidadeRolos)
    }
}

paper(10, 20)

function procuraNumber (num, listNumer) {
    if (!Array.isArray(listNumer)){
        console.log('faz array porra');
        return;
    }

    let count = 0;

    for (let number of listNumer) {
        if (num === number) {
            count++;
        }
    }

    return count
}

console.log(procuraNumber(1, [1, 2, 4, 5, 1]))

function procuraNumber2 (num, listNumber) {
    if (!Array.isArray(listNumber)){
        console.log('faz array porra');
        return;
    }

    return listNumber.filter(number => number === num).length;
}

console.log(procuraNumber2(1, [1, 2, 4, 5, 1]))

function somaImpares (listNumber) {
    if (!Array.isArray(listNumber)){
        console.log('faz array porra');
        return;
    }

    return listNumber.reduce((total, number) =>
        total = (number % 2 !== 0)
            ? total + number
            : total + 0
    , 0);
}

console.log(somaImpares([1, 2, 3, 4, 5, 6, 15, 7]))

function ordena(listNumber) {
    return listNumber.sort((a, b) => a - b)
}

console.log(ordena([2, 5, 1, 5, 7, 1, 6, 2, 25, 3]))

const format_to_string = (key, value) => {
    return `${key}: ${value}`;
}

function returnStringedUser(person_data) {
    let params = ['nome', 'idade', 'altura'];

    // ve a quantidade de KEYS do person que não existem nos PARAMS esperados
    if (params.filter(data => !Object.keys(person_data).includes(data)).length) {
        console.log('Faltou algum parametro')
    }

    if (Object.values(person_data).includes(undefined)) {
        console.log('Tem algum undefined')
    }

    let array_of_return = []

    for (let [key, value] of Object.entries(person_data)) {
        array_of_return.push(format_to_string(key, value));
    }

    return array_of_return.join(' | ')
}

console.log(returnStringedUser({
    nome: 'jao',
    idade: 10,
    altura: 1.50
}))

const sortByAlphabet = (listNomes) => {
    return listNomes.sort((a, b) => a.localeCompare(b));
}

console.log(sortByAlphabet(['adrian', 'zebra', 'jogo do bicho', 'beatriz']))

