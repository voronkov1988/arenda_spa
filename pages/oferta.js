import styles from '../styles/oferta.module.css'
import { Wrapper } from '../components/wrapper/Wrapper'
import { TopBlock } from '../components/wrapper/TopBlock'

export default function Oferta () {
    return (
        <Wrapper title='Оферта | Правила'>
            <TopBlock title='Договор оферты'
                      description='Настоящий Договор публичной оферты (далее также «Оферта») устанавливает порядок оказания услуг по сдаче в аренду Имущества, размещенного на Интернет-ресурсе www.lalala.ru, и регулирует отношения между Клиентами и Администрацией Интернет-ресурса.' 
            />
        </Wrapper>
    )
}