import styles from '../../styles/footer.module.css'
import Link from 'next/link'
export function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logoBlock}>
                <Link href='/'><a className={styles.logo}>Аренда<span>TOP</span></a></Link>
                <div className={styles.social}>
                    <img src='/whatsapp.png' alt='Связаться в Whatsapp'/>
                    <img src='/telegram.png' alt='Связаться в Telegram' />
                    <img src='/instagramm.png' alt='Связаться в instagram' />
                </div>
            </div>
            <div className={styles.contactBlock}>
                <h3>Контакты</h3>
                <span>+7(495) 651 05 26</span>
                <span>Ежедневно с 9.00 - 20.00</span>
                <span>г.Москва Васильковская 12</span>
            </div>
            <div className={styles.menuBlock}>
                <Link href='/'><a>Главная</a></Link>
                <Link href='/'><a>Соглашение</a></Link>
                <Link href='/'><a>Информация</a></Link>
                <Link href='/'><a>Контакты</a></Link>
            </div>
        </div>
    )
}