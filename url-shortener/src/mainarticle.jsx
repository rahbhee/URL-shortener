import HeaderSection from './headersection';
import FormSection from './formsection';
import AboutSection from './aboutsection';
import './App.css';

function MainArticle(){
    return (
        <>
        <main>
            <HeaderSection/>
            <FormSection/>
            <AboutSection/>
        </main>
         </>
    )
}
export default MainArticle;