import styles from '../../styles/previlegies.module.css'

export function Previlegies() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
            <div className={styles.items}>
                <div className={styles.imageWrap}>
                    <img src='/best/velo.png'/>
                </div>
                <img src='/best/strelka.png' />
                <p>Большой выбор арендуемых товаров</p>
            </div>
            <div className={styles.items}>
                <div className={styles.imageWrap}>
                    <img src='/best/weather.png'/>
                </div>
                <img src='/best/strelka.png' />
                <p>Большой выбор арендуемых товаров</p>
            </div>
            <div className={styles.items}>
                <div className={styles.imageWrap}>
                    <img src='/best/repair.png'/>
                </div>
                <img src='/best/strelka.png' />
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
