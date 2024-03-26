import { getCategories, getNews } from '../../api/apiNews'
import NewsList from '../../components/NewsList/NewsList'
import NewsBanner from '../../components/newsBanner/NewsBanner'
import styles from './styles.module.css'
import { Pagination } from '../../components/Pagination/Pagination'
import { Categories } from '../../components/Categories/Categories'
import { Searth } from '../../components/Searth/Searth'
import { useDebounce } from '../../components/helpers/hooks/useDebounce'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'
import { useFetch } from '../../components/helpers/hooks/useFetch'
import { useFilters } from '../../components/helpers/hooks/useFilters'


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

  const { data: dataCategories } = useFetch(getCategories)


  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1)
    }
  }
  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1)
    }
  }

  const handlePageClick = (pageNumber) => {

    changeFilter('page_number', pageNumber)

  }

  return (
    <main className={styles.main}>

      {dataCategories ? <Categories catgories={dataCategories.categories} selectedCategory={filters.category} setSelectedCategory={(category) => changeFilter('category', category)} /> : null}

      <Searth keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />

      <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]} />


      <Pagination
        currentPage={filters.page_number}
        nextPage={handleNextPage}
        previousPage={handlePreviousPage}
        pageClick={handlePageClick}
        totalPages={TOTAL_PAGES} />

      <NewsList
        isLoading={isLoading}
        news={data?.news} />



      <Pagination
        currentPage={filters.page_number}
        nextPage={handleNextPage}
        previousPage={handlePreviousPage}
        pageClick={handlePageClick}
        totalPages={TOTAL_PAGES} />
    </main>
  )
}