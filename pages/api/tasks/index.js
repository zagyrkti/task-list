import { tasks } from '../../../data'

export default function handler(req, res) {
  const taskList = tasks.map((task) => ({title: task.title, id: task.id }));

  res.status(200).json(taskList)
}
