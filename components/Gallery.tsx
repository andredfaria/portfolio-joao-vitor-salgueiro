// /app/components/Gallery.tsx

"use client"; // Adicione esta linha

import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/images");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data: string[] = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {images.map((src, index) => (
        <div
          key={index}
          style={{ flex: "1 1 calc(33.333% - 10px)", boxSizing: "border-box" }}
        >
          <img
            src={src}
            alt={`Image ${index}`}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
