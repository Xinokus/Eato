import Faq from '../Components/FaqSection/faq'
import Footer from '../Components/Footer/footer'
import Header from '../Components/Header/header'
import Slider from '../Components/LastSlider/slider'
import classes from './specialPage.module.scss'

import apron from './img/apron.png'
import knife from './img/knife.png'

export default function SpecialPage(){
    return(
        <>
            <Header color={'red'} title_top={'Unlock Rewards, Enjoy More,'} title_bot={'Stay Loyal, Save Big!'}/>
            <main>
                <section className={classes.sect_one}>
                    <div className={classes.con}>
                        <div className={classes.left}>
                            <img src="" alt="" />
                        </div>
                        <div className={classes.right}>
                            <div className={classes.top}>
                                <div className={classes.text}>
                                    <p>A Special Treat for 
                                    First-Time Guests!</p>
                                    <p>Are you visiting our restaurant for the first time? We have a special treat just for you! Enjoy an exclusive [X]% discount on your very first order, whether you choose to dine in or order online. It’s our way of saying welcome and thank you for trying our delicious dishes. From mouthwatering appetizers to delightful main courses, every bite is crafted to impress.</p>
                                </div>
                                <div className={classes.cards}>
                                    <div className={classes.card}>
                                        <div className={classes.square}>
                                            <img src={knife} alt="" />
                                        </div>
                                        <div className={classes.title}>
                                            <p>Exclusive Welcome Discount</p>
                                        </div>
                                        <div className={classes.desc}>
                                            <p>Enjoy [X]% off your first order, whether you dine in or order online!</p>
                                        </div>
                                    </div>
                                    <div className={classes.card}>
                                        <div className={classes.square}>
                                            <img src={apron} alt="" />
                                        </div>
                                        <div className={classes.title}>
                                            <p>Exclusive Welcome Discount</p>
                                        </div>
                                        <div className={classes.desc}>
                                            <p>Savor our signature dishes made with fresh ingredients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.bottom}>
                                <button type="button">Book Reservation</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_two}>
                    <div className={classes.con}>
                        <div className={classes.left}>
                            <div className={classes.tag}>
                                <p>Events & Private Dining</p>
                            </div>
                            <div className={classes.title}>
                                <p>Join us in celebrating life’s special moments with exceptional food and unforgettable experiences together!</p>
                            </div>
                            <div className={classes.desc}>
                                <p>Whether it’s a birthday, anniversary, corporate gathering, or any special occasion, our restaurant offers the perfect setting for your event</p>
                            </div>
                            <div className={classes.button}>
                                <button type="button">See More</button>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <img src="" alt="" />
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