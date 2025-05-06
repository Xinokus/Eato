import classes from '../menuPage.module.scss'

import arrow from '../img/arrow_faq.png'

export default function SectSevenFaq({title, answer, active, onClick}){
    return(
        <>
            <div className={active == false ? classes.faq_question : `${classes.faq_question} ${classes.active}`}>
                <div className={classes.text}>
                    <p>{title}</p>
                    <p style={active == false ? {opacity: 0, visibility: 'hidden', display: 'none'} : {opacity: 1, visibility: 'visible'}}>{answer}</p>
                </div>
                <div className={active == false ? classes.arrow : `${classes.arrow} ${classes.active}`}
                    onClick={onClick}
                >
                    <img src={arrow} alt="" />
                </div>
            </div>
        </>
    )
}