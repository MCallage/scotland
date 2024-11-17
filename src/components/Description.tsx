'use client'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { images } from './constants';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

type Props = {
  clickNext: () => void;
  clickPrev: () => void;
  activeImage: number;
};

const Description = ({ clickNext, clickPrev, activeImage }: Props) => {
  const contentVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  const titleVariants = {
    initial: { 
      opacity: 0, 
      x: -30,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.7
      }
    },
    exit: {
      opacity: 0,
      x: 30,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  const lineVariants = {
    initial: { 
      scaleX: 0,
      opacity: 0
    },
    animate: { 
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      scaleX: 0,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="relative bg-[#EBFFFE] h-full">
      <AnimatePresence mode="wait">
        {images.map((elem, idx) => (
          idx === activeImage && (
            <motion.div
              key={idx}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={contentVariants}
              className="h-full w-full p-8 md:p-12"
            >
              <div className="h-full flex flex-col">
                <motion.h2 
                  variants={titleVariants}
                  className="font-title text-4xl text-blue-950 mb-2"
                >
                  {elem.title}
                </motion.h2>
                
                {elem.subtitle && (
                  <motion.h3 
                    variants={titleVariants}
                    className="font-body text-2xl text-blue-950 mb-4"
                  >
                    {elem.subtitle}
                  </motion.h3>
                )}
                
                <motion.div 
                  variants={lineVariants}
                  className="h-1 w-full bg-cyan-400 mb-6 origin-left"
                />
                
                <motion.p 
                  variants={contentVariants}
                  className="font-body text-zinc-800 leading-relaxed flex-grow"
                >
                  {elem.desc}
                </motion.p>

                <motion.div 
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="https://www.visitscotland.com/"
                    className="inline-block bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-body uppercase px-6 py-2 rounded-md shadow-lg hover:shadow-xl"
                  >
                    More Info
                  </Link>
                </motion.div>
              </div>

              <div className="absolute bottom-8 right-8 flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#1e40af" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={clickPrev}
                  className="p-2 rounded-full bg-blue-950 text-white transition-colors shadow-md"
                >
                  <FaChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "#1e40af" }}
                  whileTap={{ scale: 0.9 }}
                  onClick={clickNext}
                  className="p-2 rounded-full bg-blue-950 text-white transition-colors shadow-md"
                >
                  <FaChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Description;