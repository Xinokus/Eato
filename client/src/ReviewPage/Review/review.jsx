import classes from '../reviewPage.module.scss'

import star from '../img/star.png'

export default function Review({big_review, rating, comment, pfp, name, status}){
    if(big_review == true){
        return(
            <>
                <div className={classes.big_review}>
                    <div className={classes.rating}>
                        <img style={rating >= 1 ? {visibility: 'visible'} : {visibility: 'hidden'}} src={star} alt="" />
                        <img style={rating >= 2 ? {visibility: 'visible'} : {visibility: 'hidden'}} src={star} alt="" />
                        <img style={rating >= 3 ? {visibility: 'visible'} : {visibility: 'hidden'}} src={star} alt="" />
                        <img style={rating >= 4 ? {visibility: 'visible'} : {visibility: 'hidden'}} src={star} alt="" />
                        <img style={rating = 5 ? {visibility: 'visible'} : {visibility: 'hidden'}} src={star} alt="" />
                    </div>
                    <div className={classes.comment}>
                        <p>{comment}</p>
                    </div>
                    <div className={classes.person}>
                        <div className={classes.pfp}>
                            <img src={pfp} alt="" />
                        </div>
                        <div className={classes.info}>
                            <p>{name}</p>
                            <p>{status}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className={classes.review}>
                    <div className={classes.rating}>
                        <img style={rating >= 1 ? {visibility: 'visible'} : {visibility: 'hidden'}} src={star} alt="" />
                        <img style={rating >= 2 ? {visibility: 'visible'} : {visibility: 'hidden'}} src={star} alt="" />
                        <img style={rating >= 3 ? {visibility: 'visible'} : {visibility: 'hidden'}} src={star} alt="" />
                        <img style={rating >= 4 ? {visibility: 'visible'} : {visibility: 'hidden'}} src={star} alt="" />
                        <img style={rating = 5 ? {visibility: 'visible'} : {visibility: 'hidden'}} src={star} alt="" />
                    </div>
                    <div className={classes.comment}>
                        <p>{comment}</p>
                    </div>
                    <div className={classes.person}>
                        <div className={classes.pfp}>
                            <img src={pfp} alt="" />
                        </div>
                        <div className={classes.info}>
                            <p>{name}</p>
                            <p>{status}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}