import { getCategories } from "../../api/apiNews"
import { Categories } from "../Categories/Categories"
import { Searth } from "../Searth/Searth"
import { Slider } from "../Slider/Slider"
import { useFetch } from "../../helpers/hooks/useFetch"
import styles from './styles.module.css'
import { CategoriesApiResponse, IFilters } from "../../interfaces"
import { useTheme } from "../../context/ThemeContext"

interface Props {
    filters: IFilters,
    changeFilter: (key: string, value: string | number | null) => void,
    
}

export const NewsFilters = ({ filters, changeFilter }: Props) => {
    const { isDark } = useTheme();
    const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories)
    return (

        <div className={styles.filters}>
            {dataCategories ? (
                <Slider isDark={isDark}>
                    <Categories
                    catgories={dataCategories.categories}
                    selectedCategory={filters.category}
                    setSelectedCategory={
                        (category) => 
                        changeFilter('category', category)
                    }
                />
                </Slider>
            ) : null}


            <Searth keywords={filters.keywords} setKeywords={(keywords) => changeFilter('keywords', keywords)} />
        </div>

    )
}