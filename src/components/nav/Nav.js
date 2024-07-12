import React from 'react'
import "./Nav.css"
import kplogo from '../../assets/kplogo.png'
import { useState , useEffect} from 'react'


const Nav = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000); // Update every second

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run the effect only once on mount

    const optionsDate = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    
      const optionsTime = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
    
      const formattedDate = currentTime.toLocaleString(undefined, optionsDate);
      const formattedTime = currentTime.toLocaleString(undefined, optionsTime);
      const formattedDateTime = `${formattedDate} | ${formattedTime}`;

    
      const [menuOpen, setMenuOpen] = useState(false)

      

  return (
    <nav>
        <div className="logo">
            <a href="#home"><img width="150px" height="auto" src={kplogo} alt='ttlogo'></img></a>
        </div>
        <div className='date-time'>
            <p>{formattedDateTime}</p>
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span> 
        </div>
        <ul className={menuOpen ? 'open' : ''}>
            <li><a href='#home' onClick={() => setMenuOpen(!menuOpen)}>Home</a></li>
            <li><a href='#live' onClick={() => setMenuOpen(!menuOpen)}>News Feed</a></li>
            <li><a href='#publications' onClick={() => setMenuOpen(!menuOpen)}>Our Publications</a>
                {/* <ul className='nav-pub-list'>
                    <li><a href='#publications'>Tamil Times</a></li>
                    <li><a href='#publications'>Ungal Thozhan</a></li>
                    <li><a href='#publications'>King of Kings</a></li>
                </ul> */}
            </li>
            <li><a href='#about' onClick={() => setMenuOpen(!menuOpen)}>About Us</a></li>
            <li><a href='#contact' onClick={() => setMenuOpen(!menuOpen)}>Contact Us</a></li>
        </ul>
    </nav>
  )
} 

export default Nav