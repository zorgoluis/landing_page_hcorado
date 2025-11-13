import React from 'react';
import { motion } from 'framer-motion';
import { SectionVariant } from '../../helper/animation';

const FollowerSerction = () => {
  return (
    <motion.section
      className='section home-follower' 
      id="followers"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: "some" }}
    >
      <motion.div
        className='container-default w-container'
        variants={SectionVariant}
      >
        <div className="elfsight-app-6b36d4ea-81d0-4221-9b0e-3e1eb7b6b3b1" data-elfsight-app-lazy></div>
      </motion.div>
    </motion.section>
  )
}

export default FollowerSerction