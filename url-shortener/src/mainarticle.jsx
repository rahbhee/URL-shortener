import HeaderSection from './headersection';
import AboutSection from './aboutsection';
import LinkSection from './linksection';
import Footer from './footer';
import './App.css';
import UrlShortener from './formsection';
import ShortUrlCont from './linkresult';
import React, { useState } from 'react';

function MainArticle(){
    const[urlData,setUrlData] = useState([]);
    const addUrlData = (url,shortUrl)=>{
        setUrlData([...urlData, {url,shortUrl}]);
      }
    
        return (
        <>
        <main>
            <HeaderSection/>
            <UrlShortener addUrlData={addUrlData}/>
            {urlData.map((data,index)=>
            <ShortUrlCont 
              key={index}
              shortUrl={data.shortUrl} 
              longUrl={data.url}
            />
          )}
            <AboutSection/>
            <LinkSection/>
        </main>
            <Footer/>
         </>
    )
}
export default MainArticle;