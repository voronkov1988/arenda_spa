import styles from '../../styles/infoPage.module.css'
import { TopBlock } from '../wrapper/topBlock'

export function InfoPage() {
    return (
        <div className={styles.wrapper}>
            <TopBlock title='О сервисе'
                      description= 'удобный сервис аренды вещей без залога*. Это место, где можно сильно сэкономить на вещах, которыми вы будете пользоваться только один или два раза за сезон. Хотите попробовать вещь перед её покупкой? Нет проблем! В нашем ассортименте качественные и проверенные гаджеты, детские вещи, игрушки, инструменты, тренажеры и многое другое. ' 
            />
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
                <h2>Доставка и оплата арендуемых вещей</h2>
                <div className={styles.infoCost}>
                    <p><strong>Минимальная сумма заказа:</strong></p>
                    <ul>
                        <li>При доставке/самовывозе всех товаров, кроме инструментов: <strong>2000 <span className={styles.rubl}>&#8399;</span></strong></li>
                        <li>При доставке.самовывозе инструментов: <strong>1000 <span className={styles.rubl}>&#8399;</span></strong></li>
                    </ul>
                    <strong>* не учитывая стоимость доставки</strong>
                </div>
                <div className={styles.infoCost}>
                    <p><strong>Основные правила:</strong></p>
                    <ul>
                        <li>Возврат курьером осуществляется бесплатно или платно по стоимости доставки;</li>
                        <li>Самовывоз и самовозврат – БЕСПЛАТНО;</li>
                        <li>Подъем – БЕСПЛАТНО;</li>
                        <li>Аренда от 1 суток, можно вернуть раньше. Цена списывается кратно суткам.</li>
                        <li>Для возврата необходимо позвонить к нам в офис</li>
                        <li>Вывоз курьером осуществляется на следующий день от даты оформления возврата.</li>
                    </ul>
                    <strong>* не учитывая стоимость доставки</strong>
                </div>
            </div>
        </div>
    )
}