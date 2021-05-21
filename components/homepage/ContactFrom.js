import styles from '../../styles/contactForm.module.css'
import { useState } from 'react'
'Звонок', 'E-mail', 'telegram', 'whatsapp', 'viber'

const mesengers = [
    { id: 1, title: 'Звонок', component: <Caller /> },
    { id: 2, title: 'E-mail', component: `<input type='email' />` },
    { id: 3, title: 'telegram', component: 'https://t.me/abarmot88' },
    { id: 4, title: 'whatsapp', component: 'whatsapp' }
]



export function ContactForm() {
    const [activeMesenger, setActiveMesenger] = useState('Звонок')

    function renderMesenger(){
        switch (activeMesenger) {
            case 'Звонок':
                return <Caller/>
                break;
            case 'E-mail':
                return <EMail />
                break
            case 'telegram':
                return <Telegram />
                break
            case 'whatsapp':
                return <Whatsapp />
                break
            default:
                <Caller/>
                break;
        }
    }

    function changeActive(e) {
        setActiveMesenger(e.target.textContent)
        
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.infoBlock}>
                <div className={styles.left}>
                    <span>Сомневаешься?</span>
                    <span>Оставь заявку на <br></br> консультацию и мы все<br></br> подробно расскажем</span>
                </div>
                <div className={styles.right}>
                    <p>Выберите удобный способ связи:</p>
                    <div className={styles.mesengers}>
                        {
                            mesengers.map((item) => {
                                return (
                                    <span key={item.id} onClick={(e) => changeActive(e)} className={activeMesenger === item.title ? styles.active : ''}>{item.title}</span>
                                )
                            })

                        }
                    </div>
                    <div className={styles.contacts}>
                        {renderMesenger()}
                    </div>
                </div>
            </div>

        </div>
    )
}


function Caller() {
    return (
        <form className={styles.form}>
            <input type='tel' placeholder='+7(999)999-99-99' />
            <input type='submit' value='Заказать звонок' />
        </form>
    )
}
function EMail (){
    return (
        <form className={styles.form}>
            <input type='email' placeholder='myemail@mail.ru' />
            <input type='submit' value='Отправить email' />
        </form>
    )
}
function Telegram(){
    return (
        <a className={styles.link} href='https://t.me/abarmot88' target='_blank' >Написать в Telegram</a>
    )
}
function Whatsapp () {
    return <a className={styles.link} href='https://wa.me/79269574688' target='_blank' >Написать в Whatsapp</a>
}