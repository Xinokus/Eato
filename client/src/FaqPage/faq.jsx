import Faq from "../Components/FaqSection/faq";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import Slider from "../Components/LastSlider/slider";

export default function FaqPage(){
    return(
        <>
            <Header color={'red'} title_top={'Your Questions Answered, Anytime,'} title_bot={'Anywhere—Quick & Clear!'}/>
            <Faq/>
            <Slider/>
            <Footer/>
        </>
    )
}