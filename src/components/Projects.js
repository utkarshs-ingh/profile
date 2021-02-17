import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion'
const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    const [active, setActive] = useState('All')


    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }

    const project_variants = {
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
        <motion.div className="container projects"
            variants={project_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >

            <div className="projects__navbar">
                <div className={active === 'All' && 'projects__navbar-active'} onClick={
                    () => {
                        setProjects(data_projects)
                        setActive("All")

                    }


                }>All</div>
                <div className={active === 'mern' && 'projects__navbar-active'} onClick={() => handleFilterCategory('mern')}>MERN</div>
                <div className={active === 'py' && 'projects__navbar-active'} onClick={() => handleFilterCategory('py')}>Python</div>
                <div className={active === 'c' && 'projects__navbar-active'} onClick={() => handleFilterCategory('c')}>C/C++</div>
            </div>

            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }

            </div>
        </motion.div>
    );
};

export default Projects;