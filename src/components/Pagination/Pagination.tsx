import styles from './styles.module.css'
import { IPaginationProps } from '../../interfaces'


export const Pagination = ({totalPages, nextPage, previousPage, pageClick, currentPage} : IPaginationProps ) => {
    return (
        <div className={styles.pagination}>
            <button disabled={currentPage <= 1 } onClick={previousPage} className={styles.arrow}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index)=> {
                    return (
                        <button disabled={index+1 === currentPage} onClick={()=> pageClick(index+1)} className={styles.pageNumber} key={index}>{index + 1}</button>
                    )
                })}
            </div>
            <button disabled={currentPage >= totalPages} onClick={nextPage} className={styles.arrow}>{'>'}</button>
        </div>
    )
}