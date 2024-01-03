import iconbrand from '/icon-brand-recognition.svg';
import icondetail from '/icon-detailed-records.svg';
import iconcustomize from '/icon-fully-customizable.svg';

function AboutSection(){
    return(
        <section className="about-section">
            <article>
            <div className="about-heading">
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web 
                    with our advanced statistics dashboard
                </p>
            </div>
            <div className="about-flex">
            <div>
                <img src={iconbrand}/>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don’t  mean a thing. Branded links help instil confidence in your content.</p>
                <span></span>
            </div>
            <div>
                <img src={icondetail}/>
                <h3>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing when and where  people engage with your content helps inform better decisions.</p>
                <span></span>
            </div>
            <div>
                <img src={iconcustomize}/>
                <h3>Fully Customizable</h3>
                <p> Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
            </div>
            </article>
        </section>
    )
}
export default AboutSection;