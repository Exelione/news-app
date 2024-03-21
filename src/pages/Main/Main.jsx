import { getNews } from '../../api/apiNews'
import { NewsList } from '../../components/NewsList/NewsList'
import { NewsBaner } from '../../components/newBaner/NewsBaner'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { Skeleton } from '../../components/Skeleton/Skeleton'

export const Main = () => {

  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true)
        const response = await getNews()
        setNews(response.news)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchNews();

  }, [])

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? <NewsBaner item={news[0]} /> : <Skeleton count={1} type='banner'/>}
      {isLoading ? <Skeleton count={10} type='item'/> : <NewsList news={news}/>}
    </main>
  )
}