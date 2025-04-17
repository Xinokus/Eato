import classes from './nav.module.scss'

import logo_yellow from './img/logo_yellow.png'
import logo_red from './img/logo_red.png'

export default function Nav({color}){
    return(
        <>
                <nav className={classes.nav}>
                    <div className={classes.nav_left}>
                        <div className={classes.logo}>
                            <a href="/"><img src={color == 'red' ? logo_yellow : color == 'yellow' ? logo_red : null} alt="" /></a>
                        </div>
                        <div className={classes.links}>
                            <a href="/">Home</a>
                            <a href="/menu">Menu</a>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                        </div>
                    </div>
                    <div className={classes.nav_right}>
                        <button type="button" style={color == 'yellow' ? {backgroundColor: '#C31E26', color: '#FFC62B'} : null}>Book Reservation</button>
                    </div>
                </nav>
        </>
    )
}