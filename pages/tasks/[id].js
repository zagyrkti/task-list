import { useRouter } from 'next/router'
import useSWR from 'swr'
import Date from '../../components/date';
import Layout from '../../components/layout';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css'
import styles from './[id].module.css'
import { fetcher } from '../../utils/fetcher';

export default function TaskDetails() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/tasks/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <h1 className={utilStyles.headingLg}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>
      <Date dateString={data.date} />
      <Link href="/">
        <a className={styles.back}>← Back to task list</a>
      </Link>
    </Layout>
  )
}
