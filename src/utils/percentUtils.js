// Returns the width of a percent of total width, as an integer
// FYI This is a pure function we can test separately
export function getWidthAsPercentOfTotalWidth(percent, totalWidth) {
  return parseInt(totalWidth * (percent / 100), 10);
}
