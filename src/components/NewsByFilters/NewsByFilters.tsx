import { getNews } from '../../api/apiNews'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants'
import { NewsFilters } from '../NewsFilters/NewsFilters'
import NewsList from '../NewsList/NewsList'
import { PaginationWrapper } from '../PaginationWrapper/PaginationWrapper'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useFilters } from '../../helpers/hooks/useFilters'
import styles from './styles.module.css'
import { NewsApiResponse, ParamsType } from '../../interfaces'



export const NewsByFilters = () => {
    const { filters, changeFilter } = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    })

    const debouncedKeywords = useDebounce(filters.keywords as string, 1500)

    const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    })

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

    const handlePageClick = (pageNumber: number) => {

        changeFilter('page_number', pageNumber)

    }
    return (

        <section className={styles.section}>
            <NewsFilters filters={filters} changeFilter={changeFilter} />
            <PaginationWrapper
                top
                bottom
                currentPage={filters.page_number}
                nextPage={handleNextPage}
                previousPage={handlePreviousPage}
                pageClick={handlePageClick}
                totalPages={TOTAL_PAGES}
                >
                <NewsList
                    isLoading={isLoading}
                    news={data?.news}
                />
            </PaginationWrapper>

        </section>
    )
}