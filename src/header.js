import React, { useState } from 'react'
import "./stylings/header.css"
import gsap, {Elastic} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

export default function Header({popup, setPopup}) {
// gsap inclusion here
gsap.registerPlugin(ScrollTrigger)
useEffect(()=>{
 gsap.fromTo('.headerContainer',  {y:-500}, {y:0,ease:"slow",duration:1,delay:8.5} )
 gsap.fromTo('.imgSection',  {opacity:0}, {opacity:1,ease:"slow",duration:1,delay:10})
}, [])

const [mobileNav, setMobileNav]=useState("true")
const styles=[
    {height:"0px"},
    {height:"50em"},
]


const handlePopup=()=>{
    popup==="true"? setPopup("false"):setPopup("true")
    // console.log(popup)
}


const handleMobileNav=()=>{
    mobileNav==="true"? setMobileNav("false"):setMobileNav("true")
}

  return (
    <div className='headerContainer'>
        <div className='imgSection'>
            <img src='images\personColoured.png' alt='logoImage'/>
            <div className='logoName'>DevoutDev!!</div>
            </div>
        <div className='computerView'>
            <div className='linkedList'>
                <a href='#'><span>Home</span></a>
                <a href='#'><span>About</span></a>
                <a href='#'><span>Contact us</span></a>
                <a href='#'><span>My works</span></a>
                <a href='#'><span>Footer</span></a>
            </div>
            <button className='bookMe' onClick={handlePopup}>Book me</button>
        </div>
        <i id='menuButton' class="bi bi-plus" onClick={handleMobileNav}></i>
        <div className='mobileView' style={mobileNav==="true"? styles[0]:styles[1]}>
            <div className='inner'>
            <div className='listWrapper' onClick={handleMobileNav}></div>
            <div className='linkedList'>
                <a href='#'><span>Home</span></a>
                <a href='#'><span>About</span></a>
                <a href='#'><span>Contact us</span></a>
                <a href='#'><span>My works</span></a>
                <a href='#'><span>Footer</span></a>
            </div>
            </div>
        </div>
    </div>
  )
}
