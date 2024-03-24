
import styles from './styles.module.css'

export const Categories = ({ catgories, setSelectedCategory, selectedCategory }) => {
    return (
        <div className={styles.categories}>
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