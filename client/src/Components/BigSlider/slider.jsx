import classes from './slider.module.scss'

import { useState } from 'react'

import SectFiveArrow from './img/sect_five_arrow.png'
import red_highlight from './img/red_highlight.png'

import SliderValues from './SliderValues/slider_values'

import SliderFood1 from '../../../static/img/SliderFood1.jpg'
import SliderFood2 from '../../../static/img/SliderFood2.jpg'
import SliderFood3 from '../../../static/img/SliderFood3.jpg'
import SliderFood4 from '../../../static/img/SliderFood4.jpg'
import SliderFood5 from '../../../static/img/SliderFood5.jpg'

export default function BigSlider(){

    const [sectFiveImageOne, setSectFiveImageOne] = useState(0)
    const [sectFiveImageTwo, setSectFiveImageTwo] = useState(1)
    const [sectFiveImageThree, setSectFiveImageThree] = useState(2)
    const [sectFiveImageFour, setSectFiveImageFour] = useState(3)
    const [sectFiveImageFive, setSectFiveImageFive] = useState(4)

    function SectFiveSliderNext(){
        if(sectFiveImageOne == 4){
            setSectFiveImageOne(0)
        }
        else{
            setSectFiveImageOne(sectFiveImageOne + 1)
        }

        if(sectFiveImageTwo == 4){
            setSectFiveImageTwo(0)
        }
        else{
            setSectFiveImageTwo(sectFiveImageTwo + 1)
        }

        if(sectFiveImageThree == 4){
            setSectFiveImageThree(0)
        }
        else{
            setSectFiveImageThree(sectFiveImageThree + 1)
        }

        if(sectFiveImageFour == 4){
            setSectFiveImageFour(0)
        }
        else{
            setSectFiveImageFour(sectFiveImageFour + 1)
        }

        if(sectFiveImageFive == 4){
            setSectFiveImageFive(0)
        }
        else{
            setSectFiveImageFive(sectFiveImageFive + 1)
        }
    }

    function SectFiveSliderPrev(){
        if(sectFiveImageOne == 0){
            setSectFiveImageOne(4)
        }
        else{
            setSectFiveImageOne(sectFiveImageOne - 1)
        }

        if(sectFiveImageTwo == 0){
            setSectFiveImageTwo(4)
        }
        else{
            setSectFiveImageTwo(sectFiveImageTwo - 1)
        }

        if(sectFiveImageThree == 0){
            setSectFiveImageThree(4)
        }
        else{
            setSectFiveImageThree(sectFiveImageThree - 1)
        }

        if(sectFiveImageFour == 0){
            setSectFiveImageFour(4)
        }
        else{
            setSectFiveImageFour(sectFiveImageFour - 1)
        }

        if(sectFiveImageFive == 0){
            setSectFiveImageFive(4)
        }
        else{
            setSectFiveImageFive(sectFiveImageFive - 1)
        }
    }

    return(
        <>
            <section className={classes.sect_five}>
                    <div className={classes.con}>
                        <div className={classes.back}>
                            <img src={red_highlight} alt="" />
                        </div>
                        <div className={classes.title}>
                            <p>Unforgettable Moments, Beautifully Crafted, Memories That Last Forever</p>
                        </div>
                        <div className={classes.slider}>
                            <div className={classes.buttons}>
                                <div className={classes.prev} onClick={SectFiveSliderPrev}>
                                    <img src={SectFiveArrow} alt="" />
                                </div>
                                <div className={classes.next} onClick={SectFiveSliderNext}>
                                    <img src={SectFiveArrow} alt="" />
                                </div>
                            </div>
                            <div className={classes.images}>
                                <img src={SliderFood1} alt="" style={{
                                    width: SliderValues[sectFiveImageOne].width,
                                    height: SliderValues[sectFiveImageOne].height,
                                    rotate: SliderValues[sectFiveImageOne].rotation,
                                    zIndex: SliderValues[sectFiveImageOne].index,
                                    left: SliderValues[sectFiveImageOne].position,
                                    bottom: SliderValues[sectFiveImageOne].y,
                                }}/>
                                <img src={SliderFood2} alt="" style={{
                                    width: SliderValues[sectFiveImageTwo].width,
                                    height: SliderValues[sectFiveImageTwo].height,
                                    rotate: SliderValues[sectFiveImageTwo].rotation,
                                    zIndex: SliderValues[sectFiveImageTwo].index,
                                    left: SliderValues[sectFiveImageTwo].position,
                                    bottom: SliderValues[sectFiveImageTwo].y,
                                }}/>
                                <img src={SliderFood3} alt="" style={{
                                    width: SliderValues[sectFiveImageThree].width,
                                    height: SliderValues[sectFiveImageThree].height,
                                    rotate: SliderValues[sectFiveImageThree].rotation,
                                    zIndex: SliderValues[sectFiveImageThree].index,
                                    left: SliderValues[sectFiveImageThree].position,
                                    bottom: SliderValues[sectFiveImageThree].y,
                                }}/>
                                <img src={SliderFood4} alt="" style={{
                                    width: SliderValues[sectFiveImageFour].width,
                                    height: SliderValues[sectFiveImageFour].height,
                                    rotate: SliderValues[sectFiveImageFour].rotation,
                                    zIndex: SliderValues[sectFiveImageFour].index,
                                    left: SliderValues[sectFiveImageFour].position,
                                    bottom: SliderValues[sectFiveImageFour].y,
                                }}/>
                                <img src={SliderFood5} alt="" style={{
                                    width: SliderValues[sectFiveImageFive].width,
                                    height: SliderValues[sectFiveImageFive].height,
                                    rotate: SliderValues[sectFiveImageFive].rotation,
                                    zIndex: SliderValues[sectFiveImageFive].index,
                                    left: SliderValues[sectFiveImageFive].position,
                                    bottom: SliderValues[sectFiveImageFive].y,
                                }}/>
                            </div>
                        </div>
                        <div className={classes.bottom}>
                            <div className={classes.text}>
                                <p>{SliderValues[sectFiveImageThree].title}</p>
                                <p>{SliderValues[sectFiveImageThree].desc}</p>
                            </div>
                            <div className={classes.button}>
                                <button type="button">See More</button>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}