 
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
 const scrollWithOffset = (el)=>{
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffest = -100;
    window.scrollTo({top:yCoordinate+yOffest,behavior:'smooth'})
}
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  // useScrollAnimation.js
  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay each child animation
      },
    },
  };
  export const slideInLeftVariants = {
    hidden: { opacity: 0, x: -100 }, // Start 100px to the left
    visible: {
      opacity: 1,
      x: 0, // End at the original position
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  export const slideInRightVariants = {
    hidden: { opacity: 0, x: 100 }, // Start 100px to the right
    visible: {
      opacity: 1,
      x: 0, // End at the original position
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold });

    const elements = document.querySelectorAll(".scroll-animated");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [controls, threshold]);

  return controls;
};


export {
    scrollWithOffset,textVariants,staggerContainer,useScrollAnimation
}