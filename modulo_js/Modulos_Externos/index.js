const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

console.log(args)

// O pacote minimist serve para escrever argumentos dentro da linha de comando

const nome = args['nome']
const profissao = args['profissao']

console.log(nome)
console.log(profissao)

console.log(`Nome: ${nome} Profissão: ${profissao}`)