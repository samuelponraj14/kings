import React, { useState , useEffect } from 'react'
import '../../components/publications/Publications.css'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


const Publications = ({data, pdfs, tariffs}) => {

    const [expandedPanel, setExpandedPanel] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpandedPanel(isExpanded ? panel : null);
    };

    const handleMouseEnter = (panel) => {
        setExpandedPanel(panel);
    };

    const handleMouseLeave = () => {
        setExpandedPanel(null);
    };


    
    const [selectedValue, setSelectedValue] = useState('');

    const handleChangeValue = (e) => {
        setSelectedValue(e.target.value);
        };

    
    const [selectedItem, setSelectedItem] = useState(data[0].key);
    const [toggle, setToggle] = useState('1')

    
    useEffect(() => {
        setSelectedItem(data[0].key);
        // eslint-disable-next-line
      }, []);

    
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed
        console.log(currentMonth)
      
        const months = [
          { value: '1', label: 'January' },
          { value: '2', label: 'February' },
          { value: '3', label: 'March' },
          { value: '4', label: 'April' },
          { value: '5', label: 'May' },
          { value: '6', label: 'June' },
          { value: '7', label: 'July' },
          { value: '8', label: 'August' },
          { value: '9', label: 'September' },
          { value: '10', label: 'October' },
          { value: '11', label: 'November' },
          { value: '12', label: 'December' },
        ];
    
        const filteredMonths = months.slice(0, currentMonth -1);
        const currentIssue = pdfs[currentMonth]
        console.log(currentIssue)

  return (
    <div id='publications' className='container'>

        <div className="title">
            <h1>Our Publications</h1>
        </div>

        <div className='publist'>
        
            <div className='lists'>
                { data.map(({key, title}) => {
                    return (
                            <ul  key={key}>
                                <li className={selectedItem === key ? 'selected' : ''} onClick={() => {setSelectedItem(key); setToggle(key); setExpandedPanel(null)}} >{title}</li>
                            </ul>
                            )
                        })
                }
            </div>
            
            <div className='logo-box'>
                { data.map(({key, img}) => {
                    return (
                            <div className="publogo">
                                {toggle === key ? (<img src={img} key={key} alt='logo'></img>) : null}
                            </div>
                            )
                        })
                }
            </div> 
        </div>   
        
        <div className='sub-list'>
            { data.map(({key, title}) => {
                return (
                        <div className="list-title">
                            {toggle === key ? (<h2>{title.toUpperCase()}</h2>) : null}
                        </div>
                        
                        )
                    })
            }

            {
                <div className="issues">
                <div className="issue-list">
                        <ul>
                            <li>
                                <Accordion className='issue-btn'
                                    expanded={expandedPanel === 'latest-newspaper'}
                                    onChange={handleChange('latest-newspaper')}
                                    onMouseEnter={() => handleMouseEnter('latest-newspaper')}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ maxHeight: expandedPanel === 'latest-newspaper' ? '200px' : '48px' }}
                                >
                                    <AccordionSummary 
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                    Latest Issue
                                    </AccordionSummary >
                                    <AccordionActions  className='sub-btn-container'>
                                        {toggle === "2" || toggle === "3" ? (
                                            <p className='uploadingsoon'>Uploading soon</p>
                                        ) : (
                                            <>
                                                <Button className='sub-btn'
                                                    href={currentIssue}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    View pdf
                                                </Button>
                                                <Button className='sub-btn'
                                                    href={currentIssue}
                                                    rel="noreferrer"
                                                    download
                                                >
                                                    Download pdf
                                                </Button>
                                            </>
                                        )}
                                    </AccordionActions>
                                </Accordion>
                            </li>
                            <li>
                                <Accordion  className='issue-btn'
                                    expanded={expandedPanel === 'previous-newspaper'}
                                    onChange={handleChange('previous-newspaper')}
                                    onMouseEnter={() => handleMouseEnter('previous-newspaper')}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ maxHeight: expandedPanel === 'previous-newspaper' ? '200px' : '48px' }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                    Previous Issues
                                    </AccordionSummary>
                                    {toggle === "2" || toggle === "3" ? (
                                            <p className='uploadingsoon'>Uploading soon</p>
                                        ) : (
                                    <>
                                    <div className='dropdown issue-btn' >
                                        <select value={selectedValue} onChange={handleChangeValue}>
                                            <option>--Select Month--</option>
                                            {filteredMonths.map((month) => (
                                            <option key={month.value} value={month.value}>
                                            {month.label}
                                            </option>))}
                                        </select>
                                    </div>
                                    <AccordionActions   className='sub-btn-container'>
                                    <Button className='sub-btn'
                                                href={pdfs[selectedValue]} 
                                                target="_blank"
                                                rel="noreferrer">View pdf</Button>
                                        <Button className='sub-btn'
                                                href={pdfs[selectedValue]}
                                            rel="noreferrer"
                                                download>Download pdf</Button>
                                    </AccordionActions>
                                    </>)}
                            </Accordion>
                            </li>
                            <li>
                                <Accordion  className='issue-btn'
                                    expanded={expandedPanel === 'tariffs'}
                                    onChange={handleChange('tariffs')}
                                    onMouseEnter={() => handleMouseEnter('tariffs')}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ maxHeight: expandedPanel === 'tariffs' ? '200px' : '48px' }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                    Tariffs
                                    </AccordionSummary>
                                    <AccordionActions   className='sub-btn-container'>
                                        <Button className='sub-btn'
                                                href={tariffs.tt} 
                                                target="_blank"
                                                rel="noreferrer">View</Button>
                                        <Button className='sub-btn'
                                                href={tariffs.tt} 
                                                rel="noreferrer"
                                                download>Download</Button>
                                    </AccordionActions>
                            </Accordion>
                            </li>
                        </ul>
                </div>
                </div>
            }

        </div>    

    </div>
    
  )
}


export default Publications;