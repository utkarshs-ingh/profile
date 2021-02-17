import React from 'react'

import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import phone from '../assets/icons/phone-fill.svg';
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Utkarsh <span>Singh</span> </div>
            <div className="sidebar__item sidebar__title">Full Stack Developer</div>
            <a href='https://drive.google.com/file/d/1LCr_BCbdfUsgx-yXhn5ViCjAqtB2lxI7/view' target="_blank" rel="noopener noreferrer">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon " />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.linkedin.com/in/utkarsh-singh-592b411b3" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="sidebar__icon mr-3" /></a>
                <a href="https://github.com/utkarshs-ingh" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__location">
                    <img src={phone} alt="contact" className="sidebar__icon mr-3" />
                    +91-8859873949
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    New Delhi, India&nbsp;
                </div>
            </div>
            <div className="sidebar__item sidebar__email"><a href="mailto:utkarshsingh.1306@gmail.com">Mail</a></div>
        </motion.div>
    )
}

export default Sidebar;