import React, { useEffect } from "react";
import Navbar from '../Home/Navbar';
import whitearrow from '../images/arrow.svg';
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import moon from '../Stories/storyImages/moon.jpg';
import tour from '../Stories/storyImages/tour.jpg';
import darktree from '../Stories/storyImages/darktree.jpg';
import lion from '../Stories/storyImages/lion.jpg';
import tree from '../Stories/storyImages/tree.jpg';
import sea from '../Stories/storyImages/sea.jpg';
import horse from '../Stories/storyImages/horse.jpg';
import waves from '../Stories/storyImages/waves.jpg';
import calm from '../Stories/storyImages/calm.jpg';
import mountain from '../Home/homeimages/mountains.jpg';
import city from '../Home/homeimages/cityscapes.jpg';
import voyage from '../Home/homeimages/voyage.jpg';
import arch from '../Home/homeimages/architecturals.jpg';
import star from '../Stories/storyImages/star.jpg';
import rock from '../Stories/storyImages/rock.jpg';
import flower from '../Stories/storyImages/flower.jpg';
import snow from '../Stories/storyImages/snow.jpg';

import { Parallax } from "react-parallax";
import Footer from "../footer/Footer";

const Stories = () => {
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{
        gsap.to('.stories', 0, {css:{visibility:'visible'}});

        tl.from('.stories-header, span', 1.8, {
            opacity:0,
            x:-100,
            ease: 'ease.inOut',
            delay:1,
            stagger:{
                amount:0.3
            },
        })

        .from('p, h4, .banner-link', 1, {
            x:-20,
            opacity:0,
            ease: 'power3.easeOut',
            delay:0.3,
            stagger: {
                amount:0.4
            }
        })

        gsap.to('.overlay1, .overlay2, .overlay3, .overlay4, .overlay5, .overlay6, .overlay7, .overlay8', 1.6, {
            height:0,
            ease: 'expo.Out',
            stagger:0.4,
            delay:0.3,
            scrollTrigger:{
                trigger: '.grid-overlay',
                start:'top 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })
        gsap.to('.overlay9, .overlay10, .overlay11, .overlay12, .overlay13, .overlay14, .overlay15, .overlay16', 1.6, {
            height:0,
            ease: 'ease.out',
            stagger:0.4,
            delay:0.3,
            scrollTrigger:{
                trigger: '.overlay5',
                start:'60% 10%',
                end : 'bottom 60%',
                toggleActions: 'restart none none reverse'
            }
        })
    })
    return (
        <div className="stories" >
            <Navbar/>
            <Parallax bgImage={moon} strength={500}>
               <div className="stories-banner" >
                   <div className="stories-banner-inner">
                        <h4>LAST MONTH'S FEATURED STORY</h4>
                        <h1>
                            <div className="stories-header">
                                <span>HAZY FULL</span>
                            </div>
                            <div className="stories-header">
                                <span>MOON OF</span>
                            </div>
                            <div className="stories-header">
                                <span>APPALACHIA</span>
                            </div>
                        </h1>
                        <div className="banner-author">
                            <p>March 2nd 2020</p>
                            <h4>by John Appleseed</h4>
                        </div>
                        <p className='bannertext'>
                            The dissected plateau area, while not actually made up of geological mountains,is popularly called "mountains," especially in eastern kentucky and western virginia, and while ridges are not high, the terrain is extremely rugged.
                        </p>
                        <div className="banner-link">
                            <Link to='/stories'>READ THE STORY</Link>
                            <div className="banner-arrow">
                                <img src={whitearrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className="grid-container">
                {/* <div className="grid-contents"> */}
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

                    <div className="content5">
                        <img src={tour} alt="" />
                        <h3>World Tour 2019</h3>
                        <p>by Timothy Wagner</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                    <div className="content6">
                        <img src={darktree} alt="" />
                        <h3>Unforseen Corners</h3>
                        <p>by William Malcolm</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                    <div className="content7">
                        <img src={lion} alt="" />
                        <h3>King on Africa: Part ||</h3>
                        <p>by Tim Hillenburg</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                    <div className="content8">
                        <img src={tree} alt="" />
                        <h3>The Trip to Nowhere</h3>
                        <p>by Felicia Rourke</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                    <div className="content9">
                        <img src={sea} alt="" />
                        <h3>Rage of The Sea</h3>
                        <p>by Mohammed Abdul</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                    <div className="content10">
                        <img src={horse} alt="" />
                        <h3>Running Free</h3>
                        <p>by Michelle</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                    <div className="content11">
                        <img src={waves} alt="" />
                        <h3>Behind The Waves</h3>
                        <p>by Lamarr Wilson</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                    <div className="content12">
                        <img src={calm} alt="" />
                        <h3>The Trip to Nowhere</h3>
                        <p>by Samantha Brooke</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                    <div className="content13">
                        <img src={star} alt="" />
                        <h3>The Milky Way</h3>
                        <p>by Benjamin Cruz</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                    <div className="content14">
                        <img src={rock} alt="" />
                        <h3>Night at The Dark Forest</h3>
                        <p>by Mohammed Abdul</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                    <div className="content15">
                        <img src={flower} alt="" />
                        <h3>Somwarpet's Beauty</h3>
                        <p>by Michelle</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                    <div className="content16">
                        <img src={snow} alt="" />
                        <h3>Land of Dreams</h3>
                        <p>by William Malcolm</p>
                        <hr />
                        <div className="link">
                            <Link to='/stories'>READ STORY</Link>
                            <img src={whitearrow} alt="" />
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div className="grid-overlay">
                <div className="overlay1"></div>
                <div className="overlay2"></div>
                <div className="overlay3"></div>
                <div className="overlay4"></div>
                <div className="overlay5"></div>
                <div className="overlay6"></div>
                <div className="overlay7"></div>
                <div className="overlay8"></div>
                <div className="overlay9"></div>
                <div className="overlay10"></div>
                <div className="overlay11"></div>
                <div className="overlay12"></div>
                <div className="overlay13"></div>
                <div className="overlay14"></div>
                <div className="overlay15"></div>
                <div className="overlay16"></div>
            </div>
            <div className="stories-footer">
                <Footer/>
            </div>
        </div>
     );
}
 
export default Stories;