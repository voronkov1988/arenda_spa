 import styles from '../../styles/burger.module.css'
 import Link from 'next/link'

 export function Burger () {
     return (
         <div className={styles.burger}>
             <Link href='/about'><a>Соглашение</a></Link>
                <Link href='/info'><a>Информация</a></Link>
                <Link href='/contacts'><a>Контакты</a></Link>
         </div>
     )
 }