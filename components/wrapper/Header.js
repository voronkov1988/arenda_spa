import Link from 'next/link'
import { useEffect } from 'react'
import { CityCheck } from '../CityCheck'
import { TopMenu } from '../wrapper/TopMenu'

export function Header({ city, setCity, filterProduct, getCity, fetchCity }) {

    useEffect(() => {
        fetch('http://ip-api.com/json/?lang=ru')
            .then(res => res.json())
            .then(result => getCity(result.regionName))
    }, [fetchCity])
    return (
        city === null
            ? <CityCheck city={city} setCity={setCity} filterProduct={filterProduct} />
            : <TopMenu setCity={setCity} fetchCity={fetchCity} />
    )
}