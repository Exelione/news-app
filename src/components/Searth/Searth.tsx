import { useTheme } from '../../context/ThemeContext';
import styles from './styles.module.css'

interface Props {
    keywords: string,
    setKeywords: (keywords: string)=>void,
    
}

export const Searth = ({keywords, setKeywords}: Props) => {
    const { isDark } = useTheme();
    return (
        <div className={`${styles.searth} ${isDark ? styles.dark : styles.light}`}>
            <input type="text"
            value={keywords}
            className={styles.input} 
            onChange={(event)=>setKeywords(event.target.value)}
            placeholder='JavaScript'
            />
        </div>
    )
}