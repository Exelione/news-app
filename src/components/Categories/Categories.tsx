import { ForwardedRef, forwardRef } from 'react'
import styles from './styles.module.css'
import { CategoryType } from '../../interfaces'

interface Props {
    catgories: Array<CategoryType>,
    setSelectedCategory: (category: CategoryType | null)=> void,
    selectedCategory: CategoryType | null
}

export const Categories = forwardRef(({ catgories, setSelectedCategory, selectedCategory }: Props,
    ref : ForwardedRef<HTMLDivElement>
) => {
    return (
        <div ref={ref} className={styles.categories}>
            <button onClick={() => setSelectedCategory(null)}
                className={!selectedCategory ? styles.active : styles.item}>
                All
            </button>


            {catgories.map((category) => {
                return (
                    <button onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? styles.active : styles.item}
                        key={category}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
})


