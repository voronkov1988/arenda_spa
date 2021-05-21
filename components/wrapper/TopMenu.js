import styles from '../../styles/topMenu.module.css'
import Link from 'next/link'
import { Burger } from './Burger'

export function TopMenu () {
    return (
        <>
        <div className={styles.wrapper}>
            <Link href='/'><a className={styles.logo}>Аренда<span>TOP</span></a></Link>
            <nav className={styles.menu}>
                <Link href='/oferta'><a>Соглашение</a></Link>
                <Link href='/info'><a>Информация</a></Link>
                <Link href='/contacts'><a>Контакты</a></Link>
            </nav>

            <span className={styles.tel}>+7(926) 957 46-88</span>
        </div>
        <Burger/>
        </>
    )
}

