import classes from './circles.module.scss'
import circle from './img/circle.png'

export default function Circles(){
    return (
        <>
            <div className={classes.circle_one}>
                <img src={circle} alt="" />
            </div>
            <div className={classes.circle_two}>
                <img src={circle} alt="" />
            </div>
        </>
    )
}