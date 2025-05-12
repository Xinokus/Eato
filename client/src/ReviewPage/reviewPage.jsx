import Faq from '../Components/FaqSection/faq'
import Footer from '../Components/Footer/footer'
import Header from '../Components/Header/header'
import Slider from '../Components/LastSlider/slider'
import classes from './reviewPage.module.scss'

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