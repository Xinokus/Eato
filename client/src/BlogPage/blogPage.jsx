import Faq from '../Components/FaqSection/faq'
import Footer from '../Components/Footer/footer'
import Header from '../Components/Header/header'
import Slider from '../Components/LastSlider/slider'
import classes from './blogPage.module.scss'

import red_highlight from './img/red_highlight.png'
import glass from './img/glass.png'
import SectSixTrend from './sect_six/trend'

export default function BlogPage(){
    return(
        <>
            <Header color={'yellow'} title_top={'Savor Stories, Discover Flavors,'} title_bot={'Join Our Journey'}/>
            <main>
            <section className={classes.sect_one}>
                    <div className={classes.highlight}>
                        <img src={red_highlight} alt="" />
                    </div>
                    <div className={classes.con}>
                        <div className={classes.top}>
                            <div className={classes.title}>
                                <p>Delicious Insights, Culinary Tips, and Restaurant News</p>
                            </div>
                            <div className={classes.desc}>
                                <p>Explore our blog for mouthwatering recipes, expert tips, and the latest updates from our restaurant to enhance your dining experience</p>
                            </div>
                            <div className={classes.search}>
                                <img src={glass} alt="" />
                                <input type="text" name="" id="" placeholder='What do you want to know?'/>
                            </div>
                        </div>
                        <div className={classes.bot}>
                            <div className={classes.left}>
                                <div className={classes.image}>
                                    <img src="" alt="" />
                                </div>
                                <div className={classes.info}>
                                    <div className={classes.tags}>
                                        <div className={classes.trend_type}>
                                            <p>Food Trends</p>
                                        </div>
                                        <div className={classes.time_to_read}>
                                            <p>6 Min Read</p>
                                        </div>
                                    </div>
                                    <div className={classes.title}>
                                        <p>The rise of plant-based dining in restaurants reflects health trends and environmental sustainability awareness among consumers</p>
                                    </div>
                                    <div className={classes.desc}>
                                        <p>In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.right}>
                                <SectSixTrend
                                    title={'In recent years, there has been a significant shift towards plant-based dining.'}
                                    desc={'In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.'}
                                    trend={'Food Trends'}
                                    time={'6 Min Read'}
                                />
                                <SectSixTrend
                                    title={'In recent years, there has been a significant shift towards plant-based dining.'}
                                    desc={'In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.'}
                                    trend={'Food Trends'}
                                    time={'6 Min Read'}
                                />
                                <SectSixTrend
                                    title={'In recent years, there has been a significant shift towards plant-based dining.'}
                                    desc={'In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.'}
                                    trend={'Food Trends'}
                                    time={'6 Min Read'}
                                />
                                <SectSixTrend
                                    title={'In recent years, there has been a significant shift towards plant-based dining.'}
                                    desc={'In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.'}
                                    trend={'Food Trends'}
                                    time={'6 Min Read'}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classes.sect_two}>
                    <div className={classes.con}>
                        <div className={classes.left}>
                            <div className={classes.title}>
                                <p>Exploring seasonal menus enhances dining experiences by featuring fresh ingredients and unique flavor profiles</p>
                                <p>Seasonal menus are an exciting way to elevate the dining experience by showcasing the freshest ingredients available at different times of the year. By focusing on seasonal produce, restaurants can create unique and flavorful dishes that highlight the natural flavors of each ingredient. This approach not only supports local farmers and sustainability but also allows chefs to experiment with diverse flavors and textures. Diners enjoy a constantly evolving menu that reflects the changing seasons, making each visit a new experience. Embracing seasonal ingredients encourages creativity in the kitchen, resulting in innovative dishes that keep customers coming back for more</p>
                            </div>
                            <div className={classes.tags}>
                                <p>Food Trends</p>
                                <p>6 Min Read</p>
                            </div>
                        </div>
                        <div className={classes.right}>
                            <img src="" alt="" />
                        </div>
                    </div>
                </section>
                <section className={classes.sect_three}>
                    <div className={classes.con}>
                        <div className={classes.top}>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <div className={classes.bot}>
                            <div className={classes.card}>
                                <div className={classes.image}>
                                    <img src="" alt="" />
                                </div>
                                <div className={classes.title}>
                                    <p>In recent years, there has been a significant shift towards plant</p>
                                    <p>In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.</p>
                                </div>
                                <div className={classes.tags}>
                                    <p>Food Trends</p>
                                    <p>6 Min Read</p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.image}>
                                    <img src="" alt="" />
                                </div>
                                <div className={classes.title}>
                                    <p>In recent years, there has been a significant shift towards plant</p>
                                    <p>In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.</p>
                                </div>
                                <div className={classes.tags}>
                                    <p>Food Trends</p>
                                    <p>6 Min Read</p>
                                </div>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.image}>
                                    <img src="" alt="" />
                                </div>
                                <div className={classes.title}>
                                    <p>In recent years, there has been a significant shift towards plant</p>
                                    <p>In recent years, there has been a significant shift towards plant-based dining, driven by health-conscious consumers and growing awareness of environmental sustainability.</p>
                                </div>
                                <div className={classes.tags}>
                                    <p>Food Trends</p>
                                    <p>6 Min Read</p>
                                </div>
                            </div>
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