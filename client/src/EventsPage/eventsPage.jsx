import classes from './eventsPage.module.scss'
import Header from '../Components/Header/header'
import Footer from '../Components/Footer/footer'
import Faq from '../Components/FaqSection/faq'
import Slider from '../Components/LastSlider/slider'
import BigSlider from '../Components/BigSlider/slider'

import arrow from './img/arrow.png'
import { useState } from 'react'

export default function EventsPage(){
    const [activeFold, setActiveFold] = useState(1)

    return(
        <>
            <Header color={'red'} title_top={'Unforgettable Events,  Perfectly'} title_bot={'Curated for You'}/>
            <main>
                <section className={classes.sect_one}>
                    <div className={classes.con}>
                        <div className={classes.top}>
                            <div className={classes.left}>
                                <p>Unforgettable Events, Perfectly Curated for You</p>
                            </div>
                            <div className={classes.right}>
                                <p>Elevate your celebrations with customized event packages, exquisite catering, and seamless service for a truly memorable experience</p>
                                <button type="button">See More</button>
                            </div>
                        </div>
                        <div className={classes.bottom}>
                            <div className={classes.left}>
                                <div className={activeFold == 1 ? `${classes.line} ${classes.active}` : classes.line}>
                                    <div className={classes.title}>
                                        <p>Customized Catering</p>
                                        <div onClick={()=>setActiveFold(1)}>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                                    </div>
                                </div>
                                <div className={activeFold == 2 ? `${classes.line} ${classes.active}` : classes.line}>
                                    <div className={classes.title}>
                                        <p>Customized Catering</p>
                                        <div onClick={()=>setActiveFold(2)}>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                                    </div>
                                </div>
                                <div className={activeFold == 3 ? `${classes.line} ${classes.active}` : classes.line}>
                                    <div className={classes.title}>
                                        <p>Customized Catering</p>
                                        <div onClick={()=>setActiveFold(3)}>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                                    </div>
                                </div>
                                <div className={activeFold == 4 ? `${classes.line} ${classes.active}` : classes.line}>
                                    <div className={classes.title}>
                                        <p>Customized Catering</p>
                                        <div onClick={()=>setActiveFold(4)}>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                                    </div>
                                </div>
                                <div className={activeFold == 5 ? `${classes.line} ${classes.active}` : classes.line}>
                                    <div className={classes.title}>
                                        <p>Customized Catering</p>
                                        <div onClick={()=>setActiveFold(5)}>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                                    </div>
                                </div>
                                <div className={activeFold == 6 ? `${classes.line} ${classes.active}` : classes.line}>
                                    <div className={classes.title}>
                                        <p>Customized Catering</p>
                                        <div onClick={()=>setActiveFold(6)}>
                                            <img src={arrow} alt="" />
                                        </div>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>Our seafood is responsibly sourced to protect marine ecosystems and ensure future generations can enjoy ocean-fresh flavors.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.right}>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_two}>
                    <div className={classes.con}>
                        <div className={classes.title}>
                            <p>Perfect Events, Any Occasion, Seamlessly Planned for You</p>
                            <p>From weddings to corporate gatherings, we create unforgettable events with expert planning, stunning venues, and exceptional catering services</p>
                        </div>
                        <div className={classes.images}>
                            <div className={classes.left}>
                                <div className={classes.top}>
                                    <img src="" alt="" />
                                </div>
                                <div className={classes.bottom}>
                                    <img src="" alt="" />
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <div className={classes.right}>
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <BigSlider/>
                <section className={classes.sect_three}>
                                    <div className={classes.con}> 
                                        <div className={classes.left}>
                                            <img src="" alt="" />
                                        </div>
                                        <div className={classes.right}>
                                            <div className={classes.main_part}>
                                                <div className={classes.title}>
                                                    <p>Get in Touch with us</p>
                                                    <p>Have questions, need assistance, or just want to say hello? We're here to help! Reach out to us via phone, email, or our contact form, and our team will respond promptly to ensure you get the support and information you need.</p>
                                                </div>
                                                <form onSubmit={(e)=>e.preventDefault()} className={classes.form}>
                                                    <div className={classes.inputs}>
                                                        <div className={classes.name}>
                                                            <div className={classes.first}>
                                                                <label htmlFor="firstName">First name</label>
                                                                <input type="text" name="firstName" id="firstName" placeholder='Tell us who you are'/>
                                                            </div>
                                                            <div className={classes.last}>
                                                                <label htmlFor="lastName">Last name</label>
                                                                <input type="text" name="lastName" id="lastName" placeholder='Tell us who you are'/>
                                                            </div>
                                                        </div>
                                                        <div className={classes.email}>
                                                            <label htmlFor="email">Email address</label>
                                                            <input type="email" name="email" id="email" placeholder='Where can we reach you?'/>
                                                        </div>
                                                        <div className={classes.comment}>
                                                            <label htmlFor="comment">How can we help?</label>
                                                            <textarea name="comment" id="comment" placeholder='Tell us your Specific Case'></textarea>
                                                        </div>
                                                    </div>
                                                    <div className={classes.button}>
                                                        <button type="submit">Send to Us</button>
                                                    </div>
                                                </form>
                                                <div className={classes.terms}>
                                                    <p>By Contacting us, you agree to our <a href="">Terms</a> of service and <a href="">privacy Policy</a></p>
                                                </div>
                                            </div>
                                            <div className={classes.rights}>
                                                <p>2025 Eato, All right reserved</p>
                                            </div>
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