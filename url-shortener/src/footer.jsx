import facebook from '/icon-facebook.svg';
import twitter from '/icon-twitter.svg';
import pinterest from '/icon-pinterest.svg';
import insta from '/icon-instagram.svg';

function Footer(){
    return(
        <footer>
            <h1>Shortly</h1>
            <div>
                <h3>Features</h3>
                <p>Link Shortening</p>
                <p>Branded Links</p>
                <p>Analytics</p>
            </div>
            <div>
                <h3>Resources</h3>
                <p>Blog</p>
                <p>Developers</p>
                <p>Support</p>
            </div>
            <div>
                <h3>Company</h3>
                <p>About</p>
                <p>Our Team</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>
            <div className="icons">
            <div><img src={facebook}/></div>
            <div><img src={twitter}/></div>
            <div><img src={pinterest}/></div>
            <div><img src={insta}/></div>
            </div>
        </footer>
    )
}
export default Footer;