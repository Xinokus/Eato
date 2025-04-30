import classes from './footer.module.scss'

import logo from './img/logo.png'
import arrow from './img/Arrow.png'

import Instagram from './img/Instagram.png'
import LinkedIn from './img/LinkedIn.png'
import Twitter from './img/Twitter.png'
import WhatsApp from './img/WhatsApp.png'

export default function Footer(){
    return(
        <>
            <footer className={classes.footer}>
                <div className={classes.con}>
                    <div className={classes.left}>
                        <div className={classes.top}>
                            <img src={logo} alt="" />
                            <p>We Drive Real Result, More Traffic, More Leads, more Growth!</p>
                        </div>
                        <div className={classes.mid}>
                            <p>Subscribe now for exclusive offers and the latest food updates!</p>
                            <div className={classes.email}>
                                <input type="email" placeholder='Enter your Email Address'/>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                        <div className={classes.bot}>
                            <p>3891 Ranchview Dr. Richardson, California 62639</p>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.social}>
                            <a href=""><img src={WhatsApp} alt="" /></a>
                            <a href=""><img src={Instagram} alt="" /></a>
                            <a href=""><img src={LinkedIn} alt="" /></a>
                            <a href=""><img src={Twitter} alt="" /></a>
                        </div>
                        <div className={classes.lists}>
                            <ul>
                                <p>Home</p>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                            </ul>
                            <ul>
                                <p>About Us</p>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                            </ul>
                            <ul>
                                <p>Service</p>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                                <a href=""><li>Vision & Mission</li></a>
                            </ul>
                        </div>
                        <div className={classes.things}>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            <p>2025 Eato, All right reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}