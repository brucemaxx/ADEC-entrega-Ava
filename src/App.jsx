import { useState } from 'react'
import {
  adicionarTarefa,
  alternarTarefa,
  removerTarefa,
  contarPendentes,
} from './tarefas'

export default function App() {
  const [tarefas, setTarefas] = useState([])
  const [texto, setTexto] = useState('')

  function aoEnviar(e) {
    e.preventDefault()
    setTarefas(adicionarTarefa(tarefas, texto))
    setTexto('')
  }

  return (
    <main>
      <h1>Lista de Tarefas</h1>

      <form onSubmit={aoEnviar}>
        <input
          aria-label="Nova tarefa"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="O que fazer?"
        />
        <button type="submit">Adicionar</button>
      </form>

      <p>Pendentes: {contarPendentes(tarefas)}</p>

      <ul>
        {tarefas.map((t) => (
          <li key={t.id}>
            <label>
              <input
                type="checkbox"
                checked={t.feita}
                onChange={() => setTarefas(alternarTarefa(tarefas, t.id))}
              />
              <span style={{ textDecoration: t.feita ? 'line-through' : 'none' }}>
                {t.texto}
              </span>
            </label>
            <button
              aria-label={`Remover ${t.texto}`}
              onClick={() => setTarefas(removerTarefa(tarefas, t.id))}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}