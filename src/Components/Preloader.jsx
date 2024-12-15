import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div 
      className="preloader"
      initial={{ y: 0, opacity: 1 }}        // Initial position (y: 0) and fully visible
      animate={{ y: 0, opacity: 1 }}        // Stays in place while loading
      exit={{ y: '-100%', opacity: 0 }}     // Slide up and fade out when exiting
      transition={{ duration: 0.8, ease: 'easeInOut' }} // Smooth slide-up animation
    >
      <div className="layer"></div>
      <div className="inner">
        <figure>
          <img src="images/loading.png" alt="Loading" />
        </figure>
      </div>
    </motion.div>
  );
};

export default Preloader;
