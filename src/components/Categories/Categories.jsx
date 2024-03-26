
import styles from './styles.module.css'

export const Categories = ({ catgories, setSelectedCategory, selectedCategory }) => {
    return (
        <div className={styles.categories}>
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
}