import logo from '../images/logoo.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';


const Navigation = () => {

    useEffect(()=>{
        gsap.from('.navigation', {
            y:-16,
            opacity:0,
            duration:1.4,
            ease: 'power3.inOut'
        })

    })
    return ( 
        <div className="navigation">
            <div className="nav-logo">
                <Link to='/'><img src={logo} alt=""/></Link>
            </div>
            <nav>
                <ul>
                    <Link to='/stories'><li>STORIES</li></Link>
                    <Link to='/pricing'><li>PRICING</li></Link>
                </ul>
            </nav>
            <div className="apply-link">
                <button>GET AN INVITE</button>
            </div>
        </div>
     );
}
 
export default Navigation;