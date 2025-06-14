import { motion } from 'framer-motion';
import React from 'react';

interface RobotFaceProps {
  isProcessing: boolean;
  isSpeaking: boolean;
}

const RobotFace: React.FC<RobotFaceProps> = ({ isProcessing, isSpeaking }) => {
  return (
    <div className="w-24 h-24 relative">
      <motion.div
        className="absolute inset-0 bg-blue-500 rounded-full"
        initial={{ scale: 1 }}
        animate={{
          scale: isProcessing ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 1.5,
          repeat: isProcessing ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        {/* Robot Face */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Eyes */}
          <motion.div
            className="absolute w-4 h-4 bg-white rounded-full"
            style={{ top: '35%', left: '30%' }}
            animate={{
              scale: isSpeaking ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: isSpeaking ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-4 h-4 bg-white rounded-full"
            style={{ top: '35%', right: '30%' }}
            animate={{
              scale: isSpeaking ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: isSpeaking ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
          
          {/* Mouth */}
          <motion.div
            className="absolute w-8 h-2 bg-white rounded-full"
            style={{ bottom: '30%' }}
            animate={{
              scaleY: isSpeaking ? [1, 1.5, 1] : 1,
            }}
            transition={{
              duration: 0.3,
              repeat: isSpeaking ? Infinity : 0,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default RobotFace; 