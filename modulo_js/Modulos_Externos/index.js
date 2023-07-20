const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

console.log(args)

// O pacote minimist serve para escrever argumentos dentro da linha de comando

const nome = args['nome']
const profissao = args['profissao']

console.log(nome)
console.log(profissao)

console.log(`Nome: ${nome} Profissão: ${profissao}`)

//interno
const soma = require('./pratica_args').soma

soma(2,2)

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a,b)

//node index.js --nome=Leonardo --profissao=Tecnico --a=10 --b=5