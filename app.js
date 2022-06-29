let tarefas1 = `Ir ao mercado`
let tarefas2 = `Estudar programação`
let tarefas3 = `Atualizar LinkedIn`

console.log(`Minhas tarefas são: ${tarefas1}, ${tarefas2} e ${tarefas3}`)

// parte 2

let tarefas = []

tarefas.push(tarefas1, tarefas2, tarefas3)

console.log(tarefas)

// parte 3

let novaTarefa = `Regar plantas`

alert(`Sua nova tarefa é: ${novaTarefa}`)

tarefas.push(novaTarefa)

console.log(tarefas)

//parte 4 e 5

function exibirTarefas() {
    for(i = 0; i < tarefas.length; i++) {
        console.log(`Minha tarefa é ${tarefas[i]}`)
    }
}
exibirTarefas()

function adicionarTarefa(tarefa) {
    tarefa = prompt(`Informe uma nova tarefa:`)
    tarefas.push(tarefa)
    console.log(tarefas)
}
adicionarTarefa()

// parte 6

const maisUmaNovaTarefa = {
    id: 1,
    titulo: 'Calibrar o pneu da bicicleta',
    descricao: `Levar a bicicleta vermelha ao posto e calibrar o pneu traseiro com 32 psi`
}

let arrayTarefas = [maisUmaNovaTarefa]

function exibirNovasTarefas() {
    console.log(`Tarefa: ${maisUmaNovaTarefa.id} \nTitulo: ${maisUmaNovaTarefa.titulo} \nDescrição: ${maisUmaNovaTarefa.descricao}`)
}
exibirNovasTarefas()

// faltam os últimos três itens da parte 6