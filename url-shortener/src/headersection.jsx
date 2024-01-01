import './App.css';
import work from '/illustration-working.svg';

function HeaderSection(){
    return(
<header>
    <nav>
    <div>
      <h5>Shortly</h5>
      <p>Features</p>
      <p>Pricing</p>
      <p>Resources</p>
    </div>
    <div>
      <p>Login</p>
      <button>Sign Up</button>
    </div>
    </nav>
    <article>
      <div>
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <button>Get Started</button>
      </div>
      <img src={work} width="550"/>
    </article>
</header>
   
    )
}

export default HeaderSection;