import { useState } from 'react'
import Faq from '../Components/FaqSection/faq'
import Footer from '../Components/Footer/footer'
import Header from '../Components/Header/header'
import Slider from '../Components/LastSlider/slider'
import classes from './galleryPage.module.scss'
import Post from './InstaPost/instaPost'

export default function GalleryPage(){
    const [activeTag, setActiveTag] = useState(1)

    return(
        <>
            <Header color={'yellow'} title_top={'Reserve Your Table, Savor Every'} title_bot={'Moment with Us'}/>
            <main>
                <section className={classes.sect_one}>
                    <div className={classes.con}>
                        <div className={classes.top}>
                            <div className={classes.title}>
                                <p>Capturing Moments, <br/>
                                Creating Lasting Memories Together.</p>
                                <p>Explore our gallery showcasing beautiful events, stunning venues, and unforgettable experiences, all crafted with passion and dedication.</p>
                            </div>
                            <div className={classes.tags}>
                                <p className={activeTag == 1 ? classes.active : null} onClick={()=>setActiveTag(1)}>Private Wedding</p>
                                <p className={activeTag == 2 ? classes.active : null} onClick={()=>setActiveTag(2)}>Corporate Events</p>
                                <p className={activeTag == 3 ? classes.active : null} onClick={()=>setActiveTag(3)}>Private Dining</p>
                                <p className={activeTag == 4 ? classes.active : null} onClick={()=>setActiveTag(4)}>Birthday Celebration</p>
                                <p className={activeTag == 5 ? classes.active : null} onClick={()=>setActiveTag(5)}>Holiday & Themed Events</p>
                            </div>
                        </div>
                        <div className={classes.bottom}>
                            <div className={classes.left}>
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className={classes.right}>
                                <div>
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_two}>
                    <div className={classes.con}>
                        <div className={classes.top}>
                            <p>Explore Our Venue Through Engaging Video Tours Today!</p>
                            <p>Take a virtual journey through our stunning spaces and event setups, showcasing everything we offer for your special occasions</p>
                        </div>
                        <div className={classes.bottom}>
                            <div></div>
                            <video src=""></video>
                            <div></div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_three}>
                    <div className={classes.con}>
                        <div className={classes.top}>
                            <div className={classes.title}>
                                <p>Real Moments, Real Customers: Our Instagram Experience Awaits</p>
                            </div>
                            <div className={classes.desc}>
                                <p>Dive into our vibrant Instagram feed, showcasing genuine customer photos that highlight the joy and beauty of our events</p>
                                <button type="button">See More</button>
                            </div>
                        </div>
                        <div className={classes.bottom}>
                            <Post
                                name={'Esther Howard'}
                                at={'Estherhoward'}
                                text={'Where love meets flavor! 💍✨our breathtaking wedding venue while indulging in exquisite culinary delights. A perfect blend of romance and taste awaits! 🍽️💕 #DreamWedding #FineDining #UnforgettableMoments'}
                            />
                            <Post
                                name={'Esther Howard'}
                                at={'Estherhoward'}
                                text={'Where love meets flavor! 💍✨our breathtaking wedding venue while indulging in exquisite culinary delights. A perfect blend of romance and taste awaits! 🍽️💕 #DreamWedding #FineDining #UnforgettableMoments'}
                            />
                            <Post
                                name={'Esther Howard'}
                                at={'Estherhoward'}
                                text={'Where love meets flavor! 💍✨our breathtaking wedding venue while indulging in exquisite culinary delights. A perfect blend of romance and taste awaits! 🍽️💕 #DreamWedding #FineDining #UnforgettableMoments'}
                            />
                        </div>
                    </div>
                </section>
                <Slider/>
                <Faq/>
            </main>
            <Footer/>
        </>
    )
}