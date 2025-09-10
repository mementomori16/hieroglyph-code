import { products } from "../components/data/products1";

// src/utils/imagePreloader.ts
export const preloadImages = (imageUrls: string[]) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

export const extractImageUrls = () => {
  // Combine all image URLs from your products
  const allProducts = [
    ...products.general,
    ...products.drawingsImages,
    ...products.shop,
    ...products.childhood,
    ...products.study,
    ...products.byzantine,
    ...products.characters,
    ...products.romanstone,
    ...products.nude,
    ...products.paintingsonpaper,
    ...products.drawings2009,
    ...products.drawings2016,
    ...products.drawings2017,
    ...products.drawings2021,
  ];

  return allProducts.map(product => product.image).concat(
    allProducts.flatMap(product => product.thumbnails)
  );
};