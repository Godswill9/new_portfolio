import React, { useEffect, useRef, useState } from 'react'
import Header from './header'
import "./stylings/home.css"
import gsap, {Elastic} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {Controller, Scene} from "react-scrollmagic"
// import { Timeline } from 'gsap/gsap-core'

export default function Home() {
    gsap.registerPlugin(ScrollTrigger)
    const [popup, setPopup]=useState("false")
    const [numState, setNumState]=useState(0)
    const [butDisplay, setButDisplay]=useState("able")
    const clients=useRef()
// useEffect(()=>{
//     let val=110
//     let counter=0
//     let arr=clients.current.childNodes
//     setInterval(()=>{
//         counter++
//         if(counter===arr.length) counter=0
//         let newOutput=val*counter
//         if(clients===undefined) return;
//         else{
//         arr.forEach((item, index) => {
//         item.style.transform=`translateX(-${newOutput}%)`
//         });
//         }
//     }, 4000)
//       },[clients])

    const styles=[
        {display:"none"},
        {display:"flex"},
        { opacity:".7"}
    ]
    const allMyImages=[
        "images/personBlack.png",
        "images/upwork.png",
        "images/meOnGlasses.png",
    ]
    const secondImages=[
        "images/BlackAndWhiteLines.png",
        "images/meStanding-removebg-preview.png",
        "images/primaryColorsCurve-removebg-preview.png",
    ]
//  var counter=0
    const handleRight=()=>{
       numState===testArr.length-1?setButDisplay("disable"):setNumState(numState+1)
       console.log(numState)
       console.log(butDisplay)
    }
    const handleLeft=()=>{
        numState===0?setButDisplay("able"):setNumState(numState-1)
       console.log(numState)
       console.log(butDisplay)
    }

    const handlePopup=()=>{
        popup==="true"? setPopup("false"):setPopup("true")
        // console.log(popup)
    }
    const closePopup=()=>{
        setPopup("false")
        console.log(popup)
    }
    // const scene=new ScrollMagic.controller();

    // useEffect(()=>{
    //  gsap.fromTo('.intro1', {y:0}, {y:-2200,ease:"slow",duration:.5,delay:6} )
    //  gsap.fromTo('.intro2', {y:0}, {y:-2200,duration:.5,delay:6.5})
    //  gsap.fromTo('.intro3', {y:0}, {y:-2200,duration:.5,delay:6.9} )

    // // //  intro1_texts
    //  gsap.fromTo('.innerA', {height:0}, {height:60,duration:1} )
    //  gsap.fromTo('.innerB', {height:0}, {height:60,duration:1,delay:2} )
    //  gsap.fromTo('.innerC', {height:0}, {height:60,duration:1,delay:3} )

    // //  //heroText
    //  gsap.fromTo('.textContent', {opacity:0}, {opacity:1,ease:"slow",duration:2,delay:8} )
    //  gsap.fromTo('.firstImage', {y:500}, {y:0,ease:"slow",duration:1,delay:8.5} )

    //  //scrollTrigger testing on second page
    //  gsap.fromTo("#meStanding",{ opacity:0, y:100,},{opacity:1,y:0,duration:1,delay:.5, scrollTrigger:{ trigger:".aboutMe"}, stagger:true})
    // //  gsap.fromTo(".myDetail",{ opacity:0, y:100,},{opacity:1,y:0,width:"", duration:1.6,delay:.7, scrollTrigger:{ trigger:".aboutMe"}})
    //  gsap.fromTo(".myLinks",{ opacity:0},{opacity:1,duration:2.3,delay:2, scrollTrigger:{ trigger:".aboutMe"}})

    // },[])
  return (
    <div>
        {/* introductory section */}
        {/* <div className='intro3'></div>
        <div className='intro2'></div>
        <div className='intro1'>
                    <div className='inner'>
                        <span className='innerA'>Creating unique experience</span>
                        <span className='innerB'>Problem solving</span>
                        <span className='innerC'>Producing positive results</span>
                    </div>
                </div> */}
                
                {/* introductory section */}
        <Header popup={popup} setPopup={setPopup}/>
        <div className='container'>
            <div className='innerSection'>
                <main className='heroSection'>
                <img className='firstImage' src='images/personBlack.png'></img>
                    <div className='wrapper'></div>
                    <div className='textContent'>
                        <h2 className='name'>Hycinth God'swill</h2>
                        <span className='description'>I am a data analyst and a software developer👨‍💻</span>
                        <button>Download resume</button>
                    </div>
                </main>
                {/* <Controller>
                    <Scene duration={3000} triggerHook={0} pin={{pushFollowers:true}}> */}
                    <div className='aboutMe'>
                    <h1>About me</h1>
                    <div className='inner'>
                    <img id='meStanding' src='images\meStanding-removebg-preview.png'></img>
                    {/* <img className='secon' src='images\dots1-removebg-preview.png'></img> */}
                    <div className='content'>
                        <div className='myDetail'>
                        I always wanted to be a great writer, like Victor Hugo who wrote "Les Miserable", or like 
                        Roman Roland who wrote "John Christopher". They have influenced millions of people through their books. I also wanted to be a great psychologist, like William James or Sigmund Freud, who could read people’s mind.
                        Of course, I am nowhere close to these people, yet. I am just someone who does some teaching, some research, and some writing. But my dream is still alive.

                        This is a brief introduction of myself. If you are interested in
                        knowing more, read my articles or take a look at my pictures. Do not expect too much, and keep your sense of humor
                        </div>
                        <div className='myLinks'>
                            <a href='#'><img src='images\facebook.png'></img></a>
                            <a href='#'><img src='images\github.png'></img></a>
                            <a href='#'><img src='images\upwork.png'></img></a>
                            <a href='#'><img src='images\linkedin.png'></img></a>
                        </div>
                    </div>
                    </div>
                </div>
                    {/* </Scene>
                </Controller> */}
                
                <div className='myWorks'>
                    <h1>My Works</h1>
                    <div className='wrapper_2'>
                        {
                            butDisplay!=="disable"? 
                            <button className="left" style={styles[2]} disabled={true} onClick={handleLeft}>left</button>:
                            <button className="left" onClick={handleLeft}>left</button>
                        }
                   <div className='works'>
                    <div className='visual'>
                            <div className='innerVisual'>
                             <img src={`${testArr[numState].img1}`}></img>
                            </div>
                            <div className='squareOuter'>
                            <div className='square'>
                            <button>Live preview</button>
                         <button>Visit site</button>
                         <button className='viewCode'>View code</button>
                            </div>
                            </div>
                            <div className='innerVisual2'>
                             <img src={`${testArr[numState].img2}`}></img>
                            </div>
                        </div>
                      <div className="details">
                        <div className='projectExplanation'>
                            <h1>Description</h1>
                            <div className='note'>
                            {`${testArr[numState].note}`}
                            </div>
                        </div>
                        <div className='toolsUsed'>
                            <h1>Tools used</h1>
                            <div className='tools'>
                            {testArr[numState].tools.map((tool, i)=>{
                                return(
                                <div className='tool'>{tool}</div>
                                )
                            })}
                            </div>
                        </div>
                    </div>
                    </div>
                    {
                            butDisplay==="disable"? 
                            <button className="right" style={styles[2]} disabled={true} onClick={handleRight}>Right</button>:
                            <button className="right" onClick={handleRight}>Right</button>
                        }
                   <div className="flexButtons">
                   {
                            butDisplay!=="disable"? 
                            <button className="left2" style={styles[2]} disabled={true} onClick={handleLeft}>left</button>:
                            <button className="left2" onClick={handleLeft}>left</button>
                        }
                    {
                            butDisplay==="disable"? 
                            <button className="right2" style={styles[2]} disabled={true} onClick={handleRight}>Right</button>:
                            <button className="right2" onClick={handleRight}>Right</button>
                        }
                   </div>
                    </div>
                </div>
                <div className='mySkills'>
                    <h1 className='header'>My Skills</h1>
                    <div className='inner'>
                       <div className='devSkills'>
                         <h1>Developer👨‍💻 skills</h1>
                         <div className='skills'>
                            <ul>
                                <li>
                                    <div className='dev_skills_indiv'>
                                        <span className='skillName'>REACTJS</span>
                                        <div className='skill_bar' id='good'>
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='dev_skills_indiv'>
                                        <span className='skillName'>NEXTJS</span>
                                        <div className='skill_bar' id='average'>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='dev_skills_indiv'>
                                        <span className='skillName'>REDUX</span>
                                        <div className='skill_bar' id='fair'>
                                            <span>40%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='dev_skills_indiv'>
                                        <span className='skillName'>NodeJs</span>
                                        <div className='skill_bar' id='fair'>
                                            <span>40%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='dev_skills_indiv'>
                                        <span className='skillName'>ExpressJs</span>
                                        <div className='skill_bar' id='average'>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='dev_skills_indiv'>
                                        <span className='skillName'>MySql</span>
                                        <div className='skill_bar' id='good'>
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='dev_skills_indiv'>
                                        <span className='skillName'>MongoDb</span>
                                        <div className='skill_bar' id='good'>
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                         </div>
                       </div>
                       <div className='dataSkills'>
                        <h1>Data skills</h1>
                        <div className='inner_2'>
                            <div className='values'>
                            <span>Data Analysis = <span className='indicator'>DA</span></span>
                                <span>Data Engineering = <span className='indicator'>DE</span></span>
                                <span>Data Scraping = <span className='indicator'>DS</span></span>
                                <span>Python = <span className='indicator'>Py</span></span>
                                <span>R = <span className='indicator'>R</span></span>
                                <span>Sql = <span className='indicator'>SQL</span></span>
                                <span>Tableau = <span className='indicator'>TA</span></span>
                            </div>
                            <div className='x_axis'>
                            </div>
                            <div className='y_axis'>
                               <span>100%</span>
                               <span>75%</span>
                               <span>50%</span>
                               <span>25%</span>
                            </div>
                            <ul>
                                <li>
                                    <div className='data_skills_indiv'>
                                        {/* <span className='skillName'>Python</span> */}
                                        <div className='skill_bar' id='one'>
                                            <span></span>
                                        </div> 
                                        <span>DA</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='data_skills_indiv'>
                                        {/* <span className='skillName'>R</span> */}
                                        <div className='skill_bar' id='two'>
                                            <span></span>
                                        </div>
                                        <span>DS</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='data_skills_indiv'>
                                        {/* <span className='skillName'>Data Engineering</span> */}
                                        <div className='skill_bar' id='three'>
                                            <span></span>
                                        </div>
                                        <span>DE</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='data_skills_indiv'>
                                        {/* <span className='skillName'>Spread sheets</span> */}
                                        <div className='skill_bar' id='four'>
                                            <span></span>
                                        </div>
                                        <span>Py</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='data_skills_indiv'>
                                        {/* <span className='skillName'>Spread sheets</span> */}
                                        <div className='skill_bar' id='four'>
                                            <span></span>
                                        </div>
                                        <span>R</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='data_skills_indiv'>
                                        {/* <span className='skillName'>Spread sheets</span> */}
                                        <div className='skill_bar' id='one'>
                                            <span></span>
                                        </div>
                                        <span>SQL</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='data_skills_indiv'>
                                        {/* <span className='skillName'>Spread sheets</span> */}
                                        <div className='skill_bar' id='four'>
                                            <span></span>
                                        </div>
                                        <span>TA</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                       </div>
                       {/* <div className='dataSkills'></div> */}
                    </div>
                </div>
                <div className='testimonials'>
                {/* <div className='header'>
                    <h1>Services</h1>
                </div> */}
                    <div className='inner'>
                        <section>
                            <div className='first'>
                            <h1 className='header'>Testimonials</h1>
                                <div className='firstInner'>
                                <h1>All testimonials</h1>
                                <div className='testimonies' ref={clients}>
                                    <div className='val'>
                                        <img src='images\personColoured.png'></img>
                                        <div className='name'>Joel</div>
                                        <div className='content'>
                                        I am a person who is positive about every aspect of life. There are many 
                                        things I like to do, to see, and to experience.
                                        </div>
                                    </div>
                                    <div className='val'>
                                        <img src='images/meOnGlasses.png'></img>
                                        <div className='name'>Grace</div>
                                        <div className='content'>
                                        I am a person who is positive about every aspect of life. There are many 
                                        things I like to do, to see, and to experience.
                                        </div>
                                    </div>
                                    <div className='val'>
                                        <img src='images/meStanding.png'></img>
                                        <div className='name'>Harvery</div>
                                        <div className='content'>
                                        I am a person who is positive about every aspect of life. There are many 
                                        things I like to do, to see, and to experience.
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className='control'>
                                    {/* <button className='left' onClick={back}>left</button>
                                    <button className='right' onClick={forward}>right</button> */}
                                </div>
                            </div>
                            <div className='line'></div>
                            <div className='second'>
                            <h1 className='header2'>Services</h1>
                            <div className="secondInner">
                            <h1>Book our services</h1>
                                <div className='services'>
                                    <div className='webDev'>
                                        <img src='images\primaryColorsCurve-removebg-preview.png'></img>
                                        <span>Web development</span>
                                    </div>
                                    <div className='mobileDev'>
                                        <img src='images\orangeWhitecurve.jpeg'></img>
                                        <span>Mobile app development</span>
                                    </div>
                                    <div className='dataAnalytics'>
                                        <img src='images\personBlack.png'></img>
                                        <span>Data analytics</span>
                                    </div>
                                    <button onClick={handlePopup}>Book now!</button>
                                </div>
                            </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* form section */}
                <div className="formSection" style={popup==="false"? styles[0]:styles[1]}>
                {/* <div className='wrapper3'></div> */}
                    <div className='firstInner'>
                    <div className='wrapper3' onClick={closePopup}></div>
                    <div className='others'>
                    <div className="inner">
                    <img className='backImg' src='images\personColoured.png'></img>
                        <div className="formCont">
                            <div className='headCover'>
                            <div className='header'>
                            <img src='images\personColoured.png'></img>
                            <h1>Fill in the order form</h1>
                            </div>
                            <span onClick={closePopup} className='closeIcon'>Cl</span>
                            </div>
                            <form action='' method=''>
                              <input type="text" placeholder='Enter your name'></input>
                              <input type="email" placeholder='Enter your email'></input>
                              <select>
                                <option value="website">Website Development</option>
                                <option value="apps">Mobile apps development</option>
                                <option value="Data">Data Analytics</option>
                              </select>
                              <textarea placeholder={`Hey Devout enterprise!, I would like your ${"data analytics"} services`}></textarea>
                              <button>Submit</button>
                            </form>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                {/* copyright section */}
                <div className='copyrightSection'>
                    <div className='inner'>
                        <div className='top'>
                            <div className='first'>
                                <h1>About Devout</h1>
                                <div className='list'>
                                    <span>Meet the team</span>
                                    <span>What's new</span>
                                    <span>Advertising</span>
                                    <span>Visit our farms</span>
                                </div>
                            </div>
                            <div className='second'>
                                <h1>Community</h1>
                                <div className='list'>
                                    <span>Trust & safety</span>
                                    <span>Transparency</span>
                                    <span>About us</span>
                                </div>
                            </div>
                        </div>
                        <div className='bottom'>
                            Copyright @ 2023 DevoutDev
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}


var testArr=[
  {
    img1:"images/personBlack.png",
    img2:"images/personColoured.png",
    note:"Hey, this is my homepage, so I have to say something about my project",
    tools:["react", "node", "mySql", "Redux" ]
  },
  {
    img1:"images/meOnGlasses.png",
    img2:"images/upwork.png",
    note:"Hey, this is my project",
    tools:["react", "node", ]
  },
  {
    img1:"images/orangeWhitecurve.jpeg",
    img2:"images/meStanding-removebg-preview.png",
    note:"Hey, this is my third project",
    tools:["react", "node", "sass", "typescript", "gsap" ]
  },
  {
    img1:"images/dots3-removebg-preview.png",
    img2:"images/orangeThinCircleCurve.png",
    note:"Hey, this is my fourth project",
    tools:["react", "node", "java" ]
  },
]

var projectImages=[
    "images/personBlack.png",
    "images/upwork.png",
    "images/meOnGlasses.png",
]