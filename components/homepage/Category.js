import styles from '../../styles/category.module.css'

export function Category () {
    return (
        <div className={styles.categoryBlock}>
                <span className={styles.active}>Велосипеды</span>
                <span>Самокаты</span>
                <span>Консоли</span>
                <span>Тренажеры</span>
                <span>Sup Борды</span>
            </div>
    )
}