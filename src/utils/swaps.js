// Modifies original array
export const swapBarsMutable = (bars, idx, idx2, _bars) => {
  if (_bars) {
    const temp = bars[idx];
    bars[idx] = _bars[idx2];
    _bars[idx2] = temp;
  } else {
    const temp = bars[idx];
    bars[idx] = bars[idx2];
    bars[idx2] = temp;
  }
  return bars;
};

// Responsible for physically rearranging bars
export const swapLefts = (bars, idx, idx2) => {
  const tempLeft = bars[idx].left;
  bars[idx].left = bars[idx2].left;
  bars[idx2].left = tempLeft;

  return bars;
};

// Does not modify original array
export const swapBarsImmutable = (bars, idx1, idx2) => {
  return bars.map((bar, i, arr) => {
    if (i === idx1) {
      return { ...arr[idx2], left: arr[idx1].left };
    } else if (i === idx2) {
      return { ...arr[idx1], left: arr[idx2].left };
    } else {
      return bar;
    }
  });
};
