import styles from '../../styles/goodsList.module.css'
import { connect } from 'react-redux'
import Image from 'next/image'
import { Category } from '../../components/homepage/Category'

export function GoodsList({ stateProduct, children }) {
    console.log(stateProduct)
    return (
        <>
            <Category />
            <div className={styles.wrapper}>
                <div className={styles.oneProduct}>
                    <h3>Горный велосипед Aspect Air (185-190см)</h3>
                    <Image src='/products/xiaomi-kugo-s2.webp' width={300} height={200} />
                    <div className={styles.info}>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>День: </span>
                            <span className={styles.cost}>340 <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>Месяц: </span>
                            <span className={styles.cost}>{340 * 30} <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>Год: </span>
                            <span className={styles.cost}>{340 * 30 * 12} <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                    </div>
                    <span className={styles.button}>Арендовать</span>
                </div>

                <div className={styles.oneProduct}>
                    <h3>Горный велосипед Aspect Air (185-190см)</h3>
                    <Image src='/products/xiaomi-kugo-s2.webp' width={300} height={200} />
                    <div className={styles.info}>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>День: </span>
                            <span className={styles.cost}>340 <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>Месяц: </span>
                            <span className={styles.cost}>{340 * 30} <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>Год: </span>
                            <span className={styles.cost}>{340 * 30 * 12} <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                    </div>
                    <span className={styles.button}>Арендовать</span>
                </div>

                <div className={styles.oneProduct}>
                    <h3>Горный велосипед Aspect Air (185-190см)</h3>
                    <Image src='/products/xiaomi-kugo-s2.webp' width={300} height={200} />
                    <div className={styles.info}>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>День: </span>
                            <span className={styles.cost}>340 <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>Месяц: </span>
                            <span className={styles.cost}>{340 * 30} <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>Год: </span>
                            <span className={styles.cost}>{340 * 30 * 12} <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                    </div>
                    <span className={styles.button}>Арендовать</span>
                </div>

                <div className={styles.oneProduct}>
                    <h3>Горный велосипед Aspect Air (185-190см)</h3>
                    <Image src='/products/xiaomi-kugo-s2.webp' width={300} height={200} />
                    <div className={styles.info}>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>День: </span>
                            <span className={styles.cost}>340 <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>Месяц: </span>
                            <span className={styles.cost}>{340 * 30} <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>Год: </span>
                            <span className={styles.cost}>{340 * 30 * 12} <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                    </div>
                    <span className={styles.button}>Арендовать</span>
                </div>

                <div className={styles.oneProduct}>
                    <h3>Горный велосипед Aspect Air (185-190см)</h3>
                    <Image src='/products/xiaomi-kugo-s2.webp' width={300} height={200} />
                    <div className={styles.info}>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>День: </span>
                            <span className={styles.cost}>340 <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>Месяц: </span>
                            <span className={styles.cost}>{340 * 30} <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                        <div className={styles.period}>
                            <span className={styles.forPeriod}>Год: </span>
                            <span className={styles.cost}>{340 * 30 * 12} <span className={styles.rubl}>&#8399;</span></span>
                        </div>
                    </div>
                    <span className={styles.button}>Арендовать</span>
                </div>
                
            </div>
        </>
    )

}

const mapStateToProps = (state) => ({
    stateProduct: state.stateProduct
})

export default connect(mapStateToProps, null)(GoodsList)

{/* <Image src='/products/PS4pro.png' width={400} height={300} />
<Image src='/products/velo_26.png' width={400} height={300} />
<Image src='/products/xiaomi-kugo-s2.webp' width={400} height={300} /> */}