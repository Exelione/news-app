import { getNews } from '../../api/apiNews'
import styles from './styles.module.css'
import { useDebounce } from '../../components/helpers/hooks/useDebounce'
import { PAGE_SIZE } from '../../constants/constants'
import { useFetch } from '../../components/helpers/hooks/useFetch'
import { useFilters } from '../../components/helpers/hooks/useFilters'
import LatestNews from '../../components/LatestNews/LatestNews'
import { NewsByFilters } from '../../components/NewsByFilters/NewsByFilters'



export const Main = () => {

  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  })

  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  })

  return (
    <main className={styles.main}>

      <LatestNews isLoading={isLoading} banners={data && data.news} />
      
      <NewsByFilters
        news={data?.news}
        isLoading={isLoading}
        changeFilter={changeFilter}
        filters={filters} />
    </main>
  )
}