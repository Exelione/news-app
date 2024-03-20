import { getNews } from '../../api/apiNews'
import { NewsList } from '../../components/NewsList/NewsList'
import { NewsBaner } from '../../components/newBaner/NewsBaner'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

export const Main = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
      const fetchNews = async () => {
        try {
            const response = await getNews()
            setNews(response.news)
        } catch (error) {
            console.log(error)
        }
      }
      fetchNews();
    }, [])
    
    return (
      <main className={styles.main}>
        {news.length && <NewsBaner item={news[0]}/>}
        <NewsList news={news}/>
        </main>
    )
}