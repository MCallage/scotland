'use client';

import Image from 'next/image';
import { images } from './constants';
import Description from './Description';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Variantes para o efeito de carrossel 3D com fade e zoom
  const carousel3DWithFade = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 45 : -45,
      scale: 1.2,
      z: -1000,
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        opacity: { duration: 0.9 },
        transform: { duration: 0.7, type: "spring", bounce: 0.3 }
      }
    }),
    center: {
      rotateY: 0,
      scale: 1,
      z: 0,
      x: 0,
      opacity: 1,
      transition: {
        opacity: { duration: 0.5 },
        transform: { duration: 0.7, type: "spring", bounce: 0.3 }
      }
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -45 : 45,
      scale: 0.8,
      z: -1000,
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        opacity: { duration: 0.3 },
        transform: { duration: 0.7, type: "spring", bounce: 0.3 }
      }
    })
  };

  const clickNext = () => {
    setDirection(1);
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setDirection(-1);
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 30000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <div className="grid place-items-center w-full mx-auto max-w-6xl shadow-2xl rounded-3xl overflow-hidden">
      <div className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[500px] md:h-[600px] perspective-1000">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeImage}
              custom={direction}
              variants={carousel3DWithFade}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full h-full transform-preserve-3d"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -1000) {
                  clickNext();
                } else if (swipe > 1000) {
                  clickPrev();
                }
              }}
            >
              <Image
                src={images[activeImage].src}
                alt={images[activeImage].title}
                fill
                className="object-cover rounded-tl-3xl rounded-bl-3xl"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <Description
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </div>
    </div>
  );
};

export default Slider;