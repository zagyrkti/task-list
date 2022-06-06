import useSWR from 'swr'
import Task from '../components/task'
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import { fetcher } from '../utils/fetcher';

export default function Index() {
  const { data, error } = useSWR('/api/tasks', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <h1 className={utilStyles.headingLg}>Tasks</h1>
      <ul className={utilStyles.list}>
        {data.map((p, i) => (
            <Task key={i} task={p} />
        ))}
      </ul>
    </Layout>
  )
}
