
import styles from './styles.module.css'

export const Searth = ({keywords, setKeywords}) => {
    return (
        <div className={styles.searth}>
            <input type="text"
            value={keywords}
            className={styles.input}
            onChange={(event)=>setKeywords(event.target.value)}
            placeholder='JavaScript'
            />
        </div>
    )
}