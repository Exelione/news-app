import { getCategories } from "../../api/apiNews"
import { Categories } from "../Categories/Categories"
import { Searth } from "../Searth/Searth"
import { useFetch } from "../helpers/hooks/useFetch"
import styles from './styles.module.css'

export const NewsFilters = ({ filters, changeFilter }) => {

    const { data: dataCategories } = useFetch(getCategories)
    return (

        <div className={styles.filters}>
            {dataCategories ? <Categories catgories={dataCategories.categories} selectedCategory={filters.category} setSelectedCategory={(category) => changeFilter('category', category)} /> : null}

            <Searth keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />
        </div>

    )
}