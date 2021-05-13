import styles from '../styles/cityCheck.module.css'
import {useState} from  'react'

const cities = ['Москва', 'Санкт-Петербург', 'Краснодар', 'Казань', 'Ростов']

export function CityCheck ({setCity, city, filterProduct}) {
    function checkedCity (e) {
        setCity(e.target.textContent)
        filterProduct(e.target.textContent)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <div className={styles.cities}>
                    <h4>Выберите город</h4>
                    {
                        cities.map((item,index) => {
                            return <span onClick={(e)=>checkedCity(e)} key={index}>{item}</span>
                        })
                    }
                </div>
                <div className={styles.map}>
                    <img src='/maps/map.png' />
                </div>
            </div>
        </div>
    )
}