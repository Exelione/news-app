import { Image } from '../image/image'
import { formatTimeAgo } from '../helpers/formatTimeAgo'
import styles from './styles.module.css'

export const NewsBaner = ({ item }) => {
    return (
        <div className={styles.banner}>
            <Image image={item.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    )
}