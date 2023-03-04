import React from 'react';
import { motion } from 'framer-motion';
import Placeholder from './Placeholder.jsx';

function ScreenLoading() {
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        style={{
          color: 'white',
          fontSize: 48,
          fontWeight: 'bold',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}

export default ScreenLoading;
