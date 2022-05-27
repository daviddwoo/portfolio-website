export const animations = {
    initial: {
      opacity: 0,  
      y: 40,
      transition: { ease: [0.16, 1, 0.3, 1], duration: 1}
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.16, 1, 0.3, 1], duration: 1.5}
    }
};

export const heroAnimation = {
  initial: {
    y: 400,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.4 }
  },
  animate: {
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.4}
  }
};

export const heroStagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const stagger1 = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const stagger2 = {
    animate: {
      transition: {
        staggerChildren: 0.11
      }
    }
};
