import {
  adicionarTarefa,
  alternarTarefa,
  removerTarefa,
  contarPendentes,
} from './tarefas'

test('adiciona uma tarefa à lista', () => {
  const lista = adicionarTarefa([], 'Estudar')
  expect(lista).toHaveLength(1)
  expect(lista[0].texto).toBe('Estudar')
  expect(lista[0].feita).toBe(false)
})

test('ignora tarefa vazia', () => {
  expect(adicionarTarefa([], '   ')).toEqual([])
})

test('alterna o estado de uma tarefa', () => {
  const lista = [{ id: 1, texto: 'A', feita: false }]
  expect(alternarTarefa(lista, 1)[0].feita).toBe(true)
})

test('remove uma tarefa pelo id', () => {
  const lista = [
    { id: 1, texto: 'A', feita: false },
    { id: 2, texto: 'B', feita: false },
  ]
  expect(removerTarefa(lista, 1)).toEqual([{ id: 2, texto: 'B', feita: false }])
})

test('conta apenas as tarefas pendentes', () => {
  const lista = [
    { id: 1, texto: 'A', feita: false },
    { id: 2, texto: 'B', feita: true },
    { id: 3, texto: 'C', feita: false },
  ]
  expect(contarPendentes(lista)).toBe(2)
})