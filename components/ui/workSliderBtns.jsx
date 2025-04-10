"use client";

import React from 'react'
import { PiCaretLeftBold, PiCaretRightBold  } from 'react-icons/pi' 
import { useSwiper } from 'swiper/react';

const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper()
  return (
    <div className={containerStyles} style={{zIndex: 999, width: '70%'}}>
        <button className={btnStyles} onClick={() => swiper.slidePrev()}>
            <PiCaretLeftBold className={iconsStyles}  />
        </button>
        <button className={btnStyles} onClick={() => swiper.slideNext()}>
            <PiCaretRightBold  className={iconsStyles} />
        </button>
    </div>
  )
}

export default WorkSliderBtns