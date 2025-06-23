// Typing animation for text
export const typingAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// Document/Resume creation animation
export const documentCreationAnimation = {
  initial: {
    scale: 0.8,
    opacity: 0,
    rotateY: -15,
    transformPerspective: 1000,
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 },
  },
};

// Feature card animations with content relevance
export const featureCardAnimations = {
  // For speed/efficiency features
  speedFeature: {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      x: 10,
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  },

  // For template/design features
  designFeature: {
    initial: { scale: 0, opacity: 0, rotate: -10 },
    animate: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.7,
      },
    },
    hover: {
      rotate: 2,
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  },

  // For download/export features
  downloadFeature: {
    initial: { y: -50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        duration: 0.8,
      },
    },
    hover: {
      y: -5,
      scale: 1.03,
      transition: { duration: 0.2 },
    },
  },

  // For customization features
  customizationFeature: {
    initial: { opacity: 0, scale: 0.5, rotate: 180 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      rotate: -5,
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  },

  // For AI/smart features
  aiFeature: {
    initial: { opacity: 0, scale: 0.3 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3 },
    },
  },

  // For security/privacy features
  securityFeature: {
    initial: { opacity: 0, x: 50, scale: 0.8 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(34, 197, 94, 0.2)",
      transition: { duration: 0.3 },
    },
  },
};

// Testimonial/Review animations
export const testimonialAnimations = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  },

  card: {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      rotateX: 5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  },

  // Star rating animation
  star: {
    initial: { scale: 0, rotate: -180 },
    animate: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "backOut",
      },
    }),
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.2 },
    },
  },

  // Quote animation
  quote: {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  },
};

// Icon animations with meaning
export const iconAnimations = {
  // For resume/document icons
  document: {
    initial: { scale: 0, rotate: -90 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 },
    },
  },

  // For speed/lightning icons
  speed: {
    initial: { x: -20, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      x: 5,
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  },

  // For download icons
  download: {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      y: -3,
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  },

  // For customization/palette icons
  customize: {
    initial: { scale: 0, rotate: 180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      rotate: 15,
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  },
};

// Page transition animations
export const pageTransitions = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Stagger animations for lists
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
