import Link from 'next/link'
import { useEffect } from 'react'
import { CityCheck } from '../CityCheck'
import { TopMenu } from '../wrapper/TopMenu'

export function Header({ city, setCity, filterProduct}) {
    // console.log(city)
    return (
        city === null
            ? <CityCheck city={city} setCity={setCity} filterProduct={filterProduct} />
            : <TopMenu setCity={setCity}/>
    )
}