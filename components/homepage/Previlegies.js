import styles from '../../styles/previlegies.module.css'

export function Previlegies() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.items}>
                    <img className={styles.first} src='/best/velo.png' />
                    <p>Большой выбор арендуемых товаров</p>
                </div>
                <div className={styles.weather}>
                    <img src='/best/weather.png' />
                    <p>Работаем в любую погоду</p>
                </div>
                <div className={styles.repair}>
                    <img src='/best/repair.png' />
                    <p>Большой выбор арендуемых товаров</p>
                </div>
            </div>
            <div className={styles.nav}>
                <img src='/best/strelka.png' />
                <img src='/best/strelka.png' />
                <img src='/best/strelka.png' />
            </div>
        </div>
    )
}