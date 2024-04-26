import { Categories } from "../Categories/Categories"
import { Searth } from "../Searth/Searth"
import { Slider } from "../Slider/Slider"
import styles from './styles.module.css'
import { useTheme } from "../../context/ThemeContext"
import { useGetCategoriesQuery } from "../../store/services/newsApi"
import { IFilters } from "../../interfaces"
import { useDispatch } from "react-redux"
import { setFilters } from "../../store/slices/newsSlice"

interface Props {
    filters: IFilters,
}

export const NewsFilters = ({ filters }: Props) => {
    const { isDark } = useTheme();
    const { data } = useGetCategoriesQuery(null);
    const dispatch = useDispatch();


    return (

        <div className={styles.filters}>
            {data ? (
                <Slider isDark={isDark}>
                    <Categories
                        catgories={data.categories}
                        selectedCategory={filters.category}
                        setSelectedCategory={
                            (category) =>
                                dispatch(setFilters({ key: 'category', value: category }))
                        }
                    />
                </Slider>
            ) : null}


            <Searth keywords={filters.keywords} setKeywords={(keywords) =>
                dispatch(setFilters({ key: 'keywords', value: keywords }))} />
        </div>

    )
}