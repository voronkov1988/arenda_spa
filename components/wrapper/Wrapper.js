
import styles from '../../styles/wrapper.module.css'
import { Header } from './Header'
import { connect } from 'react-redux'
import {setCity,filterProduct} from '../../store/slices'
import { Footer } from './Footer'

function Wrapper ({city, setCity, filterProduct, stateProduct, children}) {
    return (
        <div className={styles.wrapper}>
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