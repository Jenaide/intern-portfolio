export const fadeInBottom = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 1,
      opacity: 2,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2
      },
    },
  };

  export const fadeInTop = {
    initial: {
      y: -500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2
      },
    },
  };
  
  export const fadeInLeft = {
    initial: {
      x: -500, // move from left to right
      opacity: 0,
    },
    animate: {
      x: 0, // original x position
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2
      },
    },
  }
  
  export const fadeInRight = {
    initial: {
      x: 500, // move from left to right
      opacity: 0,
    },
    animate: {
      x: 0, // original x position
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2
      },
    },
  }