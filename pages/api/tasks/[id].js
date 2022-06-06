import { tasks } from '../../../data'

export default function TaskHandler({ query: { id } }, res) {
  const task = tasks.find((task) => task.id === id)

  if (task) {
    res.status(200).json(task)
  } else {
    res.status(404).json({ message: `Task with id: ${id} not found.` })
  }
}
