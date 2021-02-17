import React from 'react';
import { motion } from 'framer-motion';


const Experience = () => {
    
    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="container resume"

            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Computer Science Engineering
                        </h5>
                        <p className="resume-card__name">
                        University of Petroleum and Energy Studies Dehradun, India
                        </p>
                        <strong><p className="resume-card__details">CGPA: 8.3 <span style={{marginLeft:'150px'}}>2018 - 2022</span></p></strong>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intermediate
                        </h5>
                        <p className="resume-card__name">
                        ST. Mary's Senior Secondary School<br/> Delhi, India
                        </p>
                        <strong><p className="resume-card__details">Percentage: 80% <span style={{marginLeft:'100px'}}>2014 - 2018</span></p></strong>
                    </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Software Development Intern
                        </h5>
                        <p className="resume-card__name">
                        IBM <span style={{marginLeft:'150px', "font-size": "0.9rem"}}><i>Feb 2021 - Present</i></span>
                        </p>
                        <p className="resume-card__details">Working on the SmartKaksha Project by IBM based on the MVC model which includes <b>NodeJs and MySQL back-end, and ReactJs front-end.</b> <br/>The task includes developing various teacher module backend and frontend to perform role-specific tasks. </p>
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Full Stack Development Intern
                        </h5>
                        <p className="resume-card__name">
                        One4life Pvt. Ltd.<span style={{marginLeft:'120px', "font-size": "0.9rem"}}><i>Dec 2020 - Jan 2021</i></span>
                        </p>
                        <p className="resume-card__details">Developed various <b>Restful APIs using NodeJs back-end</b> to complete the task of Database interaction, secure sign-in, and sign-up. For the front-end, worked on <b>Angular 11</b> to build components for the institute dashboards with specific user roles.</p>
                    </div>
                </div>
            </div>
        </motion.div> 
    );
};

export default Experience;