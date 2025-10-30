export const gnbContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};
export const depthLi = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const searchArea = {
  initial: { maxHeight: 0, opacity: 0 },
  enter: {
    maxHeight: 300,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    maxHeight: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};
