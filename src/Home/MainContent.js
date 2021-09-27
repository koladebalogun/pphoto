import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// images
import picture1 from './homeimages/create.jpg';
import arrow from '../images/arrow.svg';
import picture2 from './homeimages/beautiful.jpg'
import blackarrow from '../images/blackarrow.svg';
import picture3 from './homeimages/designed.jpg';
import whitearrow from '../images/arrow.svg';
import mountain from '../Home/homeimages/mountains.jpg';
import city from '../Home/homeimages/cityscapes.jpg';
import voyage from '../Home/homeimages/voyage.jpg';
import arch from '../Home/homeimages/architecturals.jpg';
import responsive from '../Home/homeimages/responsive.svg';
import limit from '../Home/homeimages/limit.svg';
import embed from '../Home/homeimages/embed.svg';

// components
import Footer from '../footer/Footer';



const MainContent = () => {
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        gsap.to('body, .main-container', 0, {css:{visibility:'visible'}});

        tl.from('.line span', 1.8, {
            y:100,
            ease: 'power4.out',
            delay:1,
            skewY:10,
            stagger:{
                amount:0.3
            },
        })
        .to('.overlayleft', 1.6,{
            height:0,
            ease: 'expo.inOut',
            stagger: 0.4
        })
        .from('.first-content-text', 1, {
            x:-20,
            opacity:0,
            ease: 'power3.easeOut',
            delay:0.3,
            stagger: {
                amount:0.4
            }
        })
        .from('.btn-row',1,{
            x:-20,
            opacity:0,
            ease: 'power3.easeOut',
            delay:0.3,
        })
        .to('.overlayright', 1.6,{
            width:0,
            ease: 'expo.inOut',
            stagger: 0.4
        })
        .from('.first-content-image', 1.4,{
            scale:1,
            ease:'power2.easeInOut',
        })


        
        gsap.from('.inner span', 3, {
            y:100,
            ease: 'power4.out',
            delay:1,
            skewY:10,
            stagger:{
                amount:0.3
            },
            scrollTrigger:{
                trigger: '.inner-contents',
                start:'-50% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })
        
        gsap.to('.overlay-middle-right', 1.6,{
            height:0,
            ease: 'expo.inOut',
            stagger: 0.4,
            delay:3.5,
            scrollTrigger:{
                trigger: '.inner-contents',
                start:'-50% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })

        gsap.from('.second-text', 1, {
            x:20,
            opacity:0,
            ease: 'power3.easeOut',
            delay:5.5,
            stagger: {
                amount:0.4
            },
            scrollTrigger:{
                trigger: '.inner-contents',
                start:'-50% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })

        gsap.from('.invite-link',1,{
            x:20,
            opacity:0,
            ease: 'power3.easeOut',
            delay:6,
            scrollTrigger:{
                trigger: '.inner-contents',
                start:'-50% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })

        gsap.to('.overlay-middle-left', 1.6,{
            width:0,
            ease: 'expo.inOut',
            stagger: 0.4,
            delay: 7.5,
            scrollTrigger:{
                trigger: '.inner-contents',
                start:'-50% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })

        gsap.from('.header-line span', 1.8, {
            y:100,
            ease: 'power4.out',
            delay:1,
            skewY:10,
            stagger:{
                amount:0.3
            },
            scrollTrigger:{
                trigger: '.third-inner-content',
                start:'-50% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })

        gsap.to('.overlay-bottom-left', 1.6,{
            height:0,
            ease: 'expo.inOut',
            stagger: 0.4,
            delay:3.5,
            scrollTrigger:{
                trigger: '.third-inner-content',
                start:'-50% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })

        gsap.from('.bottom-text', 1, {
            x:-20,
            opacity:0,
            ease: 'power3.easeOut',
            delay:5.5,
            stagger: {
                amount:0.4
            },
            scrollTrigger:{
                trigger: '.third-inner-content',
                start:'-50% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'

            }
        })

        gsap.from('.third-link',1,{
            x:20,
            opacity:0,
            ease: 'power3.easeOut',
            delay:6,
            scrollTrigger:{
                trigger: '.third-inner-content',
                start:'-50% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })

        gsap.to('.overlay-bottom-right', 1.6,{
            width:0,
            ease: 'expo.inOut',
            stagger: 0.4,
            delay:7.5,
            scrollTrigger:{
                trigger: '.third-inner-content',
                start:'-50% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })
        
        gsap.to('.overlay1, .overlay2, .overlay3, .overlay4', 1.6, {
            height:0,
            ease: 'expo.Out',
            stagger:0.4,
            delay:2,
            scrollTrigger:{
                trigger: '.container',
                start:'-5% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })

        gsap.from('.aside-inner1, .aside-inner2, .aside-inner3', 3,{
            y:100,
            opacity:0,
            ease: 'ease-in',
            stagger: 0.4,
            scrollTrigger:{
                trigger: '.aside-wrapper',
                start: '-20% 10%',
                end: 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
            
        })
    });

    return (
        <div className="main-container">
            <div className="first-content">
                <div className="content-inner">
                    
                    <div className="content-inner-content">
                        <h1>
                            <div className="line">
                                <span>CREATE AND</span>   
                            </div>
                            <div className="line">
                                <span>SHARE YOUR</span>   
                            </div>
                            <div className="line">
                                <span>PHOTO STORIES.</span>   
                            </div>
                            
                        </h1>
                        <div className="top">
                            <div className="overlayleft"></div>
                            <div className="overlayright"></div>
                        </div>
                        <div className="first-content-text">
                            <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                        </div>
                        <div className="btn-row">
                            <Link to='/stories'>GET AN INVITE</Link>
                            <div className="arrow-icon">
                                <img src={arrow} alt="row"/>
                            </div>
                        </div>
                    </div>
                    <div className="first-content-image">
                        <img src={picture1} alt="" className='arr'/>
                    </div>
                </div>
            </div>
            <div className="second-content">
                <div className="second-content-image">
                    <img src={picture2} alt="" className='arr'/>
                </div>
                <div className="inner-content">
                    <div className="inner-contents">
                        <div className="inner">
                            <h1>
                                <div className="inner-line">
                                    <span>BEAUTIFUL</span>
                                </div>
                                <div className="inner-line">
                                    <span>STORIES</span>
                                </div>
                                <div className="inner-line">
                                    <span>EVERY TIME</span>
                                </div>
                            </h1>
                            <div className="middle">
                                <div className="overlay-middle-left"></div>
                                <div className="overlay-middle-right"></div>
                            </div>
                            <div className="second-text">
                                <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your stories with everyone.</p>
                            </div>
                            
                            <div className="invite-link">
                                <Link to='/stories'>VISIT THE STORIES</Link>
                                <div className="black-arrow-icon">
                                    <img src={blackarrow} alt="row"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third-content">
                <div className="third-content-inner">
                    <div className="third-inner-content">
                        <h1>
                            <div className="header-line">
                                <span>DESIGNED FOR</span>   
                            </div>
                            <div className="header-line">
                                <span>EVERYONE</span>   
                            </div>
                        </h1>
                        <div className="bottom">
                            <div className="overlay-bottom-left"></div>
                            <div className="overlay-bottom-right"></div>
                        </div>

                        <div className="bottom-text">
                            <p>Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.</p>
                        </div>
                        
                        <div className="third-link">
                            <Link to='/stories'>GET AN INVITE</Link>
                            <div className="white-arrow-icon">
                                <img src={blackarrow} alt="row"/>
                            </div>
                        </div>
                    </div>
                    <div className="third-content-image">
                        <img src={picture3} alt="" className='arr'/>
                    </div>
                </div>
            </div>
            <div className="image-flex">
                <div className="container">
                    <div className="content1">
                        <img src={mountain} alt="" />
                        <h3>The Mountains</h3>
                        <p>by John Appleseed</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                        
                    </div>
                    <div className="content2">
                        <img src={city} alt="" />
                        <h3>Sunset Cityscapes</h3>
                        <p>by Benjamin Cruz</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                        
                    </div>
                    <div className="content3">
                        <img src={voyage} alt="" />
                        <h3>18 Days Voyage</h3>
                        <p>by Alexei Borodin</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                        
                    </div>
                    <div className="content4">
                        <img src={arch} alt="" />
                        <h3>Architecturals</h3>
                        <p>by Samantha Brooke</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                        
                    </div>
                    <div className="flex-overlay">
                        <div className="overlay1"></div>
                        <div className="overlay2"></div>
                        <div className="overlay3"></div>
                        <div className="overlay4"></div>
                    </div>
                </div>
            </div>
            <div className="aside">
                <div className="aside-wrapper">
                    <div className="aside-inner1">
                        <img src={responsive} alt="" />
                        <h3>100% Responsive</h3>
                        <p>No matter which device you're on, our site is fully responsive and stories look beautiful on any screen.</p>
                    </div>
                    <div className="aside-inner2">
                        <img src={limit} alt="" />
                        <h3>No Photo Upload Limit</h3>
                        <p>Our tool has no limits on uploads or bandwith. Freely upload in bulk and share all of your stories in one go.</p>
                    </div>
                    <div className="aside-inner3">
                        <img src={embed} alt="" />
                        <h3>Available to Embed</h3>
                        <p>Embed Tweets, Facebook Posts, Instagram media, Vimeo or Youtube videos, Google Maps, and more.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default MainContent;