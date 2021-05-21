import styles from '../styles/infoPage.module.css'

export function InfoPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topBlock}>
                <h1>О сервисе</h1>
                <p>удобный сервис аренды вещей без залога*. Это место, где можно сильно сэкономить на вещах, которыми вы будете пользоваться только один или два раза за сезон. Хотите попробовать вещь перед её покупкой? Нет проблем! В нашем ассортименте качественные и проверенные гаджеты, детские вещи, игрушки, инструменты, тренажеры и многое другое. </p>
            </div>
            <div className={styles.content}>
                <div className={styles.steps}>
                    <div className={styles.step}>
                        <img src='/mobile.png' />
                        <span className={styles.title}>Оставь заявку</span>
                        <span className={styles.description}>Это бесплатно и займет всего пару минут</span>
                    </div>

                    <div className={styles.step}>
                        <img src='/delivery.png' />
                        <span className={styles.title}>Доставим куда угодно</span>
                        <span className={styles.description}>Доставляем до двери в пределах 30км от МКАД</span>
                    </div>

                    <div className={styles.step}>
                        <img src='/delivery.png' />
                        <span className={styles.title}>Заберем в любое время</span>
                        <span className={styles.description}>Заберем заказ назад в удобное для вас время</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}