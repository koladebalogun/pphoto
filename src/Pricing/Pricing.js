import React, { useEffect, useState } from "react";
import Navbar from '../Home/Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";
import arrow from '../images/arrow.svg';

import photo from '../Pricing/pricingimages/hero.jpg'
import Footer from "../footer/Footer";
// import dune from '../Pricing/pricingimages/dune.jpg';


const Pricing = () => {
    const time = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    const[card ,setCard ] = useState(true)

    useEffect(()=>{
        time.from('.pricing-content-header span', 1.8, {
            y:-100,
            ease: 'power4.out',
            delay:1,
            skewY:10,
            stagger:{
                amount:0.3
            }
        })
        .to('.left', 1.6,{
            height:0,
            ease: 'expo.inOut',
            stagger: 0.4
        })
        .from('.pricing-content-text', 1, {
            x:-20,
            opacity:0,
            ease: 'power3.easeOut',
            delay:0.3,
            stagger: {
                amount:0.4
            }
        })
        .to('.right', 1.6,{
            height:0,
            ease: 'expo.inOut',
            stagger: 0.4
        })

        time.to('.click', 0, {css:{display:'none'}})

        gsap.from('.price-cards-inner, .switch', 3,{
            y:40,
            opacity:0,
            ease: 'ease-in',
            scrollTrigger:{
                trigger: '.prices',
                start: '-20% 10%',
                end: 'bottom 60%',
                toggleActions: 'restart none none reverse',
            }
        })

        gsap.from('.subfooter', 3,{
            y:100,
            opacity:0,
            ease: 'ease-in',
            stagger: 0.4,
            scrollTrigger:{
                trigger: '.subfooter',
                start: '-120% 10%',
                end: 'bottom 60%',
                toggleActions: 'restart none none reverse',
            }
        })

    })

    return (  
        <div className="pricing">
            <Navbar/>
            <div className="pricing-content">
                <div className="pricing-content-inner">
                    <h1>
                        <div className="pricing-content-header">
                            <span>PRICING</span>   
                        </div>
                    </h1>
                    <div className="pricing-content-text">
                        <p>Create your story, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos.</p>
                    </div>
                </div>
                <div className="pricing-content-image">
                    <img src={photo} alt="" className='arr'/>
                </div>
                <div className="pricing-top">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
            </div>
            <div className="prices">
                <div className="toggle">
                    <label className='switch'>
                        <h4 className='monthly'>Monthly</h4>
                        <h4 className='yearly'>Yearly</h4>
                        <input type='checkbox'
                        onClick={()=> setCard(!card)}
                        />
                        <span
                        className='slider'
                        />
                    </label>
                </div>

                <div className="click"></div>
                <div className="price-card">
                    <div className="price-cards-inner">
                        {card ? <div className="card1">
                            <div className="one">
                                <h2>Basic</h2>
                                <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                                <h1>$ 19.00</h1>
                                <p className='txt'>per month</p>
                                <button className='black'>PICK A PLAN</button>
                            </div>
                            <div className="two">
                                <h2>Pro</h2>
                                <p>More advanced features available. Recommended for photography veterans and professionals.</p>
                                <h1>$ 39.00</h1>
                                <p className='txt'>per month</p>
                                <button className='white'>PICK A PLAN</button>
                            </div>
                            <div className="three">
                                <h2>Business</h2>
                                <p>Additional features available such as more detailed metrics. Recommended for business owners</p>
                                <h1>$ 99.00</h1>
                                <p className='txt'>per month</p>
                                <button className='black'>PICK A PLAN</button>
                            </div>
                        </div> : 
                        <div className="card2">
                            <div className="four">
                                <h2>Basic</h2>
                                <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                                <h1>$ 190.00</h1>
                                <p className='txt'>per year</p>
                                <button className='black'>PICK A PLAN</button>
                            </div>
                            <div className="five">
                                <h2>Pro</h2>
                                <p>More advanced features available. Recommended for photography veterans and professionals.</p>
                                <h1>$ 390.00</h1>
                                <p className='txt'>per year</p>
                                <button className='white'>PICK A PLAN</button>
                            </div>
                            <div className="six">
                                <h2>Business</h2>
                                <p>Additional features available such as more detailed metrics. Recommended for business owners</p>
                                <h1>$ 990.00</h1>
                                <p className='txt'>per year</p>
                                <button className='black'>PICK A PLAN</button>
                            </div>
                        </div> 
                        }
                    </div>     
                </div>
                    
        
            </div>
            <div className="subfooter">
                <div className="subfooter-inner">
                    <h1>
                        <div className="subfooter-line">
                            <span>WE'RE IN BETA.</span>
                        </div>
                        <div className="subfooter-line">
                            <span>GET YOUR INVITE</span>
                        </div>
                        <div className="subfooter-line">
                            <span>TODAY</span>
                        </div>
                    </h1>
                    <div className="subfooter-link">
                        <Link to='/stories'>GET AN INVITE</Link>
                        <div className="arrow-icon">
                                <img src={arrow} alt="row"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Pricing;