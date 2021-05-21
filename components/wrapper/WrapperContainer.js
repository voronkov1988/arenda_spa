import {Wrapper} from "./Wrapper"
import {useEffect} from 'react'
import { connect } from 'react-redux'
import { setCity, filterProduct, getCity } from '../../store/slices'

function WrapperContainer({ city, stateProduct, fetchCity, setCity, filterProduct, getCity, children }) {
    useEffect(() => {
        fetch('http://ip-api.com/json/?lang=ru')
            .then(res => res.json())
            .then(result => getCity(result.regionName))
    }, [fetchCity])
    return (
        <Wrapper city={city}
            stateProduct={stateProduct}
            fetchCity={fetchCity}
            setCity={setCity}
            filterProduct={filterProduct}
            getCity={getCity}
        >
            {children}
        </Wrapper>

    )
}

const mapStateToProps = (state) => ({
    city: state.city,
    stateProduct: state.stateProduct,
    fetchCity: state.fetchCity
})
const mapDispatchToProps = ({
    setCity,
    filterProduct,
    getCity
})

export default connect(mapStateToProps, mapDispatchToProps)(WrapperContainer)