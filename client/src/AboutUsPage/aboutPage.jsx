import Header from "../Components/Header/header"
import classes from './aboutPage.module.scss'

import circle from './img/circle.png'
import dish from './img/dish.png'
import whisk from './img/whisk.png'
import chef from './img/chef.png'

import { useState } from "react"

import arrow from './img/arrow.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

import Circles from "../Components/Circles/circles"

import Faq from "../Components/FaqSection/faq"
import Slider from "../Components/LastSlider/slider"
import Footer from "../Components/Footer/footer"

export default function AboutPage(){
    const [sectTwoActive, setSectTwoActive] = useState(1)

    return(
        <>
            <Header color={'red'} title_top={'Passion for Flavor,'} title_bot={'Excellence in Every Dish'}/>
            <main className={classes.main}>
                <section className={classes.sect_one}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p><span className={classes.span}>A CULINARY DESTINATION WHERE PASSION MEETS PERFECTION</span>, SERVING EXQUISITE FLAVORS AND IMPECCABLE SERVICE</p>
                        </div>
                        <div className={classes.middle}>
                            <div className={classes.image}>
                                <img src="" alt="" />
                            </div>
                            <div className={classes.dishes}>
                                <div className={classes.top}>
                                    <div>
                                        <img src={dish} alt="" />
                                    </div>
                                    <p>50+</p>
                                </div>
                                <div className={classes.bot}>
                                    <p>Unique Dishes on Our Menu</p>
                                </div>
                            </div>
                            <div className={classes.percent}>
                                <div className={classes.top}>
                                    <div>
                                        <img src={whisk} alt="" />
                                    </div>
                                    <p>100%</p>
                                </div>
                                <div className={classes.bot}>
                                    <p>Happy Customers Served Daily</p>
                                </div>
                            </div>
                            <div className={classes.amount}>
                                <div className={classes.top}>
                                    <div>
                                        <img src={chef} alt="" />
                                    </div>
                                    <p>1000+</p>
                                </div>
                                <div className={classes.bot}>
                                    <p>Happy Customers Served Daily</p>
                                </div>
                            </div>
                            <div className={classes.shadow}>

                            </div>
                        </div>
                        <div className={classes.desc}>
                            <p>Experience a world of culinary excellence where passion and precision come together, offering meticulously crafted flavors, exceptional service, and a dining journey that delights the senses with every bite, creating unforgettable moments in an elegant and welcoming atmosphere</p>
                        </div>
                    </div>
                    
                    <div className={classes.circle_one}>
                        <img src={circle} alt="" />
                    </div>
                    <div className={classes.circle_two}>
                        <img src={circle} alt="" />
                    </div>
                </section>
                <section className={classes.sect_two}>
                    <div className={classes.con}>
                        <div className={classes.left}>
                            <div className={classes.text}>
                                <p>Fresh, Ethical, Sustainable Food</p>
                                <p>We source responsibly, support local farmers, and embrace sustainability to ensure fresh, high-quality ingredients for a healthier planet</p>
                            </div>
                            <div className={classes.button}>
                                <button type="button">See More</button>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <div className={sectTwoActive == 1 ? `${classes.line} ${classes.active}` : classes.line}>
                                <div className={classes.top}>
                                    <div className={classes.title}>
                                        <p>Sustainable Seafood</p>
                                        <div onClick={()=>setSectTwoActive(1)}>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                                    </div>
                                </div>
                                <div className={classes.image}>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className={sectTwoActive == 2 ? `${classes.line} ${classes.active}` : classes.line}>
                                <div className={classes.top}>
                                    <div className={classes.title}>
                                        <p>Sustainable Seafood</p>
                                        <div onClick={()=>setSectTwoActive(2)}>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                                    </div>
                                </div>
                                <div className={classes.image}>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className={sectTwoActive == 3 ? `${classes.line} ${classes.active}` : classes.line}>
                                <div className={classes.top}>
                                    <div className={classes.title}>
                                        <p>Sustainable Seafood</p>
                                        <div onClick={()=>setSectTwoActive(3)}>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                                    </div>
                                </div>
                                <div className={classes.image}>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className={sectTwoActive == 4 ? `${classes.line} ${classes.active}` : classes.line}>
                                <div className={classes.top}>
                                    <div className={classes.title}>
                                        <p>Sustainable Seafood</p>
                                        <div onClick={()=>setSectTwoActive(4)}>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                                    </div>
                                </div>
                                <div className={classes.image}>
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className={sectTwoActive == 5 ? `${classes.line} ${classes.active}` : classes.line}>
                                <div className={classes.top}>
                                    <div className={classes.title}>
                                        <p>Sustainable Seafood</p>
                                        <div onClick={()=>setSectTwoActive(5)}>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                                    </div>
                                </div>
                                <div className={classes.image}>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_four}>
                    <Circles/>
                    <div className={classes.con}>
                        <div className={classes.text}>
                            <p>Passionate Chefs, Dedicated Team – Crafting Culinary Excellence</p>
                            <p>Our talented chefs and dedicated team work together to create unforgettable dining experiences with passion, precision, and creativity.</p>
                        </div>
                        <Swiper
                            slidesPerView={3.7}
                            // spaceBetween={24}
                            className={classes.chefs_swiper + ' chefs_swiper'}
                            _slideClass={classes.swiper_slide}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                              }}
                            speed={5000}
                            allowTouchMove={false}
                            loop = 'true'
                        >
                            <SwiperSlide>
                                <div className={classes.swiper_slide}>
                                    <div className={classes.image}>
                                        <img src="" alt="" />
                                    </div>
                                    <div className={classes.info}>
                                        <p>Olivia Martinez</p>
                                        <p>Pastry Chef</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.swiper_slide}>
                                    <div className={classes.image}>
                                        <img src="" alt="" />
                                    </div>
                                    <div className={classes.info}>
                                        <p>James Carter</p>
                                        <p>Head Chef</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.swiper_slide}>
                                    <div className={classes.image}>
                                        <img src="" alt="" />
                                    </div>
                                    <div className={classes.info}>
                                        <p>Daniel Wong</p>
                                        <p>Restaurant Manager</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.swiper_slide}>
                                    <div className={classes.image}>
                                        <img src="" alt="" />
                                    </div>
                                    <div className={classes.info}>
                                        <p>Olivia Martinez</p>
                                        <p>Pastry Chef</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.swiper_slide}>
                                    <div className={classes.image}>
                                        <img src="" alt="" />
                                    </div>
                                    <div className={classes.info}>
                                        <p>James Carter</p>
                                        <p>Head Chef</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.swiper_slide}>
                                    <div className={classes.image}>
                                        <img src="" alt="" />
                                    </div>
                                    <div className={classes.info}>
                                        <p>Daniel Wong</p>
                                        <p>Restaurant Manager</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className={classes.button}>
                            <button type="button">Discover More</button>
                        </div>
                    </div>
                </section>
                <Faq/>
                <Slider/>
            </main>
            <Footer/>
        </>
    )
}