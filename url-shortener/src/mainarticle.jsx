import HeaderSection from './headersection';
import FormSection from './formsection';
import AboutSection from './aboutsection';
import LinkSection from './linksection';
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
         </>
    )
}
export default MainArticle;