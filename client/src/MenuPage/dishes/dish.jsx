import star from '../img/star.png'
import classes from '../menuPage.module.scss'

import place from '../../../static/img/place.png'

export default function Dish({img, title, desc, rating, price}){
    return(
        <>
            <div className={classes.swiper_slide}>
                <div className={classes.image}>
                    <img src={place} alt="" style={{backgroundImage: 'url("' + img + '")'}}/>
                </div>
                <div className={classes.info}>
                    <div className={classes.title_and_desc}>
                        <div className={classes.title}>
                            <p>{title}</p>
                        </div>
                        <div className={classes.desc}>
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className={classes.rating_and_price}>
                        <div className={classes.rating}>
                            <img src={star} alt="" style={rating >= 1 ? {visibility: 'visible'} : {visibility: 'hidden'}}/>
                            <img src={star} alt="" style={rating >= 2 ? {visibility: 'visible'} : {visibility: 'hidden'}}/>
                            <img src={star} alt="" style={rating >= 3 ? {visibility: 'visible'} : {visibility: 'hidden'}}/>
                            <img src={star} alt="" style={rating >= 4 ? {visibility: 'visible'} : {visibility: 'hidden'}}/>
                            <img src={star} alt="" style={rating == 5 ? {visibility: 'visible'} : {visibility: 'hidden'}}/>
                        </div>
                        <div className={classes.price}>
                            <p>${price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}