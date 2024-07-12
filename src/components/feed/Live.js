import '../../components/feed/Live.css'
import live1 from '../../assets/news/live1.png'
import live2 from '../../assets/news/live2.png'
import live3 from '../../assets/news/live3.png'
import live4 from '../../assets/news/live4.png'

import { useState } from 'react'


export const Model = ({src, alt, onClose}) => {
    return(
        
        <div className='modal'>
            <span className="close" onClick={onClose}>&times;</span>
            <div className='modal-img'>
                <img className="modal-content" src={src} alt={alt}/>
                
            </div>
            
        </div>
    )
}


const Live = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const showModal1 = () => setIsOpen1(true);
    const showModal2 = () => setIsOpen2(true);
    const showModal3 = () => setIsOpen3(true);
    const showModal4 = () => setIsOpen4(true);

  return (
    <div id='live' className='live-container'>
        <div className="live-title">
            <h1>Latest News</h1>
        </div>
    <div id='live' className="live-content-container">
            <div className='box'>
                <div className='live-content1'>
                    <img className='live-1' src={live1} alt='live-1 img' onClick={showModal1}></img>
                    {isOpen1 && (
                        <Model  
                            src={live1} alt='live-1 img' onClose={()=>setIsOpen1(false) }
                        />
                    )}
                    <div className="caption">Election awareness</div>
                </div>
                <div className='live-content2'>

                    <img className='live-2' src={live2} alt='live-2 img' onClick={showModal2}></img>
                    {isOpen2 && (
                        <Model  
                            src={live2} alt='live-2 img' onClose={()=>setIsOpen2(false)}
                        />
                    )}
                    
                    <div className="caption">Admissions open for 2024</div>
                </div>
                <div className='live-content3'>
                <img className='live-2' src={live3} alt='live-3 img' onClick={showModal3}></img>
                    {isOpen3 && (
                        <Model  
                            src={live3} alt='live-3 img' onClose={()=>setIsOpen3(false)}
                        />
                    )}
                    <div className="caption">Trinity Optics</div>
                </div>
                <div className='live-content4'>
                <img className='live-2' src={live4} alt='live-4 img' onClick={showModal4}></img>
                    {isOpen4 && (
                        <Model  
                            src={live4} alt='live-4 img' onClose={()=>setIsOpen4(false)}
                            
                        />
                    )}
                    <div className="caption">Shrusti</div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Live