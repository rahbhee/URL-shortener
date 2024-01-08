import React from 'react';
import createShortUrl from './Api';
import {useState} from 'react';

export default function UrlShortener({addUrlData}) {
    const [inputUrl, setInputUrl] = useState('');
    const [alert, setAlert] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);
  
    const handleInputChange = (event)=>{
      setInputUrl(event.target.value);
      setAlert('');
    }
  
    const handleShortenClick = ()=>{
      if(inputUrl){
        createShortUrl(inputUrl)
        .then((shortenLink)=>{
          addUrlData(inputUrl,shortenLink);
          setInputUrl('');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        setIsEmpty(false);
      }
      else{
        setAlert("Please add a link");
        setIsEmpty(true);
      }
    }

    return(
        <section className="form-section"> 
        <div className="inputCont">
        <input type='url'
        value={inputUrl}
        id='urlInput' 
        className={isEmpty? 'error-input' : ''}
        placeholder='Shorten a link here...'
        onChange={handleInputChange}></input>
        <button className="form-section-button" onClick={handleShortenClick}>Shorten It!</button>
        </div>
        <p className={`alert ${inputUrl? '' : 'show-alert'}`}>{alert}</p>
        </section>
       
       
    )
    
}