import classes from './errorPage.module.scss'
import Nav from '../Components/Nav/nav'

import circle from './img/circle.png'

import red_highlight from './img/red_highlight.png'
import yellow_highlight from './img/yellow_highlight.png'

export default function ErrorPage(){
    return(
        <>
            <header className={classes.header}>
                <Nav color={'red'}/>
                <div className={classes.header_mid}>
                    <img src="" alt="" />
                </div>
                <div className={classes.header_bot}>
                    <div className={classes.title}>
                        <p>404 Page not found</p>
                    </div>
                    <div className={classes.desc}>
                        <p>Oops! Looks like this page has vanished.Don't worry, though! You can go back to our homepage or use the search bar to find what you're looking for.</p>
                    </div>
                    <div className={classes.button}>
                        <a href="/"><button type="button">Back to Home</button></a>
                    </div>
                </div>
                <div className={classes.circle_one}>
                    <img src={circle} alt="" />
                </div>
                <div className={classes.circle_two}>
                    <img src={circle} alt="" />
                </div>
                <div className={classes.highlight}>
                    <img src={yellow_highlight} alt="" />
                </div>
            </header>
        </>
    )
}