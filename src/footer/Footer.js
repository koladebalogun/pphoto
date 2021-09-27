import { Link } from "react-router-dom";
import logo from '../images/whitelogo.svg';
import { AiOutlineTwitter, AiFillFacebook, } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import arrow from '../images/arrow.svg';

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-container">
                <div className="footer-inner">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footer-icons">
                        <ul>
                            <li><a href="."><i className='Ai'><AiFillFacebook/></i></a></li>
                            <li><a href="."><i className='Ai'><AiOutlineTwitter/></i></a></li>
                            <li><a href="."><i className='Ai'><FaInstagram/></i></a></li>
                        </ul>
                    </div>
                    <div className="footer-nav">
                        <ul>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/stories'>STORIES</Link></li>
                            <li><Link to='/pricing'>PRICING</Link></li>
                        </ul>
                    </div>
                    <div className="footer-link">
                        <Link to='/'>GET AN INVITE</Link>
                        <div className="link-arrow">
                            <img src={arrow} alt="row"/>
                        </div>  
                        <div className="copyright">
                            <p>Copyright 2019. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;