import styles from '../../styles/goodsList.module.css'
import { connect } from 'react-redux'

export function GoodsList ({stateProduct}) {
    console.log(stateProduct)
    return (
        <div className={styles.wrapper}>
            {}
        </div>
    )
}

const mapStateToProps = (state) => ({
    stateProduct: state.stateProduct
})

export default connect(mapStateToProps, null) (GoodsList)