import { TOTAL_PAGES } from '../../constants/constants'
import { NewsFilters } from '../NewsFilters/NewsFilters'
import NewsList from '../NewsList/NewsList'
import { PaginationWrapper } from '../PaginationWrapper/PaginationWrapper'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import styles from './styles.module.css'
import { useGetNewsQuery } from '../../store/services/newsApi'
import { useAppSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { setFilters } from '../../store/slices/newsSlice'



export const NewsByFilters = () => {
    const dispatch = useDispatch()

    const filters = useAppSelector(state => state.news.filters)
    const news = useAppSelector(state => state.news.news)

    const debouncedKeywords = useDebounce(filters.keywords as string, 1500)

    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords,
    })

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            dispatch(setFilters({ key: 'page_number', value: filters.page_number + 1 }))
        }
    }
    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            dispatch(setFilters({ key: 'page_number', value: filters.page_number - 1 }))
        }
    }

    const handlePageClick = (page_number: number) => {
        dispatch(setFilters({ key: 'page_number', value: page_number }));
    };
    return (

        <section className={styles.section}>
            <NewsFilters filters={filters} />
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
                    news={news}
                />
            </PaginationWrapper>

        </section>
    )
}