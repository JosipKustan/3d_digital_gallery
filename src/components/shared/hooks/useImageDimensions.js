const getImageDimensions = (path) => {
  const regex = /-(\d+)x(\d+)\.\w+$/; // Make the regex extension agnostic
  const match = path.match(regex);
  if (match) {
    return { width: parseInt(match[1], 10), height: parseInt(match[2], 10) };
  }
  return { width: 0, height: 0 }; // Default in case parsing fails
};

// Derives the small (half-resolution) image path from a big image path.
// Small images live in /small/ and have dimensions halved (e.g. 2016x1512 → 1008x756).
export const getSmallImagePath = (bigPath) =>
  bigPath
    .replace(/\/big\//i, "/small/")
    .replace(/-(\d+)x(\d+)(\.\w+)$/, (_, w, h, ext) =>
      `-${Math.floor(parseInt(w, 10) / 2)}x${Math.floor(parseInt(h, 10) / 2)}${ext}`
    );

export default getImageDimensions;
