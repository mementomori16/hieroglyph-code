// src/types/Product.ts

export interface Testimonial {
  id: number;
  quote: string;
  clientName: string;
  clientTitle?: string;
  clientCompany?: string;
  clientImage: string;
}

export interface Product {
  id: number;
  title: string;
  date?: string;
  medium?: string;
  description: string | string[];
  image: string;
  thumbnails: string[];
  likes?: number;
  views?: number;
  link?: string;
  githubLink?: string;
  gitlabLink?: string;
  tags?: string[];
  price?: number;
  icons?: string[];
  technologies?: string[];
  testimonials?: Testimonial[];
}