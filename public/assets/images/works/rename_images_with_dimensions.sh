#!/bin/bash

# Check if a directory is passed as an argument, otherwise print an error and exit
if [[ -z "$1" ]]; then
  echo "Please provide a directory as an argument."
  exit 1
fi

# Get the directory from the first argument
IMAGE_DIR="$1"

# Check if the directory exists
if [[ ! -d "$IMAGE_DIR" ]]; then
  echo "Error: Directory '$IMAGE_DIR' does not exist."
  exit 1
fi

# Loop through all image files in the specified directory (jpg, jpeg, png, webp, etc.)
for image in "$IMAGE_DIR"/*.{jpg,jpeg,png,webp}; do
  # Check if the file exists (handle case where there are no matching images)
  if [[ -f "$image" ]]; then
    # Extract image dimensions using sips
    dimensions=$(sips -g pixelWidth -g pixelHeight "$image" | awk '/pixel/ {print $2}')

    # Get width and height from the sips output
    width=$(echo "$dimensions" | sed -n '1p')
    height=$(echo "$dimensions" | sed -n '2p')

    # Check if width and height were extracted correctly
    if [[ -n "$width" && -n "$height" ]]; then
      # Get the extension of the image
      extension="${image##*.}"
      # Get the base name of the image (without the extension)
      base_name=$(basename "$image" ".$extension")

      # New file name with width x height
      new_name="${base_name}-${width}x${height}.${extension}"

      # Rename the file
      mv "$image" "$IMAGE_DIR/$new_name"

      echo "Renamed $image to $new_name"
    else
      echo "Could not extract dimensions for $image"
    fi
  fi
done
