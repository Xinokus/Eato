import Header from "../Components/Header/header"
import classes from './menuPage.module.scss'
import './menuSwiper.scss'

import star from './img/star.png'
import circle from './img/circle.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function MenuPage(){
    return(
        <>
            <Header color={'yellow'} title_top={'Discover, Select, Enjoy – Your'} title_bot={'Perfect Choice Awaits'}/>
            <main className={classes.main}>
                <section className={classes.sect_one}>
                    <div className={classes.circle}>
                        <img src={circle} alt="" />
                    </div>
                    <div className={classes.con}>
                        <div className={classes.text}>
                            <p>Our Signature Menu</p>
                            <p>Experience our signature menu, a masterpiece of flavors crafted with premium ingredients, culinary expertise, and an artistic touch to delight</p>
                        </div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={24}
                            navigation={true}
                            modules={[Navigation]}
                            className={classes.menu_swiper + ' menu_swiper'}
                            _slideClass={classes.swiper_slide}
                        >
                                <SwiperSlide>
                                    <div className={classes.swiper_slide}>
                                        <div className={classes.image}>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.info}>
                                            <div className={classes.title_and_desc}>
                                                <div className={classes.title}>
                                                    <p>Truffle-infused Wagyu Delight</p>
                                                </div>
                                                <div className={classes.desc}>
                                                    <p>Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.</p>
                                                </div>
                                            </div>
                                            <div className={classes.rating_and_price}>
                                                <div className={classes.rating}>
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                </div>
                                                <div className={classes.price}>
                                                    <p>$12,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={classes.swiper_slide}>
                                        <div className={classes.image}>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.info}>
                                            <div className={classes.title}>
                                                <p></p>
                                            </div>
                                            <div className={classes.desc}>
                                                <p></p>
                                            </div>
                                            <div className={classes.rating_and_price}>
                                                <div className={classes.rating}>
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                </div>
                                                <div className={classes.price}>
                                                    <p>$12,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={classes.swiper_slide}>
                                        <div className={classes.image}>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.info}>
                                            <div className={classes.title}>
                                                <p></p>
                                            </div>
                                            <div className={classes.desc}>
                                                <p></p>
                                            </div>
                                            <div className={classes.rating_and_price}>
                                                <div className={classes.rating}>
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                </div>
                                                <div className={classes.price}>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={classes.swiper_slide}>
                                        <div className={classes.image}>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.info}>
                                            <div className={classes.title}>
                                                <p></p>
                                            </div>
                                            <div className={classes.desc}>
                                                <p></p>
                                            </div>
                                            <div className={classes.rating_and_price}>
                                                <div className={classes.rating}>
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                </div>
                                                <div className={classes.price}>
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={classes.swiper_slide}>
                                        <div className={classes.image}>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.info}>
                                            <div className={classes.title_and_desc}>
                                                <div className={classes.title}>
                                                    <p>Truffle-infused Wagyu Delight</p>
                                                </div>
                                                <div className={classes.desc}>
                                                    <p>Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.</p>
                                                </div>
                                            </div>
                                            <div className={classes.rating_and_price}>
                                                <div className={classes.rating}>
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                </div>
                                                <div className={classes.price}>
                                                    <p>$12,00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>                           
                        </Swiper>
                    </div>
                </section>
            </main>
        </>
    )
}