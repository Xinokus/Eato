import classes from './header.module.scss'
import Nav from '../Nav/nav'

import bowl from './img/bowl.png'
import star from './img/star.png'
import circle from './img/circle.png'

import red_highlight from './img/red_highlight.png'
import yellow_highlight from './img/yellow_highlight.png'

export default function Header({title, color}){
    return(
        <>
            <header className={classes.header} style={color == 'red' ? {backgroundColor: '#C31E26'} : {backgroundColor: '#FFC62B'}}>
                <Nav color={color}/>
                <div className={classes.title}>
                    <p style={color == 'yellow' ? {color: '#C31E26'} : {color: '#FFC62B'}}>{title}</p>
                </div>
                <div className={classes.image}>
                    <img src="" alt="" />
                </div>


                <div className={classes.quality}>
                    <div className={classes.img}>
                        <img src={bowl} alt="" />
                    </div>
                    <div className={classes.text}>
                        <p>100% High Quality</p>
                        <p>best quality raw materials</p>
                    </div>
                </div>
                <div className={classes.explore}>
                    <div>
                        <p style={color == 'red' ? {color: '#FFC62B'} : {color: '#C31E26'}}>Explore our diverse menu, carefully curated for every taste. Select your favorite dishes and indulge in a delightful experience</p>
                    </div>
                    <div>
                        <button type="button" style={color == 'red' ? {color: '#C31E26', backgroundColor: '#FFC62B'} : {color: '#FFC62B', backgroundColor: '#C31E26'}}>View Menu</button>
                        <button type="button">Explore More</button>
                    </div>
                </div>
                <div className={classes.michelin}>
                    <div>
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <div>
                        <p>Michelin Star</p>
                    </div>
                </div>
                <div className={classes.circle_one}>
                    <img src={circle} alt="" />
                </div>
                <div className={classes.circle_two}>
                    <img src={circle} alt="" />
                </div>
                <div className={classes.highlight}>
                    <img src={color == 'red' ? yellow_highlight : red_highlight} alt="" />
                </div>
            </header>
        </>
    )
}