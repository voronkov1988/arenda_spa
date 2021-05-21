import styles from '../../styles/topBlock.module.css'

export function TopBlock({title, description}) {
    return (
        <div className={styles.topBlock}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}