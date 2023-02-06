// insertion sort => insertion-sort
export const formatLink = (str) => {
  const hyphenatedStr = str.toLowerCase().replaceAll(" ", "-");
  return `/algorithms/${hyphenatedStr}`;
};

// insertion-sort => insertion sort
export const unformatLink = (str) => {
  return str.toLowerCase().replaceAll("-", " ");
};
