const getImageDimensions = (path) => {
  const regex = /-(\d+)x(\d+)\.\w+$/; // Make the regex extension agnostic
  const match = path.match(regex);
  if (match) {
    return { width: parseInt(match[1], 10), height: parseInt(match[2], 10) };
  }
  return { width: 0, height: 0 }; // Default in case parsing fails
};

export default getImageDimensions;
