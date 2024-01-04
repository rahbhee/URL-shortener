import './App.css';
import work from '/illustration-working.svg';
import NavBar from './navbar'

function HeaderSection(){

    return(
<header>
  <NavBar/>
    <article>
      <div>
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <button>Get Started</button>
      </div>
      <img src={work}/>
    </article>
</header>
    )
}

export default HeaderSection;