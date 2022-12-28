import React, { useState } from 'react'
import './carousel.css'
const data=[
    {url: 'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=740&t=st=1672232078~exp=1672232678~hmac=b361c01c3322bdb85058c31ac4d7a8e51ed7ffa4d43438083315fec1ac7f528b'},
    {url: 'https://img.freepik.com/free-photo/beautiful-curly-female-freelancer-with-cute-manicure-using-laptop-smiling-indoor-portrait-blonde-secretary-sitting-beside-african-coworker-blue-shirt_197531-3713.jpg?w=740&t=st=1672232162~exp=1672232762~hmac=378b862ef166eeeecfca40f7d9f627a60d8ea7f908b092cac7feaf11c493e316'},
    {url: 'https://img.freepik.com/free-photo/inspired-african-lady-dancing-with-eyes-closed-indoor-portrait-relaxed-black-girl-isolated_197531-10133.jpg?w=740&t=st=1672232178~exp=1672232778~hmac=d329278708e091fff75be030977ace11c306d17dd63dfb21143d6888ff7c6d62'},
    {url: 'https://img.freepik.com/free-photo/surprised-dark-haired-girl-posing-with-phone-well-dressed-young-lady-beret-expressing-amazement_197531-20410.jpg?w=740&t=st=1672232193~exp=1672232793~hmac=564fb1d983fcbf5dd5585575a9f7aaaf962ea881d47d1933836caae5e08c7d04'},
]

export default function Carousel() {
  const [urlIndex,setUrlIndex]=useState(0)

  const nextSlide=()=>{
    if (urlIndex<data.length-1)
    {
      setUrlIndex(urlIndex+1);
    }
    else if(urlIndex===data.length-1)
    {
      setUrlIndex(0);
    }
    console.log('data[urlIndex] Next',data[urlIndex],urlIndex,data)
  }
  const prevSlide=()=>{
    if (urlIndex<=data.length-1 && urlIndex>0)
    {
      setUrlIndex(urlIndex-1);
    }
    else if(urlIndex<=0)
    {
      setUrlIndex(data.length-1);
    }
    console.log('data[urlIndex] prev',data[urlIndex],data[urlIndex],urlIndex,data)
  }

  const dotHandler=(i)=>{
    setUrlIndex(i);
  }
  return (
    <>
    <div className="conatiner">

      <div className="parentConatainer">
       {urlIndex===0?null:<div className="sliderButtonPrev" onClick={prevSlide}>
          <span> &lt;</span>
        </div>} 
        <div className="slider">
          {data.length && 
              <img className='slides' src={data[urlIndex]?.url} alt={`item${urlIndex}`} />
          }
        </div>
        {urlIndex===data.length-1?null:<div className="sliderButtonNext" onClick={ nextSlide}>
        <span>&gt;</span>
        </div>}
      </div>
        <div className="dots">
          {data&& data.map((_,i)=>{
            return(

              <span className={urlIndex===i?'dotActive':null } onClick={()=>dotHandler(i)}>.</span>
            )
          })}
         
        </div>
    </div>
    </>
    
  )
}
