import classes from './slider.module.scss'
import { useState } from 'react'

import SectEightArrow from './img/sect_four_arrow.png'
import SectEightSliderValues from './sliderValues/slider_values.js'

import ethan from '../../../static/img/Ethan Carbonara.jpg'
import sarah from '../../../static/img/Sarah Hamilton.jpg'
import olivia from '../../../static/img/Olivia Marathon.jpg'

export default function Slider(){
    const [sectEightImageOne, setSectEightImageOne] = useState(0)
    const [sectEightImageTwo, setSectEightImageTwo] = useState(1)
    const [sectEightImageThree, setSectEightImageThree] = useState(2)

    function SectEightSliderNext(){
        if(sectEightImageOne == 2){
            setSectEightImageOne(0)
        }
        else{
            setSectEightImageOne(sectEightImageOne + 1)
        }

        if(sectEightImageTwo == 2){
            setSectEightImageTwo(0)
        }
        else{
            setSectEightImageTwo(sectEightImageTwo + 1)
        }

        if(sectEightImageThree == 2){
            setSectEightImageThree(0)
        }
        else{
            setSectEightImageThree(sectEightImageThree + 1)
        }
    }

    function SectEightSliderPrev(){
        if(sectEightImageOne == 0){
            setSectEightImageOne(2)
        }
        else{
            setSectEightImageOne(sectEightImageOne - 1)
        }

        if(sectEightImageTwo == 0){
            setSectEightImageTwo(2)
        }
        else{
            setSectEightImageTwo(sectEightImageTwo - 1)
        }

        if(sectEightImageThree == 0){
            setSectEightImageThree(2)
        }
        else{
            setSectEightImageThree(sectEightImageThree - 1)
        }
    }
    
    return(
        <>
            <section className={classes.sect_four}>
                    <div className={classes.con}>
                        <div className={classes.quote}>
                            <p>“</p>
                        </div>
                        <div className={classes.quote}>
                            <p>“</p>
                        </div>
                        <div className={classes.title}>
                            <p>{SectEightSliderValues[sectEightImageTwo].comment}</p>
                        </div>
                        <div className={classes.slider}>
                            <div className={classes.top}>
                                <div className={classes.images}>
                                    <img src={ethan} alt="" style={{
                                        width: SectEightSliderValues[sectEightImageOne].width,
                                        height: SectEightSliderValues[sectEightImageOne].height,
                                        zIndex: SectEightSliderValues[sectEightImageOne].index,
                                        left: SectEightSliderValues[sectEightImageOne].x,
                                        rotate: SectEightSliderValues[sectEightImageOne].rotation,
                                    }}/>
                                    <img src={sarah} alt="" style={{
                                        width: SectEightSliderValues[sectEightImageTwo].width,
                                        height: SectEightSliderValues[sectEightImageTwo].height,
                                        zIndex: SectEightSliderValues[sectEightImageTwo].index,
                                        left: SectEightSliderValues[sectEightImageTwo].x,
                                        rotate: SectEightSliderValues[sectEightImageTwo].rotation,
                                    }}/>
                                    <img src={olivia} alt="" style={{
                                        width: SectEightSliderValues[sectEightImageThree].width,
                                        height: SectEightSliderValues[sectEightImageThree].height,
                                        zIndex: SectEightSliderValues[sectEightImageThree].index,
                                        left: SectEightSliderValues[sectEightImageThree].x,
                                        rotate: SectEightSliderValues[sectEightImageThree].rotation,
                                    }}/>
                                </div>
                                <div className={classes.text}>
                                    <p>{SectEightSliderValues[sectEightImageTwo].name}</p>
                                </div>
                            </div>
                            <div className={classes.directions}>
                                <div onClick={SectEightSliderPrev} >
                                    <img src={SectEightArrow} alt=""/>
                                </div>
                                <div onClick={SectEightSliderNext} >
                                    <img src={SectEightArrow} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}