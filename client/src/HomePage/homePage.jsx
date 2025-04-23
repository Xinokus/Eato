import Header from '../Components/Header/header'
import classes from './homePage.module.scss'

import circle from './img/circle.png'
import dish from './img/dish.png'
import whisk from './img/whisk.png'
import chef from './img/chef.png'

import star from './img/star.png'
import circle_red from './img/circle copy.png'
import circle_yellow from './img/circle_y.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import borgor from './img/borgor.png'
import handjob from './img/handjob.png'
import spatula from './img/spatula.png'
import puzzle from './img/puzzle.png'

export default function HomePage(){
    return(
        <>
            <Header color={'red'} title={'Discover, Select, Enjoy – Your Perfect Choice Awaits'}/>
            <main>
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
                    <div className={classes.circle}>
                        <img src={circle_red} alt="" />
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
                <section className={classes.sect_three}>
                    <div className={classes.back}>
                                    <img src={circle_yellow} alt="" />
                                </div>
                    <div className={classes.con}>
                        <div className={classes.top}>
                            <div className={classes.title}>
                                <p>Unmatched Quality, Exceptional Service, Memorable Experience</p>
                            </div>
                            <div className={classes.desc}>
                                <p>We blend premium ingredients, expert craftsmanship, and warm hospitality to create a dining experience that exceeds expectations every time.</p>
                            </div>
                        </div>
                        <div className={classes.bot}>
                            <div className={classes.side}>
                                <div className={classes.box}>
                                    <div className={classes.image}>
                                        <img src={borgor} alt="" />
                                    </div>
                                    <div className={classes.text}>
                                        <div className={classes.title}>
                                            <p>Exceptional Quality Ingredients</p>
                                        </div>
                                        <div className={classes.desc}>
                                            <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.box}>
                                    <div className={classes.image}>
                                        <img src={handjob} alt="" />
                                    </div>
                                    <div className={classes.text}>
                                        <div className={classes.title}>
                                            <p>Expert Culinary Team</p>
                                        </div>
                                        <div className={classes.desc}>
                                            <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.middle}>
                                <div className={classes.button}>
                                    <button type="button">Reserve Now</button>
                                </div>
                            </div>
                            <div className={classes.side}>
                                <div className={classes.box}>
                                    <div className={classes.image}>
                                        <img src={spatula} alt="" />
                                    </div>
                                    <div className={classes.text}>
                                        <div className={classes.title}>
                                            <p>Impeccable Service</p>
                                        </div>
                                        <div className={classes.desc}>
                                            <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.box}>
                                    <div className={classes.image}>
                                        <img src={puzzle} alt="" />
                                    </div>
                                    <div className={classes.text}>
                                        <div className={classes.title}>
                                            <p>Inviting Atmosphere</p>
                                        </div>
                                        <div className={classes.desc}>
                                            <p>We source only the finest, freshest ingredients to ensure every dish bursts with flavor and nutrition. Our skilled chefs bring creativity and passion to every plate, crafting unique and delicious dishes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}