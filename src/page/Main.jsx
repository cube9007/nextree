import React from 'react';

import { Button, Box

        } from '@mui/material'

//img
import headerIcon1 from "../assets/img/headerIcon1.png";
import headerIcon2 from "../assets/img/headerIcon2.png";
import headerIcon3 from "../assets/img/headerIcon3.png";
import headerIcon4 from "../assets/img/headerIcon4.png";

function Main() {
  return (
    <div className='section'>
        <div className='section-img'/>
        <div className='section-header c-f-white flex-grow align-center justify-space '>
            <div className='section-header-logo f-logo'>
               <Button className='btn-headerLogo'>  NEXTREE  </Button>
            </div>
            <div className='section-header-menu flex'>
                <a>ABOUT US</a>
                <a>BUSINESS</a>
                <a>PLATFORM</a>
                <a>PORTFOLIO</a>
                <a>CLIENTS</a>
            </div>
            <ul className='section-header-icon flex'>
                <li>
                    <Button className='btn-headerIcon'>
                        <img className='section-header-icon-img' src={headerIcon1} />
                    </Button>
                </li>
                <li>
                    <Button className='btn-headerIcon'>
                        <img className='section-header-icon-img' src={headerIcon2} />
                    </Button>
                </li>
                <li>
                     <Button className='btn-headerIcon'>
                        <img className='section-header-icon-img' src={headerIcon3} />
                    </Button>
                </li>
                <li>
                    <Button className='btn-headerIcon'>
                        <img className='section-header-icon-img' src={headerIcon4} />
                    </Button>
                </li>
            </ul>
        </div>
        <div className='section-body'>
            <div >
                <div className='section-body-desc'>
                    <p className='section-body-desc-head c-f-white f-visual'>Technology that creates a paradigm</p>
                    <p className='section-body-desc-m c-f-white f-m-1e'>A new challenge and start!</p>
                    <p className='section-body-desc-s c-f-white f-b-1e'> With the best manpower and technology, domestic and foreign large corporations are using our platform service, and we support high-satisfaction service and maintenance.</p>
                    <Button className='btn-round-Big' variant='outlined'> View More</Button>
                </div>
                <div className='section-body-photo flex align-center'>
                    <input className='radio radio1' name='photo' id='radio1' type='radio' />
                    <input className='radio radio2' name='photo' id='radio2' type='radio' defaultChecked/>
                    <input className='radio radio3' name='photo' id='radio3' type='radio' />
                    <label className='label-1' for='radio1'>
                        <Box className='section-body-photo-arrowLeft'></Box>
                    </label>
                    <label className='label-2' for='radio2'>
                        <Box className='section-body-photo-arrowLeft'></Box>
                    </label>
                    <div className='section-body-photo-div'>
                        <div className='section-body-photo-1'></div>
                        <div className='section-body-photo-2'></div>
                        <div className='section-body-photo-3'></div>
                    </div>
                    <label className='label-3' for='radio2'>
                        <Box className='section-body-photo-arrowRight'></Box>
                    </label>
                    <label className='label-4' for='radio3'>
                        <Box className='section-body-photo-arrowRight'></Box>
                    </label>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
