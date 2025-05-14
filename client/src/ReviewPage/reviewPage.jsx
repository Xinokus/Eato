import Faq from '../Components/FaqSection/faq'
import Footer from '../Components/Footer/footer'
import Header from '../Components/Header/header'
import Slider from '../Components/LastSlider/slider'
import classes from './reviewPage.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Review from './Review/review'
import Post from '../GalleryPage/InstaPost/instaPost'

export default function ReviewPage(){
    return(
        <>
            <Header color={'red'} title_top={'Unforgettable Events,  Perfectly'} title_bot={'Curated for You'}/>

            <main>
                <Slider/>
                <section className={classes.sect_one}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p>See What Others Are <br/>
                            Saying About Us!</p>
                            <p>Explore our integrated Google and Yelp reviews, showcasing genuine feedback from clients who experienced our exceptional service and unforgettable events</p>
                            <button type="button">See More</button>
                        </div>
                        <div className={classes.reviews}>
                            <Review
                                big_review={true}
                                rating={5}
                                comment={"Our wedding at Eato was absolutely magical! From the moment we arrived, the stunning venue took our breath away. The attention to detail was remarkable, and the staff was incredibly attentive, ensuring everything ran smoothly. The gourmet food was a highlight; our guests are still raving about the delicious menu and exceptional service. We truly felt like royalty throughout the entire day. The atmosphere was perfect for our celebration, and the beautiful décor added a special touch. We couldn’t have asked for a better experience. Thank you for making our special day so perfect! Highly recommend for any event!"}
                                name={'Kathryn Murphy'}
                                status={'President of Sales'}
                            />
                            <Review
                                big_review={false}
                                rating={5}
                                comment={"Our wedding at Eato was absolutely magical! The stunning venue, exquisite food, and attentive staff made our day unforgettable. Every detail was taken care of, and our guests are still raving about the delicious menu. We couldn't have asked for a better experience! Thank you for making our special day so perfect. Highly recommend to anyone planning an event!"}
                                name={'Jerome Bell'}
                                status={'Dog Trainer'}
                            />
                            <Review
                                big_review={false}
                                rating={5}
                                comment={"Our wedding at Eato was absolutely magical! The stunning venue, exquisite food, and attentive staff made our day unforgettable. Every detail was taken care of, and our guests are still raving about the delicious menu. We couldn't have asked for a better experience! Thank you for making our special day so perfect. Highly recommend to anyone planning an event!"}
                                name={'Jerome Bell'}
                                status={'Dog Trainer'}
                            />
                        </div>
                    </div>
                </section>
                <section className={classes.sect_two}>
                    <div className={classes.con}>
                        <div className={classes.video}>
                            <video src=""></video>
                        </div>
                        <div className={classes.text}>
                            <div className={classes.desc}>
                                <p>“When a leading tech company approached us to host their annual corporate retreat, they wanted to create an event that would inspire creativity and strengthen team bonds. Our team worked closely with their organizers to understand their goals and vision”</p>
                            </div>
                            <div className={classes.title}>
                                <p>Michael Richard Klein</p>
                                <p>A successful entrepreneur managing operations across various industries and sectors</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Faq/>
            </main>
            <Footer/>
        </>
    )
}