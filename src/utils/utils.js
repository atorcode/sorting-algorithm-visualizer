// insertion sort => insertion-sort
export const formatLink = (str) => {
  const hyphenatedStr = str.toLowerCase().replaceAll(" ", "-");
  return `/algorithms/${hyphenatedStr}`;
};

// insertion-sort => insertion sort
export const unformatLink = (str) => {
  return str.toLowerCase().replaceAll("-", " ");
};

// insertion sort => Insertion Sort
export const applyInitialCase = (str) => {
  if (typeof str !== "string") {
    return;
  }
  const result = str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(" ");

  return result;
};

export const calcWidthPercentage = (quantity) => {
  return 100 / quantity;
};

export const calcHeightPercentage = (quantity, multiplier) => {
  return (100 / quantity) * multiplier;
};

export const calcLeftPosPercentage = (quantity, multiplier) => {
  return (
    calcWidthPercentage(quantity) * multiplier - calcWidthPercentage(quantity)
  );
};

// calculate the duration of one step given the number of steps and the total number of milliseconds allotted to the animation
export const calcAnimationStepTime = (steps, total) => {
  return total / steps;
};
