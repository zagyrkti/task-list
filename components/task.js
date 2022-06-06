import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

export default function Task({ task }) {
  return (
    <li className={utilStyles.listItem}>
      <Link href={`/tasks/${task.id}`}>
        <a>{task.title}</a>
      </Link>
    </li>
  )
}
