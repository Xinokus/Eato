import classes from '../galleryPage.module.scss'

import comment from '../img/Comment.png'
import like from '../img/Like.png'
import send from '../img/Send.png'
import bookmark from '../img/Bookmark.png'

export default function Post({pfp, name, image, at, text}){
    return(
        <>
            <div className={classes.post}>
                <div className={classes.up}>
                    <div className={classes.pfp}>
                        <img src={pfp} alt="" />
                    </div>
                    <div className={classes.name}>
                        <p>{name}</p>
                    </div>
                </div>
                <div className={classes.image}>
                    <img src={image} alt="" />
                </div>
                <div className={classes.text}>
                    <div className={classes.buttons}>
                        <div>
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>
                        <div>
                            <img src={bookmark} alt="" />
                        </div>
                    </div>
                    <div className={classes.desc}>
                        <p><span>{at}</span> {text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}