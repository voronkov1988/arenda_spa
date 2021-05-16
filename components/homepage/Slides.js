import styles from '../../styles/slides.module.css'
import Slider from 'react-slick'

const SlideItem = [
    {id: 1, title: 'Арендуйте велосипед', description: 'Катайтесь, сколько нужно', image: '/slides/slide1.png', component: false },
    {id: 2, title: 'Электро самокат', description: 'В аренду без залога', image: '/slides/slide2.png', component: false },
    {id: 3, title: 'Арендуйте supборд', description: 'Быстрая доставка', image: '/slides/slide3.png', component: false },
    {id: 4, title: 'Арендуйте по подписке', description: 'Выгоднее посуточной аренды, отсутствие залога', image: '/slides/slide4.png', component: false },
    {id: 5, title: 'Арендуйте тренажер', description: 'Тренеруйтесь когда хотите', image: '/slides/slide5.png', component: false },
]

export function Slides() {
    const settings = {
        centerMode: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        dots: false,
        prevArrow: <PrevArrow direction="prev" />,
        nextArrow: <NextArrow direction="next" />,
    };
    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div onClick={onClick}>
                <button className={styles.slickArrow + ' ' + styles.prev}>
                    <img src='slides/left.png' />
                </button>
            </div>
        );
    }
    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div onClick={onClick}>
                <button className={styles.slickArrow + ' ' + styles.next}>
                    <img src='/slides/right.png' />
                </button>
            </div>
        );
    }
    return (
        <div className={styles.wrapper}>
            <Slider className={styles.slider} {...settings}>
                {
                    SlideItem.map(item => {
                        return (
                            <div key={item.id}>
                                <div style={{width: '100%', background: `url(${item.image}) center center`, height:'600px'}} className={styles.info}>
                                    <h2 className={styles.title}>{item.title}</h2>
                                    <p className={styles.description}>{item.description}</p>
                                    <span className={styles.katalog}>Смотреть каталог</span>
                                </div>
                                {/* <img src={item.image} /> */}
                                
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}