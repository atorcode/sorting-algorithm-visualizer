// insertion sort => insertion-sort
export const formatLink = (str) => {
  const hyphenatedStr = str.toLowerCase().replaceAll(" ", "-");
  return `/algorithms/${hyphenatedStr}`;
};

// insertion-sort => insertion sort
export const unformatLink = (str) => {
  return str.toLowerCase().replaceAll("-", " ");
};

// hello how are you
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
