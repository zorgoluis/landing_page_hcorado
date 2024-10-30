export const CardVariants = {
  offscreen: {
    y: 400
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

export const CardBgVariants = {
  offscreen: {
    x: -50,
    opacity: 0 
  },
  onscreen: {
    x: 0,
    rotate: -10,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

export const TextVariant = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

export const MinCardVariant = {
  offscreen: {
    x: 400
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
}

export const SectionVariant = {
  offscreen: {
    opacity: 0,
    rotate: 10,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
}