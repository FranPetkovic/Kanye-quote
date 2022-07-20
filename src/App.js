import React, { useState, useEffect } from 'react'
import axios from 'axios'
import css from './app.css'


export default function App() {

const [mudrost, setMudrost]= useState("The thought police want to suppress freedom of thought")
const [brojac, setBrojac]= useState(1800)
const [slika, setSlika]= useState("https://source.unsplash.com/1600x850/?Kanye")
const [link, setlink]= useState("https://twitter.com/intent/tweet?text=fran")


useEffect(() => {
    axios.request(`https://api.kanye.rest/text`).then(function (response) {

    setMudrost(response.data)
    setSlika("https://source.unsplash.com/"+brojac+"x850/?Kanye")

    setlink("https://twitter.com/intent/tweet?text="+response.data.replaceAll(" ","%20"))
  }).catch(function (error) {
    console.error("error");
  });
},[brojac]);


  return (
    <div className='div1'>
      <div className='pozadina' style={{background:'url('+slika+')'}}>
      </div>
      <div className='div2'>
        <h1>{mudrost}</h1>
        <h2>~ Kanye West</h2>
        <button onClick={()=>{setBrojac(brojac+1)}}>New quote</button>
      </div>
      <a className='GumbTwt' href={link}><i className="twitter icon big"></i></a>
    </div>
  )
}
