import styles from '../../styles/goodsList.module.css'
import { connect } from 'react-redux'
import Image from 'next/image'

export function GoodsList({ stateProduct, children }) {
    console.log(stateProduct)
    return (
        <>
            <h2 className={styles.h2}>Выберите товар</h2>
            <div className={styles.wrapper}>
                {children}
                <div className={styles.allProducts}>
                    <div className={styles.oneProduct}>
                        <div className={styles.mainBlock}>
                            <h3>Sony Playstation 4</h3>
                            <Image src='/products/PS4pro.png' width={400} height={300} />
                            <div className={styles.costBlock}>
                                <span>day: 450r</span>
                                <span>month: 5600 r</span>
                                <span>year: 60000r</span>
                            </div>
                        </div>
                        <span className={styles.button}>Оформить аренду</span>
                    </div>

                    <div className={styles.oneProduct}>
                        <div className={styles.mainBlock}>
                            <h3>Sony Playstation 4</h3>
                            <Image src='/products/velo_26.png' width={400} height={300} />
                            <div className={styles.costBlock}>
                                <span>day: 450r</span>
                                <span>month: 5600 r</span>
                                <span>year: 60000r</span>
                            </div>
                        </div>
                        <span className={styles.button}>Оформить аренду</span>
                    </div>
                    
                    <div className={styles.oneProduct}>
                        <div className={styles.mainBlock}>
                            <h3>Sony Playstation 4</h3>
                            <Image src='/products/xiaomi-kugo-s2.webp' width={400} height={300} />
                            <div className={styles.costBlock}>
                                <span>day: 450r</span>
                                <span>month: 5600 r</span>
                                <span>year: 60000r</span>
                            </div>
                        </div>
                        <span className={styles.button}>Оформить аренду</span>
                    </div>



                </div>
            </div>

        </>
    )

}

const mapStateToProps = (state) => ({
    stateProduct: state.stateProduct
})

export default connect(mapStateToProps, null)(GoodsList)