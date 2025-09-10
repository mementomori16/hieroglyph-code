// src/utils/imagePreloader.ts

import { products } from "../../components/data/products";

export const preloadImages = (imageUrls: string[]): Promise<void> => {
  const promises = imageUrls.map(url => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image at ${url}`));
    });
  });
  return Promise.all(promises).then(() => {
    console.log("All images preloaded successfully.");
  }).catch(error => {
    console.error("One or more images failed to load:", error);
  });
};

export const extractAllImageUrls = () => {
  const allImages = [];

  products.services.forEach(product => {
    if (product.image) {
      allImages.push(product.image);
    }
    if (product.thumbnails) {
      allImages.push(...product.thumbnails);
    }
  });

  products.portfolio.forEach(product => {
    if (product.image) {
      allImages.push(product.image);
    }
    if (product.thumbnails) {
      allImages.push(...product.thumbnails);
    }
  });

  if (products.testimonials && products.testimonials.length > 0 && products.testimonials[0].clientImage) {
    allImages.push(products.testimonials[0].clientImage);
  }

  return allImages;
};