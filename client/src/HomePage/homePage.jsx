import Header from '../Components/Header/header'
import Nav from '../Components/Nav/nav'
import classes from './homePage.module.scss'
import Circles from '../Components/Circles/circles'
import './chefsSwiper.scss'

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

import { Navigation, Autoplay } from 'swiper/modules';

import borgor from './img/borgor.png'
import handjob from './img/handjob.png'
import spatula from './img/spatula.png'
import puzzle from './img/puzzle.png'
import hat from './img/hat.png'
import michlen from './img/michlen.png'
import yellow_star from './img/yellow_star.png'
import bowl from './img/bowl.png'

import red_highlight from './img/red_highlight.png'
import yellow_highlight from './img/yellow_highlight.png'
import { useState } from 'react'



export default function HomePage(){
    const [sectFiveCardTitle, setSectFiveCardTitle] = useState('Elegant Anniversary Dinner')
    const [sectFiveCardDesc, setSectFiveCardDesc] = useState('A beautifully curated private dining experience celebrating a couple’s milestone anniversary. The evening featured a gourmet five-course meal, candlelit ambiance, and live acoustic music.')

    return(
        <>
            <header className={classes.header}>
                <div className={classes.circle_one}>
                    <img src={circle} alt="" />
                </div>
                <div className={classes.circle_two}>
                    <img src={circle} alt="" />
                </div>
                <div className={classes.highlight}>
                    <img src={yellow_highlight} alt="" />
                </div>
                <Nav color={'red'}/>
                <div className={classes.con}>
                        <div className={classes.left}>
                            <div className={classes.text}>
                                <div className={classes.ranking}>
                                    <img src={hat} alt="" />
                                    <p>Number 1 Restaurant in the world</p>
                                </div>
                                <div className={classes.main_text}>
                                    <p>Savor the rich flavors, delight in every bite,
                                    enjoy the experience!</p>
                                    <p>Experience a delightful fusion of flavors, crafted with passion and served with warmth for an unforgettable dining journey</p>
                                </div>
                                <div className={classes.buttons}>
                                    <button type="button">View Menu</button>
                                    <button type="button">Explore More</button>
                                </div>
                            </div>
                            <div className={classes.images}>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <div className={classes.review}>
                                    <div className={classes.rating}>
                                        <div className={classes.stars}>
                                            <img src={yellow_star} alt="" />
                                            <img src={yellow_star} alt="" />
                                            <img src={yellow_star} alt="" />
                                            <img src={yellow_star} alt="" />
                                            <img src={yellow_star} alt="" />
                                        </div>
                                        <div className={classes.number}>
                                            <p>5.0</p>
                                        </div>
                                    </div>
                                    <div className={classes.comment}>
                                        <p>I love that they offer fresh, I'm so glad I did! The food was phenomenal,healthy options without compromising on taste. The ingredients are always high-quality, and I feel great after every meal!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <div className={classes.mich}>
                                <div className={classes.stars}>
                                    <img src={michlen} alt="" />
                                    <img src={michlen} alt="" />
                                    <img src={michlen} alt="" />
                                </div>
                                <div className={classes.line}>
                                    <p>Michelin Star</p>
                                </div>
                            </div>
                            <div className={classes.quality}>
                                <div className={classes.img}>
                                    <img src={bowl} alt="" />
                                </div>
                                <div className={classes.bruh}>
                                    <p>100% High Quality</p>
                                    <p>best quality raw materials</p>
                                </div>
                            </div>
                        </div>        
                </div>
            </header>
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
                <section className={classes.sect_five}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p>Unforgettable Moments, Beautifully Crafted, Memories That Last Forever</p>
                        </div>
                        <div className={classes.slider}>
                            
                        </div>
                        <div className={classes.bottom}>
                            <div className={classes.text}>
                                <p>{sectFiveCardTitle}</p>
                                <p>{sectFiveCardDesc}</p>
                            </div>
                            <div className={classes.button}>
                                <button type="button">See More</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}