import styles from '../../styles/info.module.css'

const category = [
    {id: 1, }
]

export function Info () {
    return (
        <div className={styles.wrapper}>

            <div className={styles.imgBlock}>
                <div className={styles.left}>
                    <img src='/veloCategory.png' />
                </div>
                <div className={styles.manual}>
                    <span><span className={styles.first}>Заполняй</span> простую форму</span>
                    <img src='/best/strelka.png' />
                    <span><span className={styles.first}>Жди</span> быструю доставку</span>
                    <img src='/best/strelka.png' />
                    <span><span className={styles.first}>Наслаждайся</span> хорошо <br></br> проведенным временем</span>
                </div>
            </div>
            <img className={styles.strelki} src='/2strelki.png' />
        </div>
    )
}