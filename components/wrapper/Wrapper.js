
import styles from '../../styles/wrapper.module.css'
import { Header } from './Header'
import { connect } from 'react-redux'
import {setCity,filterProduct} from '../../store/slices'
import { Footer } from './Footer'
import Head from 'next/head'

const descriptionHomepage = 'Арендовать самокаты, велосипеды, игровые приставки, sup борды по самым низким ценам в Краснодаре и в других крупных городах РФ'
const keywordsHomepage = 'Аренда самокатов, арендовать игровую приставку, аренда велосипедов в Краснодаре, взять в аренду sup борд'

function Wrapper ({city, setCity, filterProduct, 
                stateProduct, children, title = 'Главная | Аренда техники',
                description = descriptionHomepage, keywords = keywordsHomepage}) {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>{title}</title>
                <meta name="description" content = {description} />
                <meta name="keywords" content = {keywords} />
                <link href="http://fonts.googleapis.com/css?family=PT+Sans:regular,italic,bold,bolditalic" rel="stylesheet" type="text/css" />
            </Head>
            <Header city={city} setCity={setCity} filterProduct={filterProduct} />
            {
                children
            }
            <Footer/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    city: state.city,
    stateProduct: state.stateProduct
})
const mapDispatchToProps = ({
    setCity,
    filterProduct
})

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)