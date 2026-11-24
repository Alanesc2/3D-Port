import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, title, tags, github, live }) => (
  <Tilt className='xs:w-[320px] w-full'>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='w-full blue-violet-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-6 px-6 min-h-[220px] flex justify-between flex-col'>
        <div>
          <h3 className='text-white text-[22px] font-bold'>{title}</h3>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={`${title}-${tag}`}
                className='text-[12px] text-secondary bg-black/30 px-3 py-1 rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className='mt-6 flex items-center gap-6'>
          {!!github && (
            <a
              href={github}
              target='_blank'
              rel='noreferrer'
              className='text-white font-medium hover:underline'
            >
              GitHub
            </a>
          )}

          {!!live && (
            <a
              href={live}
              target='_blank'
              rel='noreferrer'
              className='text-white font-medium hover:underline'
            >
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        A few projects I've built recently. Each one includes the core tech used and a link to the repository.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
