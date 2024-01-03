import HeaderSection from './headersection';
import FormSection from './formsection';
import AboutSection from './aboutsection';
import LinkSection from './linksection';
import Footer from './footer';
import './App.css';

function MainArticle(){
    return (
        <>
        <main>
            <HeaderSection/>
            <FormSection/>
            <AboutSection/>
        </main>
            <LinkSection/>
            <Footer/>
         </>
    )
}
export default MainArticle;