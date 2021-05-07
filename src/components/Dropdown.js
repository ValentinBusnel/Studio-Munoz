import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { Link } from 'react-router-dom';

function Dropdown() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)


    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {projectsData.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.title}
                                  to={item.link} 
                                  onClick={() => setClick(false)}
                            >
                                <p className='name_project'>{item.title}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Dropdown;