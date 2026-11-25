import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('adiciona uma tarefa na tela', async () => {
  render(<App />)

  await userEvent.type(screen.getByLabelText('Nova tarefa'), 'Estudar DevOps')
  await userEvent.click(screen.getByRole('button', { name: 'Adicionar' }))

  expect(screen.getByText('Estudar DevOps')).toBeInTheDocument()
  expect(screen.getByText('Pendentes: 1')).toBeInTheDocument()
})