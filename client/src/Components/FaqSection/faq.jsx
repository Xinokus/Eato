import { useState } from "react"
import Circles from "../Circles/circles"
import SectSevenFaq from "./openable/faq"

import classes from './faq.module.scss'

export default function Faq(){
        const [sectSevenFaqActive, setSectSevenFaqActive] = useState(1)

    return(
        <>
            <section className={classes.faq_section}>
                                                <Circles/>
                                                <div className={classes.con}>
                                                    <div className={classes.top}>
                                                        <div className={classes.title}>
                                                            <p>Your Questions Answered, Enjoy a Seamless Experience!</p>
                                                        </div>
                                                        <div className={classes.desc}>
                                                            <p>Explore our FAQs to find answers to common inquiries, ensuring a smooth and enjoyable dining experience for all our guests</p>
                                                            <button type="button">See More</button>
                                                        </div>
                                                    </div>
                                                    <div className={classes.bot}>
                                                        <div className={classes.faq}>
                                                            <SectSevenFaq
                                                                title={'What are your restaurant’s hours of operation?'}
                                                                answer={'Our restaurant is open Monday to Sunday from 11:00 AM to 10:00 PM.'}
                                                                active={sectSevenFaqActive == 1 ? true : false}
                                                                onClick={   ()=>setSectSevenFaqActive(1)}
                                                            />
                                                            <SectSevenFaq
                                                                title={'Do I need a reservation to dine?'}
                                                                answer={'Our restaurant is open Monday to Sunday from 11:00 AM to 10:00 PM.'}
                                                                active={sectSevenFaqActive == 2 ? true : false}
                                                                onClick={()=>setSectSevenFaqActive(2)}
                                                            />
                                                            <SectSevenFaq
                                                                title={'Can I modify my reservation after booking?'}
                                                                answer={'Our restaurant is open Monday to Sunday from 11:00 AM to 10:00 PM.'}
                                                                active={sectSevenFaqActive == 3 ? true : false}
                                                                onClick={()=>setSectSevenFaqActive(3)}
                                                            />
                                                            <SectSevenFaq
                                                                title={'Do you offer takeout or delivery services?'}
                                                                answer={'Our restaurant is open Monday to Sunday from 11:00 AM to 10:00 PM.'}
                                                                active={sectSevenFaqActive == 4 ? true : false}
                                                                onClick={()=>setSectSevenFaqActive(4)}
                                                            />
                                                            <SectSevenFaq
                                                                title={'Are there vegetarian or gluten-free available?'}
                                                                answer={'Our restaurant is open Monday to Sunday from 11:00 AM to 10:00 PM.'}
                                                                active={sectSevenFaqActive == 5 ? true : false}
                                                                onClick={()=>setSectSevenFaqActive(5)}
                                                            />
                                                            <SectSevenFaq
                                                                title={'Can I host a private event at your restaurant?'}
                                                                answer={'Our restaurant is open Monday to Sunday from 11:00 AM to 10:00 PM.'}
                                                                active={sectSevenFaqActive == 6 ? true : false}
                                                                onClick={()=>setSectSevenFaqActive(6)}
                                                            />
                                                            <SectSevenFaq
                                                                title={'Do you accommodate requests for celebrations?'}
                                                                answer={'Our restaurant is open Monday to Sunday from 11:00 AM to 10:00 PM.'}
                                                                active={sectSevenFaqActive == 7 ? true : false}
                                                                onClick={()=>setSectSevenFaqActive(7)}
                                                            />
                                                        </div>
                                                        <div className={classes.image}>
                                                            <img src="" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
        </>
    )
}