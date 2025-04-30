import classes from '../homePage.module.scss'

export default function SectSixTrend({image, title, desc, time, trend}){
    return(
        <>
            <div className={classes.trend}>
                <div className={classes.image}>
                    <img src={image} alt="" />
                </div>
                <div className={classes.info}>
                    <div className={classes.text}>
                        <p>{title}</p>
                        <p>{desc}</p>
                    </div>
                    <div className={classes.tags}>
                        <div className={classes.trend_type}>
                            <p>{trend}</p>
                        </div>
                        <div className={classes.time_to_read}>
                            <p>{time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}