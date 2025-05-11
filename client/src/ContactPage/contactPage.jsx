import Faq from '../Components/FaqSection/faq'
import Footer from '../Components/Footer/footer'
import Header from '../Components/Header/header'
import Slider from '../Components/LastSlider/slider'
import classes from './contactPage.module.scss'

import pin_inactive from './img/pin_inactive.png'
import pin_active from './img/pin_active.png'

import { useState } from 'react'

import insta from './img/insta.png'
import phone from './img/phone.png'
import chat from './img/chat.png'
import pin from './img/pin.png'

export default function ContactPage(){
    const [activePin, setActivePin] = useState(1)

    return(
        <>
            <Header color={'red'} title_top={`Let's Connect – We're`} title_bot={`Here to Help You!`}/>
            <main>
                <section className={classes.sect_one}>
                    <div className={classes.con}>
                        <div className={classes.top}>
                            <p>Get in Touch – Your Support Starts Here!</p>
                            <p>Whether you need assistance, have inquiries, or just want to say hello, we’re here to listen and respond promptly.</p>
                        </div>
                        <div className={classes.middle}>
                            <img src="" alt="" />
                        </div>
                        <div className={classes.bottom}>
                            <div className={classes.box}>
                                <div className={classes.image}>
                                    <img src={insta} alt="" />
                                </div>
                                <div className={classes.text}>
                                    <p>Follow our Instagram</p>
                                    <p>Speak to our supportive crew</p>
                                    <p><a href="">@Eatorestaurantind</a></p>
                                </div>
                            </div>
                            <div className={classes.box}>
                                <div className={classes.image}>
                                    <img src={chat} alt="" />
                                </div>
                                <div className={classes.text}>
                                    <p>Chat to Support</p>
                                    <p>Speak to our supportive crew</p>
                                    <p><a href="">Helloeato@mail.com</a></p>
                                </div>
                            </div>
                            <div className={classes.box}>
                                <div className={classes.image}>
                                    <img src={pin} alt="" />
                                </div>
                                <div className={classes.text}>
                                    <p>Visit Us</p>
                                    <p>Speak to our supportive crew</p>
                                    <p><a href="">Helloeato@mail.com</a></p>
                                </div>
                            </div>
                            <div className={classes.box}>
                                <div className={classes.image}>
                                    <img src={phone} alt="" />
                                </div>
                                <div className={classes.text}>
                                    <p>Call Us</p>
                                    <p>Speak to our supportive crew</p>
                                    <p><a href="">Helloeato@mail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_two}>
                    <div className={classes.con}>
                        <div className={classes.text}>
                            <p>Navigate Easily – Find Us 
                            with Google Maps!</p>
                            <p>Get real-time directions and explore our location effortlessly with Google Maps integration for a seamless and hassle-free experience.</p>
                        </div>
                        <div className={classes.map}>
                            <div className={activePin == 1 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`}>
                                <div onClick={()=>setActivePin(1)}>
                                    <img src={activePin == 1 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 2 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`}>
                                <div onClick={()=>setActivePin(2)}>
                                    <img src={activePin == 2 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 3 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`}>
                                <div onClick={()=>setActivePin(3)}>
                                    <img src={activePin == 3 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 4 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`}>
                                <div onClick={()=>setActivePin(4)}>
                                    <img src={activePin == 4 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 5 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`}>
                                <div onClick={()=>setActivePin(5)}>
                                    <img src={activePin == 5 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 6 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`}>
                                <div onClick={()=>setActivePin(6)}>
                                    <img src={activePin == 6 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 7 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`}>
                                <div onClick={()=>setActivePin(7)}>
                                    <img src={activePin == 7 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 8 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`}>
                                <div onClick={()=>setActivePin(8)}>
                                    <img src={activePin == 8 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 9 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`}>
                                <div onClick={()=>setActivePin(9)}>
                                    <img src={activePin == 9 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 10 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`} >
                                <div onClick={()=>setActivePin(10)}>
                                    <img src={activePin == 10 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 11 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`} >
                                <div onClick={()=>setActivePin(11)}>
                                    <img src={activePin == 11 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 12 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`}>
                                <div onClick={()=>setActivePin(12)}>
                                    <img src={activePin == 12 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                            <div className={activePin == 13 ? `${classes.pin} ${classes.active}` : `${classes.pin} ${classes.inactive}`}>
                                <div onClick={()=>setActivePin(13)}>
                                    <img src={activePin == 13 ? pin_active : pin_inactive} alt="" />
                                </div>
                                <div>
                                    <p>4517 Washington Ave. 
                                    Manchester, Kentucky 39495</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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