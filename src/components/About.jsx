import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn , textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon})=> {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("rigth", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
     <motion.div>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
     </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-5 text-secondary text-[18px] max-w-3xl leading-[30px]'>
         I'm a skilled  webapp developer, with experience in Html, css and Javascript. Expertise in frameworks like React and Django.I'm attentive to details and can collaborate with clients to develop and build an efficient and scalable webapp that solves related problems. Bring in your IDEAS and let work on it together.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-12'>
         {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
         ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about") 