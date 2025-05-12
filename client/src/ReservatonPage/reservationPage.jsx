import Faq from '../Components/FaqSection/faq'
import Footer from '../Components/Footer/footer'
import Header from '../Components/Header/header'
import Slider from '../Components/LastSlider/slider'
import classes from './reservationPage.module.scss'

export default function ReservationPage(){
    return(
        <>
            <Header color={'yellow'} title_top={'Reserve Your Table, Savor Every'} title_bot={'Moment with Us'}/>
            <main>
                <section className={classes.sect_one}>
                    <div className={classes.con}>
                        <div className={classes.top}>
                            <p>Secure Your Spot, Indulge in <br/>
                            Culinary Delights</p>
                            <p>Make a reservation today to experience exquisite dishes, attentive service, and a welcoming atmosphere perfect for any occasion.</p>
                        </div>
                        <div className={classes.bot}>
                            <div className={classes.inputs}>
                                <div className={classes.one}>
                                    <div className={classes.input}>
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" name="name" id="name" />
                                    </div>
                                    <div className={classes.input}>
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" name="email" id="email" />
                                    </div>
                                </div>
                                <div className={classes.two}>
                                    
                                </div>
                                <div className={classes.three}>

                                </div>
                            </div>
                            <div className={classes.button}>
                                <button type="button">Reserve Now</button>
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