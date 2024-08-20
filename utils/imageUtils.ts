// lib/getImages.js
import fs from "fs";
import path from "path";

export async function getImages() {
  const imagesDirectory = path.join(process.cwd(), "images");
  const filenames = fs.readdirSync(imagesDirectory);
  return filenames.map((filename) => ({
    src: `../public/images/${filename}`,
    alt: filename.replace(/\.[^/.]+$/, ""), // Remove a extensão para usar como alt
  }));
}
