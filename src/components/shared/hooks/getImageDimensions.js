import { useState, useEffect } from "react";

const useImageDimensions = (path) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const extractDimensions = (path) => {
      const regex = /-(\d+)x(\d+)\.\w+$/; // Make the regex extension agnostic
      const match = path.match(regex);
      if (match) {
        const width = parseInt(match[1], 10);
        const height = parseInt(match[2], 10);
        return { width, height };
      }
      return { width: 0, height: 0 }; // default in case parsing fails
    };

    const extractedDimensions = extractDimensions(path);
    setDimensions(extractedDimensions);
  }, [path]);

  return dimensions;
};

export default useImageDimensions;
