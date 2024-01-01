import HeaderSection from './headersection';
import FormSection from './formsection';
import './App.css';

function MainArticle(){
    return (
        <main>
          <section className='header-section'>
                <HeaderSection/>
            </section>
              <FormSection/>
        </main>
          
    )
}
export default MainArticle;