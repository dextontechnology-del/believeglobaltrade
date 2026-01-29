import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);
  
  // Floating elements animation variants
  const floatingElements = [
    { id: 1, size: 60, delay: 0, x: '10%', y: '20%' },
    { id: 2, size: 40, delay: 0.5, x: '85%', y: '30%' },
    { id: 3, size: 30, delay: 1, x: '15%', y: '70%' },
    { id: 4, size: 50, delay: 0.75, x: '80%', y: '80%' }
  ];
  
  const floatingVariants = {
    initial: (custom) => ({
      y: 0,
      x: 0,
      opacity: 0.1,
      scale: 0.8
    }),
    animate: (custom) => ({
      y: [0, -30, 0, -15, 0],
      x: [0, 10, -10, 5, 0],
      opacity: [0.1, 0.2, 0.15, 0.2, 0.1],
      scale: [0.8, 0.9, 0.85, 0.9, 0.8],
      transition: {
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: custom.delay,
        repeatType: 'reverse'
      }
    })
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: i * 0.1
      }
    })
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: [1, 1.1, 1],
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { 
        rotate: { duration: 1, ease: 'linear', repeat: Infinity },
        scale: { duration: 0.3 }
      }
    },
    tap: { 
      scale: 0.9 
    }
  };

  // Social links
  const socialLinks = [
    { icon: <FaTwitter />, url: 'https://x.com/BelieveGlobal_', color: '#000000' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/believeglobaltrade/', color: '#E4405F' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/believeglobal-trade-9844563a9', color: '#0077b5' }
  ];

  // Update progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => 
        prevProgress >= 100 ? 0 : prevProgress + 0.5
      );
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      {/* Floating background elements */}
      <AnimatePresence>
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="floating-element"
            custom={element}
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            style={{
              position: 'absolute',
              left: element.x,
              top: element.y,
              width: `${element.size}px`,
              height: `${element.size}px`,
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50%',
              zIndex: 0,
              pointerEvents: 'none'
            }}
          />
        ))}
      </AnimatePresence>

      <motion.main 
        className="main-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="logo-container" variants={itemVariants} custom={0}>
          <motion.img 
            src={logo} 
            alt="GlobalTrade Logo" 
            className="logo"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 1,
              rotate: { 
                duration: 10, 
                repeat: Infinity, 
                repeatType: 'reverse',
                ease: 'easeInOut' 
              }
            }}
          />
        </motion.div>

        <motion.div className="content" variants={itemVariants} custom={1}>
          <motion.h1 className="title">
            Global<span>Trade</span>
          </motion.h1>
          
          <motion.h2 className="subtitle">
            We're <motion.span 
              className="highlight"
              animate={{ 
                y: [0, -3, 0],
                textShadow: [
                  '0 0 10px rgba(100, 181, 246, 0.3)',
                  '0 0 20px rgba(100, 181, 246, 0.6)',
                  '0 0 10px rgba(100, 181, 246, 0.3)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >Under Maintenance</motion.span>
          </motion.h2>
          
          <motion.p className="message">
            We're working hard to improve our platform and deliver an exceptional experience.
            <motion.span 
              className="sub-message"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            >
              Thank you for your patience and understanding.
            </motion.span>
          </motion.p>
          
          <motion.div className="status-container">
            <motion.div 
              className="status-item"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span 
                className="status-icon"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              >
                <FaClock />
              </motion.span>
              <span>Estimated time: 24-48 hours</span>
            </motion.div>
            
            <motion.div 
              className="status-item"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.span
                className="status-icon email"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                <FaEnvelope />
              </motion.span>
              <a href="mailto:beliveglobaltrade@gmail.com">beliveglobaltrade@gmail.com</a>
            </motion.div>
          </motion.div>
          
          <motion.div className="social-links" variants={itemVariants} custom={2}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ 
                  y: -5,
                  color: social.color,
                  scale: 1.2
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.5 + index * 0.2,
                    type: 'spring',
                    stiffness: 300
                  } 
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        
          <motion.div 
            className="progress-container"
            variants={itemVariants}
            custom={3}
          >
            <motion.div 
              className="progress-bar"
              initial={{ width: 0 }}
              animate={{ 
                width: `${progress}%`,
                background: [
                  'linear-gradient(90deg, #4a6cf7, #6c5ce7)',
                  'linear-gradient(90deg, #6c5ce7, #4a6cf7)',
                  'linear-gradient(90deg, #4a6cf7, #6c5ce7)'
                ]
              }}
              transition={{
                width: { duration: 0.5, ease: 'linear' },
                background: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }
              }}
            >
              <motion.span 
                className="progress-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {Math.round(progress)}%
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.footer className="footer" variants={itemVariants} custom={4}>
          <p>© {new Date().getFullYear()} GlobalTrade. All rights reserved.</p>
        </motion.footer>
      </motion.main>
    </div>
  );
}

export default App;
