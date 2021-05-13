
import Link from 'next/link'
import { CityCheck } from '../CityCheck'
import { TopMenu } from '../wrapper/TopMenu'

export function Header({ city, setCity, filterProduct }) {
    return (
        city === null
            ? <CityCheck city={city} setCity={setCity} filterProduct={filterProduct}/>
            : <TopMenu />
    )
}