import Header from "../Components/Header/header"
import classes from './menuPage.module.scss'
import './menuSwiper.scss'

import circle from './img/circle.png'

import Faq from "../Components/FaqSection/faq"
import Slider from "../Components/LastSlider/slider"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import red_highlight from './img/red_highlight.png'

import { useState, useEffect } from "react"
import Dish from "./dishes/dish"

import Footer from "../Components/Footer/footer"
import axios from "axios"

export default function MenuPage(){
    const [selectedTag, setSelectedTag] = useState(1)

    const [data, setData] = useState([])

    useEffect(()=>{
        let body = new FormData()
        body.append('categoryId', selectedTag)

        axios({
            method: 'POST',
            url: 'http://localhost:5000/product/byCategory',
            data: body,
            headers: {'Content-Type': "application/x-www-form-urlencoded"}
        })
        .then(function (response) {
            console.log(response.data)
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [])

    useEffect(()=>{
        console.log(selectedTag)
        showProducts()
    },[selectedTag])

    function changeTag(number){
        setSelectedTag(number)
    }
    function showProducts(){
        let body = new FormData()
        body.append('categoryId', selectedTag)

        axios({
            method: 'POST',
            url: 'http://localhost:5000/product/byCategory',
            data: body,
            headers: {'Content-Type': "application/x-www-form-urlencoded"}
        })
        .then(function (response) {
            console.log(response.data)
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    if(data[0] != undefined){return(
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
                                    <Dish
                                        img={'../../static/img/Truffle-infused Wagyu Delight.jpg'}
                                        title={'Truffle-infused Wagyu Delight'}
                                        desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                        rating={5}
                                        price={'12,00'}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Dish
                                        img={'../../static/img/Ocean Symphony Risotto.jpg'}
                                        title={'Ocean Symphony Risotto'}
                                        desc={'Creamy saffron-infused risotto with fresh lobster, scallops, and prawns, finished with parmesan and herbs'}
                                        rating={4}
                                        price={'12,00'}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Dish
                                        img={'../../static/img/Golden Crispy Duck Confit.jpg'}
                                        title={'Golden Crispy Duck Confit'}
                                        desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                        rating={4}
                                        price={'12,00'}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Dish
                                        img={'../../static/img/Velvet Chocolate Lava Cake.jpg'}
                                        title={'Velvet Chocolate Lava Cake'}
                                        desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                        rating={5}
                                        price={'12,00'}
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Dish
                                    img={'../../static/img/Truffle-infused Wagyu Delight.jpg'}
                                        title={'Truffle-infused Wagyu Delight'}
                                        desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                        rating={5}
                                        price={'12,00'}
                                    />
                                </SwiperSlide>                           
                        </Swiper>
                    </div>
                </section>
                <section className={classes.sect_three}>
                    <div className={classes.con}>
                        <div className={classes.top}>
                            <div className={classes.title_and_desc}>
                                <p>Savor the Flavor, Delight in Every Bite!</p>
                                <p>Explore our menu filled with mouthwatering dishes, crafted with passion and the freshest ingredients to satisfy every craving</p>
                            </div>
                            <div className={classes.tags}>
                                <p className={selectedTag == 1 ? classes.active : null} onClick={()=>changeTag(1)}>Appetizers</p>
                                <p className={selectedTag == 2 ? classes.active : null} onClick={()=>changeTag(2)}>Soups & Salads</p>
                                <p className={selectedTag == 3 ? classes.active : null} onClick={()=>setSelectedTag(3)}>Main Course</p>
                                <p className={selectedTag == 4 ? classes.active : null} onClick={()=>setSelectedTag(4)}>Side Dishes</p>
                                <p className={selectedTag == 5 ? classes.active : null} onClick={()=>setSelectedTag(5)}>Desserts</p>
                                <p className={selectedTag == 6 ? classes.active : null} onClick={()=>setSelectedTag(6)}>Beverages</p>
                            </div>
                        </div>
                        <div className={classes.dishes}>
                            <div className={classes.highlight}>
                                <img src={red_highlight} alt="" />
                            </div>
                            <div className={classes.line}>
                                <Dish
                                    img={'../../static/img/' + data[1].img}
                                    title={data[0].name}
                                    desc={data[0].desc}
                                    rating={data[0].rating}
                                    price={data[0].price}
                                />
                                <Dish
                                    img={'../../static/img/' + data[1].img}
                                    title={data[1].name}
                                    desc={data[1].desc}
                                    rating={data[1].rating}
                                    price={data[1].price}
                                />
                                <Dish
                                    img={'../../static/img/' + data[2].img}
                                    title={data[2].name}
                                    desc={data[2].desc}
                                    rating={data[2].rating}
                                    price={data[2].price}
                                />
                            </div>
                            <div className={classes.line}>
                                <Dish
                                img={'../../static/img/Truffle-infused Wagyu Delight.jpg'}
                                    title={'Truffle-infused Wagyu Delight'}
                                    desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                    rating={5}
                                    price={'12,00'}
                                />
                                <Dish
                                img={'../../static/img/Truffle-infused Wagyu Delight.jpg'}
                                    title={'Truffle-infused Wagyu Delight'}
                                    desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                    rating={5}
                                    price={'12,00'}
                                />
                                <Dish
                                img={'../../static/img/Truffle-infused Wagyu Delight.jpg'}
                                    title={'Truffle-infused Wagyu Delight'}
                                    desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                    rating={5}
                                    price={'12,00'}
                                />
                            </div>
                            <div className={classes.line}>
                                <Dish
                                img={'../../static/img/Truffle-infused Wagyu Delight.jpg'}
                                    title={'Truffle-infused Wagyu Delight'}
                                    desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                    rating={5}
                                    price={'12,00'}
                                />
                                <Dish
                                img={'../../static/img/Truffle-infused Wagyu Delight.jpg'}
                                    title={'Truffle-infused Wagyu Delight'}
                                    desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                    rating={5}
                                    price={'12,00'}
                                />
                                <Dish
                                img={'../../static/img/Truffle-infused Wagyu Delight.jpg'}
                                    title={'Truffle-infused Wagyu Delight'}
                                    desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                    rating={5}
                                    price={'12,00'}
                                />
                            </div>
                            <div className={classes.line}>
                                <Dish
                                img={'../../static/img/Truffle-infused Wagyu Delight.jpg'}
                                    title={'Truffle-infused Wagyu Delight'}
                                    desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                    rating={5}
                                    price={'12,00'}
                                />
                                <Dish
                                img={'../../static/img/Truffle-infused Wagyu Delight.jpg'}
                                    title={'Truffle-infused Wagyu Delight'}
                                    desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                    rating={5}
                                    price={'12,00'}
                                />
                                <Dish
                                img={'../../static/img/Truffle-infused Wagyu Delight.jpg'}
                                    title={'Truffle-infused Wagyu Delight'}
                                    desc={'Succulent Wagyu steak drizzled with aromatic truffle sauce, served with buttery mashed potatoes.'}
                                    rating={5}
                                    price={'12,00'}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <Faq/>
                <Slider/>
            </main>
            <Footer/>
        </>
    )}
}