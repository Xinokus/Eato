import classes from './accountPage.module.scss'
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";

export default function AccountPage(){
    return(
        <>
            <Header color={'yellow'} title_top={'Your Account'}/>
            <main>
                <section className={classes.sect_one}>
                    <div className={classes.con}>
                        <p>Username: </p>
                        <p>Email: </p>
                        <p>Role: </p>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}