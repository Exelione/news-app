import styles from './styles.module.css'

interface Props {
    keywords: string,
    setKeywords: (keywords: string)=>void
}

export const Searth = ({keywords, setKeywords}: Props) => {
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