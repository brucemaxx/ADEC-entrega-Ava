export function adicionarTarefa(lista, texto) {
  const limpo = texto.trim()
  if (limpo === '') return lista
  return [...lista, { id: Date.now() + Math.random(), texto: limpo, feita: false }]
}

export function alternarTarefa(lista, id) {
  return lista.map((t) => (t.id === id ? { ...t, feita: !t.feita } : t))
}

export function removerTarefa(lista, id) {
  return lista.filter((t) => t.id !== id)
}

export function contarPendentes(lista) {
  return lista.filter((t) => !t.feita).length
}