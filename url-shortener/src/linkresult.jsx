import React,{useState} from 'react'

export default function ShortUrlCont(props) {
  const[button,setButton] = useState("Copy");
  const[isCopied,setIsCopied] = useState(false);

  const copyShortUrl = ()=>{
    try{
      navigator.clipboard.writeText(props.shortUrl);
      setButton('Copied!');
      setIsCopied(true);
    }
    catch(error){
      console.error('Error copying to clipboard:', error);
    }
  }

  const copied = isCopied? 'copy-btn-copied':'';

  return (
    <>
     <div className='url_display'>
      <div className="longUrlCont">
        <p className="longUrl">{props.longUrl}</p>
      </div>
      <div className="right">
        <p className="shortUrl">3334dfgvvvvvvvvvvvubbby</p>
        <button onClick={copyShortUrl} className={`copy-btn ${copied}`}>{button}</button>
      </div>
    </div>
    </>
   
  )
}