import Faq from '../Components/FaqSection/faq'
import Footer from '../Components/Footer/footer'
import Header from '../Components/Header/header'
import Slider from '../Components/LastSlider/slider'
import classes from './reservationPage.module.scss'

import arrow from './img/arrow.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ReservationPage(){
    const [calendarDay, setCalendarDay] = useState(1)

    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [guests, setGuests] = useState()
    const [time, setTime] = useState('8:00')
    const [date, setDate] = useState('1 February 2025')
    const [special, setSpecial] = useState(null)
    const [notes, setNotes] = useState(null)

    let day
    useEffect(()=>{
        day = document.getElementById("day").value
        setDate(day)
    })
    

    function createReservation(){
        let body = new FormData()
        body.append('fullName', fullName)
        body.append('email', email)
        body.append('guests', guests)
        body.append('time', time)
        body.append('date', date)
        body.append('special', special)
        body.append('note', notes)

        axios({
            method: "post",
            url: "http://localhost:5000/reservations/create",
            data: body,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            console.log(response);
            alert('Nicely done!')
        })
        .catch(function (response) {
            console.log(response);
            alert('error')
        });
    }

    return(
        <>
            <Header color={'yellow'} title_top={'Reserve Your Table, Savor Every'} title_bot={'Moment with Us'}/>
            <main>
                <section className={classes.sect_one}>
                    <div className={classes.con}>
                        <div className={classes.top}>
                            <p>Secure Your Spot, Indulge in <br/>
                            Culinary Delights</p>
                            <p>Make a reservation today to experience exquisite dishes, attentive service, and a welcoming atmosphere perfect for any occasion.</p>
                        </div>
                        <form onSubmit={(e)=>[e.preventDefault(), createReservation()]} className={classes.bot}>
                            <div className={classes.inputs}>
                                <div className={classes.one}>
                                    <div className={classes.input}>
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" name="name" id="name" placeholder='Enter Your Full Name' required
                                        value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                                    </div>
                                    <div className={classes.input}>
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder='Enter Your Email Address' required
                                        value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className={classes.two}>
                                    <div className={classes.input}>
                                        <label htmlFor="guests">Number of Guests</label>
                                        <input type="text" name="guests" id="guests" placeholder='Enter a Number of Guests' required
                                        value={guests} onChange={(e)=>setGuests(e.target.value)}/>
                                    </div>
                                    <div className={classes.input}>
                                        <label htmlFor="time">Time of Reservation</label>
                                        <select name="time" id="time">
                                            <option value="" onClick={()=>setTime('8:00')}>8:00 AM</option>
                                            <option value="" onClick={()=>setTime('9:00')}>9:00 AM</option>
                                            <option value="" onClick={()=>setTime('10:00')}>10:00 AM</option>
                                            <option value="" onClick={()=>setTime('11:00')}>11:00 AM</option>
                                            <option value="" onClick={()=>setTime('12:00')}>12:00 PM</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={classes.three}>
                                    <div className={classes.left}>
                                        <div className={classes.input} >
                                            <label htmlFor="day">Preferred date/time</label>
                                            <input type="text" name="day" id="day" readOnly value={calendarDay + ' February ' + 2025}/>
                                        </div>
                                        <div className={classes.calendar}>
                                            <div className={classes.month}>   
                                                <button type="button"><img src={arrow} alt="" /></button>
                                                <p>February 2025</p>
                                                <button type="button"><img src={arrow} alt="" /></button>
                                            </div>
                                            <div className={classes.day}>
                                                <div className={classes.week}>
                                                    <p>Sun</p>
                                                    <p>Mon</p>
                                                    <p>Tue</p>
                                                    <p>Wed</p>
                                                    <p>Thu</p>
                                                    <p>Fri</p>
                                                    <p>Sat</p>
                                                </div>
                                                <div className={classes.choice}>
                                                    <div className={classes.line}>
                                                        <p className={classes.inactive}>31</p>
                                                        <p className={calendarDay == 1 ? classes.active : null} onClick={()=>setCalendarDay(1)}>1</p>
                                                        <p className={calendarDay == 2 ? classes.active : null} onClick={()=>setCalendarDay(2)}>2</p>
                                                        <p className={calendarDay == 3 ? classes.active : null} onClick={()=>setCalendarDay(3)}>3</p>
                                                        <p className={calendarDay == 4 ? classes.active : null} onClick={()=>setCalendarDay(4)}>4</p>
                                                        <p className={calendarDay == 5 ? classes.active : null} onClick={()=>setCalendarDay(5)}>5</p>
                                                        <p className={calendarDay == 6 ? classes.active : null} onClick={()=>setCalendarDay(6)}>6</p>
                                                    </div>
                                                    <div className={classes.line}>
                                                        <p className={calendarDay == 7 ? classes.active : null} onClick={()=>setCalendarDay(7)}>7</p>
                                                        <p className={calendarDay == 8 ? classes.active : null} onClick={()=>setCalendarDay(8)}>8</p>
                                                        <p className={calendarDay == 9 ? classes.active : null} onClick={()=>setCalendarDay(9)}>9</p>
                                                        <p className={calendarDay == 10 ? classes.active : null} onClick={()=>setCalendarDay(10)}>10</p>
                                                        <p className={calendarDay == 11 ? classes.active : null} onClick={()=>setCalendarDay(11)}>11</p>
                                                        <p className={calendarDay == 12 ? classes.active : null} onClick={()=>setCalendarDay(12)}>12</p>
                                                        <p className={calendarDay == 13 ? classes.active : null} onClick={()=>setCalendarDay(13)}>13</p>
                                                    </div>
                                                    <div className={classes.line}>
                                                        <p className={calendarDay == 14 ? classes.active : null} onClick={()=>setCalendarDay(14)}>14</p>
                                                        <p className={calendarDay == 15 ? classes.active : null} onClick={()=>setCalendarDay(15)}>15</p>
                                                        <p className={calendarDay == 16 ? classes.active : null} onClick={()=>setCalendarDay(16)}>16</p>
                                                        <p className={calendarDay == 17 ? classes.active : null} onClick={()=>setCalendarDay(17)}>17</p>
                                                        <p className={calendarDay == 18 ? classes.active : null} onClick={()=>setCalendarDay(18)}>18</p>
                                                        <p className={calendarDay == 19 ? classes.active : null} onClick={()=>setCalendarDay(19)}>19</p>
                                                        <p className={calendarDay == 20 ? classes.active : null} onClick={()=>setCalendarDay(20)}>20</p>
                                                    </div>
                                                    <div className={classes.line}>
                                                        <p className={calendarDay == 21 ? classes.active : null} onClick={()=>setCalendarDay(21)}>21</p>
                                                        <p className={calendarDay == 22 ? classes.active : null} onClick={()=>setCalendarDay(22)}>22</p>
                                                        <p className={calendarDay == 23 ? classes.active : null} onClick={()=>setCalendarDay(23)}>23</p>
                                                        <p className={calendarDay == 24 ? classes.active : null} onClick={()=>setCalendarDay(24)}>24</p>
                                                        <p className={calendarDay == 25 ? classes.active : null} onClick={()=>setCalendarDay(25)}>25</p>
                                                        <p className={calendarDay == 26 ? classes.active : null} onClick={()=>setCalendarDay(26)}>26</p>
                                                        <p className={calendarDay == 27 ? classes.active : null} onClick={()=>setCalendarDay(27)}>27</p>
                                                    </div>
                                                    <div className={classes.line}>
                                                        <p className={calendarDay == 28 ? classes.active : null} onClick={()=>setCalendarDay(28)}>28</p>
                                                        <p className={classes.inactive}>1</p>
                                                        <p className={classes.inactive}>2</p>
                                                        <p className={classes.inactive}>3</p>
                                                        <p className={classes.inactive}>4</p>
                                                        <p className={classes.inactive}>5</p>
                                                        <p className={classes.inactive}>6</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.right}>
                                        <div className={classes.input}>
                                            <label htmlFor="requsts">Special Requests (Optional)</label>
                                            <select name="requsts" id="requsts">
                                                <option value="" onClick={()=>setSpecial(null)}>None</option>
                                                <option value="" onClick={()=>setSpecial('Dietary Restrictions')}>Dietary Restrictions</option>
                                            </select>
                                        </div>
                                        <div className={classes.textarea}>
                                            <label htmlFor="notes">Additional Notes</label>
                                            <textarea name="notes" id="notes" value={notes} onChange={(e)=>setNotes(e.target.value)}></textarea>
                                        </div>
                                        <div className={classes.check}>
                                            <input type="checkbox" name="" id="" required/>
                                            <p>I confirm my reservation and agree to the restaurant's policies.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.button}>
                                <button type="submit">Reserve Now</button>
                            </div>
                        </form>
                    </div>
                </section>
                <section className={classes.sect_two}>
                                    <div className={classes.con}>
                                        <div className={classes.left}>
                                            <div className={classes.tag}>
                                                <p>Events & Private Dining</p>
                                            </div>
                                            <div className={classes.title}>
                                                <p>Join us in celebrating life’s special moments with exceptional food and unforgettable experiences together!</p>
                                            </div>
                                            <div className={classes.desc}>
                                                <p>Whether it’s a birthday, anniversary, corporate gathering, or any special occasion, our restaurant offers the perfect setting for your event</p>
                                            </div>
                                            <div className={classes.button}>
                                                <button type="button">See More</button>
                                            </div>
                                        </div>
                                        <div className={classes.right}>
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </section>
                <Faq/>
                <Slider/>
            </main>
            <Footer/>
        </>
    )
}