// src/products.ts

import { Product } from "../types/Product";

// General Images
export const generalImages: Product[] = [
    {
        id: 1,
        title: 'Childhood Memories 2009 - 2010',
        medium: '2009-2011', // Moved medium here
        date: '2009-2011',
        description: '', // Leave description empty
        image: "https://i.ibb.co/NVvXTDq/Cold-World-2011-photoshoped.jpg",
        thumbnails: []
    },
    {
        id: 2,
        title: 'Study 2012 - 2021',
        medium: '2012-2021', // Moved medium here
        description: '', // Leave description empty
        date: '',
        image: "https://i.ibb.co/G5ppVYV/photoshoped-2-2025.jpg",
        thumbnails: []
    },
    {
        id: 3,
        title: 'Contemporary Tribute to: Timeless Icons 2005 - 2009',
        medium: '2005-2009', // Moved medium here
        description: '', // Leave description empty
        date: '',
        image: "https://i.ibb.co/L95rBsY/photoshopedsmall2025.jpg",
        thumbnails: []
    },
    {
        id: 4,
        title: 'Characters 2011',
        medium: '2011', 
        description: '', 
        date: '',
        image: "https://i.ibb.co/m5svwQw6/1.jpg",
        thumbnails: []
    },
    {
        id: 5,
        title: 'Roman Footprints: Art on Ancient Stone 2018',
        medium: '2018', // Moved medium here
        description: '', // Leave description empty
        date: '',
        image: "https://i.ibb.co/7XmNntg/Copy-of-marble-sculpture-of-Lely-Venus-2-c-BCE-2018.jpg",
        thumbnails: []
    },
    {
        id: 6,
        title: 'Nude 2008 - 2009',
        medium: '2008-2009', // Moved medium here
        description: '', // Leave description empty
        date: '',
        image: "https://i.ibb.co/4ds7LRB/Detail1-photoshoped-2025-small.jpg",
        thumbnails: []
    },
    {
        id: 7,
        title: 'Watercolors: Landscapes and Nude',
        medium: 'Landscapes and Nude', // Moved medium here
        description: '', // Leave description empty
        date: '',
        image: "https://i.ibb.co/bRJgHYYZ/small-and-darker.jpg",
        thumbnails: []
    },
    {
        id: 8,
        title: 'Homicide Study',
        medium: 'Study', 
        description: '', 
        date: '',
        image: "https://i.ibb.co/C33S2mQm/Perfect-size.jpg",
        thumbnails: []
    },
    {
        id: 9,
        title: 'Paintings on Paper',
        medium: '', 
        description: '', 
        date: '',
        image: "https://i.ibb.co/yBVGsqd9/IMG-5490photoshopedsmall2025.jpg",
        thumbnails: []
    },
    {
        id: 10,
        title: 'Earlier Works',
        medium: '', 
        description: '', 
        date: '',
        image: "https://i.ibb.co/fdpWfgVW/IMG-0407photoshoped.jpg",
        thumbnails: []
    },
];

// Drawings Images
export const drawingsImages: Product[] = [
    {
        id: 26,
        title: 'Prisons in Germany 2023',
        medium: '', // Moved medium here
        description: '', // Leave description empty
        date: '',
        image: "https://i.ibb.co/35FLhGKg/IMG-0953.jpg", 
        thumbnails: []
        
    },
    {
        id: 27,
        title: 'Drawings 2009',
        medium: 'Drawings from 2009', 
        description: '', 
        date: '2009',
        image: "https://i.ibb.co/jvw07nD7/IMG-4708-small.jpg", 
        thumbnails: []
    },
    {
        id: 28,
        title: 'Drawings 2012-13',
        medium: 'Drawings from 2012-2013', // Moved medium here
        description: '', // Leave description empty
        date: '2012-2013',
        image: "https://i.ibb.co/7xdpCB5C/IMG-4691-small.jpg", 
        thumbnails: []
    },
    {
        id: 29,
        title: 'Berlin 2016',
        medium: 'Drawings from 2016', // Moved medium here
        description: '', // Leave description empty
        date: '2016',
        image: "https://i.ibb.co/dJHPs3LZ/IMG-3256.jpg", 
        thumbnails: []
    },
    {
        id: 30,
        title: 'Drawings 2018',
        medium: 'Drawings from 2018', // Moved medium here
        description: '', // Leave description empty
        date: '2018',
        image: "https://i.ibb.co/Q7yfXzMY/e-t-Photoshoped-2025small.jpg", 
        thumbnails: []
    },
    {
        id: 31,
        title: 'Drawings 2021',
        medium: 'Drawings from 2021', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/Lhz24qrR/IMG-2955small.jpg", 
        thumbnails: []
    },
    {
        id: 32,
        title: 'Drawings 2024',
        medium: 'Drawings from 2024', // Moved medium here
        description: '', // Leave description empty
        date: '2024',
        image: "https://i.ibb.co/nsYvZfpv/Alina-2024-better-small.jpg", 
        thumbnails: []
    },
    {
        id: 33,
        title: 'Berlin 2017',
        medium: 'Drawings from 2017', // Moved medium here
        description: '', // Leave description empty
        date: '2017',
        image: "https://i.ibb.co/FkWFMqw0/IMG-2690.jpg", 
        thumbnails: []
    },
];

// Childhood Memories
export const childhoodMemories: Product[] = [
    {
        id: 100,
        title: 'Doggys',
        medium: 'Oil on Canvas 140 x 190 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2010',
        image: "https://i.ibb.co/0ZjxYCP/IMG-5294-small-photoshoped-2025.jpg",
        thumbnails: ['https://i.ibb.co/prrN6Ry/Detail-6.jpg', 'https://i.ibb.co/6Jj2H2R/IMG-5366.jpg', "https://i.ibb.co/XsDhwLf/IMG-5384-2.jpg", "https://i.ibb.co/k54SN73/good-closeup.jpg"],
        tags: ['childhoodMemories', 'oil on canvas', "Children", "Animals"]
    },
    {
        id: 101,
        title: 'Mcdonalds',
        medium: 'Oil on Canvas 145 x 191 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2010',
        link: 'https://www.haaretz.co.il/gallery/art/2012-12-31/ty-article/0000017f-f0ad-d223-a97f-fdfd704c0000',
        image: 'https://i.ibb.co/JtMLHtL/Mcdonalds-2010-Oil-on-canvas-145-x-191-cm-Ilya-Medvedev-smallphotoshoped.jpg',
        thumbnails: ['https://i.ibb.co/Jc6H7cf/IMG-5405-3.jpg', 'https://i.ibb.co/2WPVdJr/IMG-5425-3.jpg', 'https://i.ibb.co/wBfgsLQ/IMG-5388-3.jpg'],
        tags: ['childhoodMemories', 'oil on canvas', "girls", "woman", "restourant","mcdonalds", "meal", "food", "moscow" ]
    },
    {
        id: 102,
        title: 'No Name',
        medium: 'Oil on Canvas 90 x 50 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2009',
        image: "https://i.ibb.co/GPnmgqp/No-Name-photoshoped-2025.jpg",
        thumbnails: ["self portraite", "oil on canvas"],
        tags: ["self portraite", "oil on canvas"],
    },
    {
        id: 103,
        title: 'Breastfeeding',
        medium: 'Oil on Canvas 51 x 41 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2011',
        link: 'https://www.erev-rav.com/archives/11793',
        image: "https://i.ibb.co/72fxGDj/Breastfeeding-photoshoped-1-11-2024-Oil-on-canvas-51-x-41-cm-Ilya-Medvedev-2011.jpg",
        thumbnails: ["https://i.ibb.co/nC9rGwD/IMGP4635-1-photoshoped-2025.jpg"],
        tags: ['breastfeeding', 'oil on canvas', "children", "parents", "mother","mother and child", "virgin and child"]
        
    },
    {
        id: 104,
        title: 'Subway in Moscow',
        medium: 'Acrylic on Canvas 70 x 50 cm', // Moved medium here
        date: '2009',
        description: '', // Leave description empty
        image: "https://i.ibb.co/L6cG1YK/Subway-in-Moscowphotoshoped-2025-small.jpg",
        thumbnails: ["https://i.ibb.co/6bpnFX7/IMG-1688-small.jpg"],
        tags: ['women', 'female', 'blond', "brunet", "subway", "moscow", "woman", "oil on canvas","big nouse" ]
    },
    {
        id: 105,
        title: 'Friendship',
        medium: 'Oil on Canvas 190 x 135 cm', // Moved medium here
        date: '2010',
        description: '', // Leave description empty
        image: "https://i.ibb.co/zHLsj3x/IMG-5474-photoshoped-2025-small.jpg",
        thumbnails: ["https://i.ibb.co/V3jvjsZ/IMG-5465.jpg", 'https://i.ibb.co/1JnZYcb/IMG-5476-3.jpg'],
        tags: ['frindship', 'woman', 'woman and men', "blond", "oil on canvas","big nouse" ]
    },
    {
        id: 106,
        title: 'The Great Worker',
        medium: 'Oil on Canvas 175 x 195 cm', // Moved medium here
        date: '2010',
        description: '', // Leave description empty
        link: 'https://www.haaretz.co.il/gallery/art/2012-12-31/ty-article/0000017f-f0ad-d223-a97f-fdfd704c0000',
        image: "https://i.ibb.co/0JyMZVV/The-great-worker-9-11-Oil-on-canvas-175-x-195-cm-Ilya-Medvedev-2010-photoshoped.jpg",
        thumbnails: ["https://i.ibb.co/yqxpSZN/IMG-5443.jpg", "https://i.ibb.co/LYf7Rkd/IMG-2666-2.jpg"],
        tags: ['childhoodmemories', 'apple', 'oil on canvas', "landscape", "computer", "office","big nouse" ]
    },
    {
        id: 107,
        title: 'Mother and Child',
        medium: 'Oil on Canvas 70 x 50 cm', // Moved medium here
        date: '2010',
        description: '', // Leave description empty
        image: "https://i.ibb.co/N2FmXhT/IMG-5573.jpg",
        thumbnails: [],
        tags: ['oil on canvas', "children", "parents", "mother","mother and child", "virgin and child", "school", "childrengarden", "teacher","love","women", "woman"]
    },
    {
        id: 108,
        title: 'Cold World',
        medium: 'Oil on Canvas 70.5 x 104.5 cm', // Moved medium here
        date: '2010',
        description: '', // Leave description empty
        image: "https://i.ibb.co/NVvXTDq/Cold-World-2011-photoshoped.jpg",
        thumbnails: ["https://i.ibb.co/x8GhbzR/photoshoped.jpg", "https://i.ibb.co/mX69j9f/IMG-5581.jpg"],
        tags: ['oil on canvas', "children", "parents", "mother","mother and child", "virgin and child", "snow", "winter", "kiss", "love", "cars", "woman", "women", "son", "boy", "self portraite"]

    },
    {
        id: 109,
        title: 'Childrens Court Yard',
        medium: 'Oil on Canvas 140 x 190 cm', // Moved medium here
        date: '2010',
        description: '', // Leave description empty
        image: 'https://i.ibb.co/JjQWfCt/new-photoshoped-2025-Children-s-court-yard-2010-140-x-190-cm-Ilya-Medvedev.jpg',
        thumbnails: ['https://i.ibb.co/BTNXJnQ/IMG-5455-3.jpg', 'https://i.ibb.co/YckwNWs/IMG-5461-2.jpg', "https://i.ibb.co/bFRkgsX/IMG-5451-3.jpg"],
        tags: ['oil on canvas', "children", "parents", "mother","mother and child", "virgin and child", "snow", "winter", "women", "son", "boy", "girl", "self portraite", "playground", "big nouse"]

    },
    {
        id: 110,
        title: 'Playground of Violence',
        medium: 'Oil on Canvas 143 x 193 cm', // Moved medium here
        date: '2010',
        description: '', // Leave description empty
        image: "https://i.ibb.co/ZMn8CWY/Drived-boy-with-a-machine-gun-in-his-hands-Oil-on-canvas-143-x-193-cm-2010-ph-2.jpg",
        thumbnails: ["https://i.ibb.co/hdD5XQW/IMG-5504.jpg", "https://i.ibb.co/GtXHz5W/IMG-5506.jpg", "https://i.ibb.co/xYg5n5h/IMG-5509.jpg", "https://i.ibb.co/ZLYfZFs/IMG-5511-1.jpg"],
        tags: ["childhoodmemories", 'oil on canvas', "children", "boy", "girl", "self portraite", "playground", "machine gun", "dead", "killed", "police", "school", "blood"], 

    },
    {
        id: 111,
        title: 'Restroom Thoughts',
        medium: 'Acrylic on Wall 225 x 285 cm', // Moved medium here
        date: '2010',
        description: '', // Leave description empty
        image: 'https://i.ibb.co/gmLWFZ2/IMGP3423.jpg',
        thumbnails: ["https://i.ibb.co/nk6Sgxr/IMGP3426-2.jpg"],
        tags: ['acrylic', "self portraite", "toilet", "restroom", "toilet paper", "big nouse"], 

    },
    {
        id: 112,
        title: 'The Gym',
        medium: 'Oil on Canvas 140 x 190 cm', // Moved medium here
        date: '2010',
        description: '', // Leave description empty
        image: 'https://i.ibb.co/txFpDPM/999.jpg',
        thumbnails: ['https://i.ibb.co/BNNM022/The-Gym-full-detail-photoshoped.jpg', "https://i.ibb.co/QbhyZd4/IMGP3792.jpg", "https://i.ibb.co/mtVt6rH/IMGP3796-photoshoped-2025.jpg", "https://i.ibb.co/RbsBjhC/IMG-2664-2.jpg"],
        tags: ['oil on canvas', "woman and men", "gym", "sport", "ass", "blond", "big nouse"], 

    },
];

export const services: Product[] = [
    {
    id: 200,
    title: 'Web Application & E-commerce Development',
    description: 'I specialize in building dynamic and user-friendly web applications tailored to your specific business objectives. From initial concept and design to robust development and seamless deployment, I ensure your application is scalable, secure, and provides an exceptional user experience across all devices.',
    image: "https://i.ibb.co/TBMptrX6/100500.jpg",
    thumbnails: [],
    tags: [],
  },
  {
    id: 201,
    title: 'Mobile App Development',
    description: 'We create native and cross-platform mobile applications tailored to your specific business needs, ensuring optimal performance and user experience across all devices.',
    image: "https://i.ibb.co/v6p8TJx5/Gemini-Generated-Image-1kv4o31kv4o31kv4.jpg",
    thumbnails: [],
    tags: [],
  },
  {
    id: 202,
    title: 'Static Website Development',
    description: 'For businesses needing a simple yet effective online presence, we offer static website development services that are fast, secure, and easy to maintain.',
    image: "https://i.ibb.co/Fqb2CSgc/Gemini-Generated-Image-1xv0al1xv0al1xv0.jpg",
    thumbnails: [],
    tags: [],
  },
  {
    id: 203,
    title: 'WordPress Development',
    description: 'Leverage the power and flexibility of WordPress with our development services, from custom themes and plugins to website setup and optimization.',
    image: "https://i.ibb.co/20Dg6bjN/unnamed.png",
    thumbnails: [],
    tags: [],
  },
  {
    id: 204,
    title: 'Website Maintenance & Content Management',
    description: 'Keep your website running smoothly with our maintenance and content management services, ensuring your online information is always up-to-date and secure.',
    image: "https://i.ibb.co/vxBJytGp/freelance-work-7308505-1920.png",
    thumbnails: [],
    tags: [],
  },
];

// Portraits and Characters
export const characters: Product[] = [
    {
        id: 300,
        title: 'This is an Ass',
        medium: 'Oil on Canvas 100 x 75 cm', // Moved medium here
        date: '2011',
        description: '', // Leave description empty
        image: "https://i.ibb.co/q5HmDTw/Ass-Oil-on-canvas-100-x-75-cm-Ilya-Medvedev-2011-photoshoped2025.jpg",
        thumbnails: [],
        tags: ["oil on canvas", "ass", "sky"],

    },
    {
        id: 301,
        title: 'Lost Teacher',
        medium: 'Oil on Canvas 100 x 80 cm', // Moved medium here
        date: '2011',
        description: '', // Leave description empty
        image: "https://i.ibb.co/2YjRY67/IMG-9810.jpg",
        thumbnails: ["https://i.ibb.co/ygCX2RP/IMG-9819-small.jpg"],
        tags: ["oil on canvas", "teacher", "portraite", "book", "man", "characters"],
    },
    {
        id: 302,
        title: 'Sad Song & Crying Men',
        medium: 'Oil on Canvas 140 x 145 cm', // Moved medium here
        date: '2011',
        description: '', // Leave description empty
        image: "https://i.ibb.co/bFyMm5Q/Silent-song-Oil-on-canvas-145-x-140-cm-Ilya-Medvedev-2011-photoshoped-2025-small.jpg",
        thumbnails: ["https://i.ibb.co/tpVLFtSk/photoshoped2011-2025small.jpg","https://i.ibb.co/zHFL6VjH/IMG-1277.jpg"],
        tags: ["oil on canvas", "men", "guitar", "song", "friendship", "crying", "two men","characters"], 
    },
    {
        id: 303,
        title: 'Untitled',
        medium: 'Oil on Canvas 120 x 100 cm', // Moved medium here
        date: '2011',
        description: '', // Leave description empty
        image: "https://i.ibb.co/MD4Kp61/Talking-about-undergraund-music-2011-Oil-on-canvas-120-x-100-cm.jpg",
        thumbnails: ["https://i.ibb.co/482yN1x/IMG-8454.jpg", "https://i.ibb.co/fktbSJY/IMG-8456.jpg"],
        tags: ["oil on canvas", "boy", "portraite", "man", "penis","characters"],
    },
    {
        id: 304,
        title: 'Orgasm',
        medium: 'Oil on Canvas 120 x 100 cm', // Moved medium here
        date: '2011',
        description: '', // Leave description empty
        image: "https://i.ibb.co/GFB9Prp/IMG-0514-DARKER-SMALLjpg.jpg",
        thumbnails: [],
        tags: ["characters","nude", "breast", "tits"]
    },
    {
        id: 305,
        title: 'Claws',
        medium: 'Oil on Canvas 130 x 105 cm', // Moved medium here
        date: '2011',
        description: '', // Leave description empty
        image: "https://i.ibb.co/wCJqBbw/Claws-Oil-on-canvas-130-x-105-cm-photoshoped-2025.jpg",
        thumbnails: ["https://i.ibb.co/hgYYv59/IMG-9365small.jpg"],
        tags: ["evil", "claws","characters"]
    },
    {
        id: 306,
        title: 'This is a Brain',
        medium: 'Oil on Canvas 100 x 80 cm', // Moved medium here
        date: '2011',
        description: '', // Leave description empty
        image: "https://i.ibb.co/mqLBsRn/Brain-Oil-on-canvas-100-x-80-cm-Ilya-Medvedev-2011-photoshoped-2025-2.jpg",
        thumbnails: [],
        tags: ['brain', 'oil on canvas',"sky"]
    },
    {
        id: 307,
        title: 'Behind the Smile',
        medium: 'Oil on Canvas 130 x 105 cm', // Moved medium here
        date: '2011',
        description: '', // Leave description empty
        image: "https://i.ibb.co/bMjk6pV5/Detail-small.jpg",
        thumbnails: ["https://i.ibb.co/CsbdBzdK/Hungry-Lady-Oil-on-canvas-130-x-105-cm-Ilya-Medvedev-2011-smalljpg.jpg"],
        tags: ['evil', 'characters']
    },
    {
        id: 308,
        title: 'Sad Song',
        medium: 'Oil on paper 34.5 x 24.5 cm', 
        date: '2011',
        description: '', 
        image: "https://i.ibb.co/WpgmbXgg/IMG-4696.jpg",
        thumbnails: [],
        tags: ["guitar", "song","crying","characters"], 
    },
    {
        id: 309,
        title: 'The Space Between Notes & Between Thoughts',
        medium: 'Oil on paper 34.5 x 24.5 cm', 
        date: '2011',
        description: '', 
        image: "https://i.ibb.co/Lzcp8hzf/Oil-on-paper-34-5-x-24-5-cm-Ilya-Medvedev-2011-small.jpg",
        thumbnails: [],
        tags: ["guitar", "song","crying","characters"], 
    },
];     

// Study 2012-2021
export const studyImages: Product[] = [
    {
        id: 400,
        title: 'Vanitas',
        medium: 'Oil on canvas', // Moved medium here
        date: '2020 - 2021',
        description: '', // Leave description empty
        image: "https://i.ibb.co/G5ppVYV/photoshoped-2-2025.jpg",
        thumbnails: ["https://i.ibb.co/MZKhM79/detail-photoshoped-2025.jpg", "https://i.ibb.co/R4QyCbmz/second-detail-photoshoped-2025-small.jpg", "https://i.ibb.co/jPnBxqzN/IMG-3357-signature-photoshoped-2025.jpg"],
        tags: ['skulls',"flowers", "fruits", "still life", "dead"]
    },
    {
        id: 401,
        title: 'Tereza posing on green leather Sofa',
        medium: 'Oil on Canvas 60 x 50 cm', // Moved medium here
        date: '2012',
        description: '', // Leave description empty
        image: "https://i.ibb.co/dbGbQ8b/IMG-4550.jpg",
        thumbnails: ["https://i.ibb.co/gTVsb99/IMG-4840-darker-kess-contrast-2025.jpg"],
        tags: ['portraite', 'oil portraite',"sofa", "woman portraite"]
    },
    {
        id: 402,
        title: 'Alla posing',
        medium: 'Oil on Canvas 120 x 80 cm', // Moved medium here
        date: '2012',
        description: '', // Leave description empty
        image: "https://i.ibb.co/2scPW78/IMG-4906photoshoped-2025-small.jpg",
        thumbnails: ["https://i.ibb.co/PZjzG17/IMG-4911small.jpg"],
        tags: ['nude',"nude posing","ass"]
    },
];

// Roman Stone
export const romanstone: Product[] = [
    {
        id: 500,
        title: 'Lely Venus',
        medium: 'Acrylic on primed antique Roman Marble',
        date: '2018',
        description: `This piece features a copy of the <a href="https://en.wikipedia.org/wiki/Lely_Venus">Lely Venus</a> sculpture, dated 1627, believed to be a replica of a 2nd-century statue. Painted on an ancient marble fragment from <a href="https://en.wikipedia.org/wiki/Caesarea_Maritima">Caesarea Maritima</a>, the artwork connects the past with the present. 
    
        After a storm in 2010 shattered the ruins of Caesarea, artist Ilya Medvedev was inspired by the polished surface of the marble remnants to create this piece. The Lely Venus, a symbol of beauty, has influenced artists throughout history. This piece fits easily in the hand or pocket, merging antiquity with contemporary expression.`,
        image: "https://i.ibb.co/7XmNntg/Copy-of-marble-sculpture-of-Lely-Venus-2-c-BCE-2018.jpg",
        thumbnails: ["https://i.ibb.co/hRkVJ4L8/IMG-9900.jpg"],
        tags: ['nude', 'acrylic on stone',"nude posing", "sculpture", "stone", "black", "roman"]
    },
    {
        id: 501,
        title: 'Sleeping Hermaphroditus ',
        medium: 'Acrylic on primed antique Roman Marble', // Moved medium here
        date: '2018',
        description: '', // Leave description empty
        image: "https://i.ibb.co/YXQ7YrY/IMG-2610.jpg",
        thumbnails: [],
        tags: ['acrylic on stone',"nude", "sculpture", "stone", "black", "roman", "ass", "transgender"]

    },
    {
        id: 502,
        title: 'Gorgon Medusa',
        medium: 'Acrylic on primed antique Roman Marble', // Moved medium here
        date: '2018',
        description: '', // Leave description empty
        image: "https://i.ibb.co/m6myyd1/Copy-of-marble-sculpture-of-Gorgon-Medusa-2-c-BCE-on-a-piece-of-anchient-Roman-marble-found-in-Caesa.jpg",
        thumbnails: ["https://i.ibb.co/SNzNX59/2-Copy-of-marble-mask-of-Gorgon-Medusa-2-c-BCE-on-a-piece-of-ancient-Roman-marble-found-in-Caesarea.jpg", "https://i.ibb.co/xCPfkG3/IMG-2652-SMALL.jpg"],
        tags: ['acrylic on stone', "sculpture", "stone", "black", "roman", "mask", "evil"]

    },
    {
        id: 503,
        title: 'Goddes Luna',
        medium: 'Acrylic on primed antique Roman Marble', // Moved medium here
        date: '2018',
        description: '', // Leave description empty
        image: "https://i.ibb.co/yP25J4z/IMG-2626.jpg",
        thumbnails: [],
        tags: ['acrylic on stone', "sculpture", "stone", "black", "roman", "goddes"]
    }
];

// Nude
export const nude: Product[] = [
    {
        id: 600,
        title: 'The Dance',
        medium: 'Oil on canvas 200 x 111 cm', // Moved medium here
        date: '2008',
        description: '', // Leave description empty
        image: "https://i.ibb.co/sQKJtd4/photoshoped-2025-Royal-Gore-Oil-on-canvas-111-x-200-cm-2008-Ilya-Medvedev.jpg",
        thumbnails: ["https://i.ibb.co/4ds7LRB/Detail1-photoshoped-2025-small.jpg"],
        tags: ["nude", "black","tits", "breast"]
    },
    {
        id: 601,
        title: 'Nude on Chair',
        medium: 'Acrylic on canvas 120 x 80 cm', // Moved medium here
        date: '2009',
        description: '', // Leave description empty
        image: "https://i.ibb.co/v6r7zC2X/IMGP3310-test5.jpg",
        thumbnails: ["https://i.ibb.co/CKnKnmCj/IMGP3286small.jpg", "https://i.ibb.co/dwmvhSYc/IMGP3308.jpg"],
        tags: ["acrylic on canvas", "nude","girl", "tits", "breast", "vagina", "nude posing"]

    },
];
// Homicide
export const homicide: Product[] = [
    {
        id: 610,
        title: 'Decomposition Study: Portrait of a Drowned Woman',
        medium: 'Oil and acrylic on canvas 50 x 30 cm', 
        date: '2018',
        description: 'Portrait of a Drowned Woman draws inspiration from works like Jacopo Ligozzi’s Postmortem Decomposition Process - Vanitas (c. 1600 – 10), which presents the decayed skull of a human as a reflection on mortality. In a similar vein, this hyperrealistic portrait depicts a woman in the early stages of decomposition, submerged in water. Her skin is green and mottled, blown up lipps, and eyes covered by a white film, offering a raw and unflinching view of the body’s inevitable decay. The floating strands of her hair and the yellowed fat from her tissue echo the grim, yet fascinating, study of life’s transience and the relentless passage of time, themes explored in Ligozzi’s own vanitas painting.', 
        image: "https://i.ibb.co/kg9sQ4qz/Portraite-of-drowned-woman-2018-small.jpg",
        thumbnails: ["https://i.ibb.co/tpzsJfKX/IMG-3388-kjpg.jpg"],
        tags: ["homicide", "dead"]
    },
    {
        id: 611,
        title: 'Ed Gein',
        medium: 'Oil on canvas 120 x 80 cm', 
        date: '2018',
        description: '', 
        image: "https://i.ibb.co/Ds5vz7w/IMG-0355.jpg",
        thumbnails: [],
        tags: ["ed gein","serial killer", "homicide", "dead"]

    },
];
// Paintings on Paper
export const paintingsonpaper: Product[] = [
    {
        id: 700, 
        title: 'Arina',
        medium: 'Acrtylic on paper', // Add medium if needed
        description: '', // Leave description empty
        date: '2009',
        image: "https://i.ibb.co/KxpF0V10/Arina-Acrylic-on-paper-2009-Ilya-Medvedev-photoshoped-small-jpg.jpg",
        thumbnails: [],
        tags: ['acrylic on paper',"Arina" ]
    },
    {
        id: 701, 
        title: 'Lenin will live forever! & Lenin in the Mousoleum',
        medium: 'Acrtylic on paper', 
        description: `In May 1991, artist Ilya Medvedev visited the <a href="https://en.wikipedia.org/wiki/Lenin%27s_Mausoleum">Lenin Mausoleum</a> in Moscow. The silence, the dim light with a faint burgundy hue, and the sight of Lenin's preserved body (1870-1924) left a lasting impression. This painting on paper, was inspired by the song <a href="https://www.youtube.com/watch?v=TMP7PxwrQjo&ab_channel=flos">"Song about Lenin"</a> by the punk-rock band <a href="https://en.wikipedia.org/wiki/Grazhdanskaya_Oborona">Grazhdanskaya Oborona</a>, which features the slogan "Lenin Will Live Forever!" This slogan is derived from a poem by the poet <a href="https://en.wikipedia.org/wiki/Vladimir_Mayakovsky">Vladimir Mayakovsky</a> (1893-1930) titled <a href="https://en.wikipedia.org/wiki/Vladimir_Ilyich_Lenin_(poem)">"Komsomolskaya (Komsomol Song)"</a>. It was commonly seen in the USSR on numerous socialist realism posters, many of which depicted Lenin.

        There are only a few works that portray Lenin's body in the coffin, and even fewer that depict him in the mausoleum. Among these are the works of <a href="https://lenin.shm.ru/en/v-i-lenin-in-the-coffin-5/">Kuzma Petrov-Vodkin</a> (1878-1939), <a href="https://lenin.shm.ru/kartina-v-i-lenin-na-smertnom-odre/">Sergey Malyutin</a> (1859-1937), and <a href="https://lenin.shm.ru/v-i-lenin-na-smertnom-odre/">Peter Kiselis</a> (1890-1940), which depict Lenin's body in the coffin (posthumous portraits), as well as a singular known work by <a href="https://ria.ru/20240801/mavzoley-1963193914.html#pv=g%3D1963193914%2Fp%3D1963141861">Yevgeny Katsman</a> (1890-1976), which shows Lenin's preserved body in the mausoleum in 1931.`,
        date: "2010",
        image: "https://i.ibb.co/yBVGsqd9/IMG-5490photoshopedsmall2025.jpg",
        thumbnails: [],
        tags: ["Moscow",'acrylic on paper',"ussr", "dead" ]
    },

    {
        id: 702,
        title: 'Street Fellows',
        medium: 'Acrylic on Paper 42 x 59.4 cm', // Moved medium here
        date: '2010',
        description: '', // Leave description empty
        image: 'https://i.ibb.co/kGnw0q1/IMG-4719.jpg',
        thumbnails: [],
        tags: ['acrylic on paper', "cars", "men", "street", "basketball"], 

    },
    {
        id: 703, 
        title: 'Andrei Chikatilo',
        medium: 'Acrtylic on paper', 
        description: 'Portrait of serial killer <a href="https://en.wikipedia.org/wiki/Andrei_Chikatilo">Andrei Chikatilo</a> (1936-1994).', 
        date: '2011',
        image: "https://i.ibb.co/HpqPntLJ/Andrey-Romanovich-Chikatilo-Acrylic-on-paper-34-5-x-24-5-cm-2011-Ilya-Medvedev-1111.jpg",
        thumbnails: [],
        tags: ['acrylic on paper',"ussr", "Chikatilo", "evil", "serial killer" ]
    },
    {
        id: 704, 
        title: 'Arina at home in the evening',
        medium: 'Acrtylic on paper', 
        description: '', 
        date: '2009',
        image: "https://i.ibb.co/3mm5yyCs/Arina-in-the-evening-Acrylic-on-paper-2009-Ilya-Medvedev2.jpg",
        thumbnails: [],
        tags: ['acrylic on paper', "Arina"]
    },
    {
        id: 705, 
        title: 'Life in Motion: A February day at Claraplatz, Basel, Switzerland',
        medium: 'Oil on paper', 
        description: '', 
        date: '2021',
        image: "https://i.ibb.co/LGQhQKf/IMG-3206.jpg",
        thumbnails: [],
        tags: ['acrylic on paper']
    },
    {
        id: 706, 
        title: 'Grandmother in the Village',
        medium: 'Guash on paper', 
        description: '', 
        date: '1999',
        image: "https://i.ibb.co/kV5BQwQC/Village-granmma-1999.jpg",
        thumbnails: [],
        tags: ['acrylic on paper', "black"]
    },
    {
        id: 707,
        title: 'Nude in dark room',
        medium: 'Acrylic on paper 29 x 21 cm', // Moved medium here
        date: '2016',
        description: '', // Leave description empty
        image: "https://i.ibb.co/DDXt2Dqm/nude-in-dark-room.jpg",
        thumbnails: [],
        tags: ['acrylic on paper', "nude", "tits", "black"]

    }
];

// Drawings pages
export const drawings2009: Product[] = [
    {
        id: 720,
        title: 'Moscow Metro I',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: "Outdoor sketch",
        date: '2009',
        image: "https://i.ibb.co/6bpnFX7/IMG-1688-small.jpg", 
        thumbnails: [],
        tags: ["drawings2009", "subway", "moscow"],
    },
    {
        id: 721,
        title: 'Moscow Metro II',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: "Outdoor sketch",
        date: '13.09.2009',
        image: "https://i.ibb.co/XVQM4qX/IMG-1685.jpg", 
        thumbnails: [],
        tags: ["drawings2009", "subway", "moscow"],
    },
    {
        id: 722,
        title: 'Hulud',
        medium: 'Graphite and ink on paper 30 x 21 cm', 
        description: "Hulud, a student in Art Academy, listening to collective critisism",
        date: '5.5.2009',
        image: "https://i.ibb.co/twnYFDtT/IMG-4708phsmall.jpg", 
        thumbnails: [],
        tags: ["drawings2009","palestine"],
    },
    {
        id: 723,
        title: 'Young woman from Dushanbe, Tadjikistan',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: "",
        date: '2008',
        image: "https://i.ibb.co/NgNYmsjz/DSCF3825small.jpg", 
        thumbnails: [],
        tags: ["drawings2009"],
    },
    {
        id: 724,
        title: 'Student at the class',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: "Student in Art Academy",
        date: '2009',
        image: "https://i.ibb.co/G4gjSDhK/Arab-lady-Pencil-on-paper-2009-Ilya-Medvedev.jpg", 
        thumbnails: [],
        tags: ["drawings2009"],
    },
    {
        id: 725,
        title: 'Arina',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: "",
        date: '2009',
        image: "https://i.ibb.co/PkPNJz8/IMGP0923.jpg", 
        thumbnails: [],
        tags: ["drawings2009", "Arina"],
    },
    {
        id: 726,
        title: 'Nude model',
        medium: 'Graphite on paper 84 x 59 cm', 
        description: "",
        date: '21.01.2008',
        image: "https://i.ibb.co/7Jd9TJbj/DSCF3610.jpg", 
        thumbnails: [],
        tags: ["drawings2009", "nude", "tits", "drawing nude"],
    },
    {
        id: 727,
        title: 'Artist and Teacher David Ginton',
        medium: 'Graphite on paper 84 x 59 cm', 
        description: "",
        date: '21.01.2008',
        image: "https://i.ibb.co/jZwMBp6R/gintonphotoshopedsmall.jpg", 
        thumbnails: [],
        tags: ["drawings2009", "teacher"],
    },
    {
        id: 728,
        title: 'Reut',
        medium: 'Graphite on paper 84 x 59 cm', 
        description: "Student in Art Academy",
        date: '2009',
        image: "https://i.ibb.co/5WV3hZPn/IMG-4730.jpg", 
        thumbnails: [],
        tags: ["drawings2009", "teacher"],
    },

]
export const drawings2016: Product[] = [

    {
        id: 750,
        title: 'Nude youn woman',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: "",
        date: '2016',
        image: "https://i.ibb.co/23HCRmxF/IMG-3012.jpg", 
        thumbnails: ["https://i.ibb.co/p6fF4vHK/IMG-3012closeup.jpg"],
        tags: ["nude", "tits"],
        
    },
    {
        id: 751,
        title: 'Anna',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: 'Street musician from Italy, living in Berlin', 
        date: '2016',
        image: "https://i.ibb.co/N2Scz5fs/IMG-3009batter.jpg", 
        thumbnails: [],
        tags: ["punk", "drawings-2016" ],
    },
    
    {
        id: 752,
        title: 'Penis',
        medium: 'Oil pastels on paper 21 x 30 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2016',
        image: "https://i.ibb.co/XZW3SpLr/IMG-2991.jpg", 
        thumbnails: [],
        tags: ["drawing", "oil pastels", "nude", "penis"],

    },
    {
        id: 753,
        title: 'Karina',
        medium: 'Graphite on paper 21 x 30 cm', // Moved medium here
        description: 'Punk woman and a student from Berlin', // Leave description empty
        date: '2016',
        image: "https://i.ibb.co/yBMJSwmQ/IMG-2986small.jpg", 
        thumbnails: [],
        tags: ["drawings-2016", "punk"],
    },
    {
        id: 754,
        title: 'Alexander Pichushkin',
        medium: 'Graphite on paper 30 x 21 cm', // Moved medium here
        description: 'Portrait of Alexander Pichushkin (born 1974), known as the "Chessboard Killer," a Russian serial murderer convicted in 2007 for 48 killings. The drawing is based on a courtroom photograph taken during his trial in Moscow. Pichushkin is shown seated behind glass, looking out from beneath his brow.', // Leave description empty
        date: '2016',
        image: "https://i.ibb.co/1JPTGvk9/IMG-3019.jpg", 
        thumbnails: [],
        tags: ["serial killer","homicide"],
    },
    {
        id: 755,
        title: 'Nadine',
        medium: 'Graphite on paper 30 x 21 cm', // Moved medium here
        description: 'Social worker from Berlin', // Leave description empty
        date: '2016',
        image: "https://i.ibb.co/Q33241hX/IMG-3267.jpg", 
        thumbnails: [],
        tags: ["drawings-2016"],
    },
    {
        id: 756,
        title: 'Vulva and Anus',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: "",
        date: '2016',
        image: "https://i.ibb.co/dJHPs3LZ/IMG-3256.jpg", 
        thumbnails: [],
        tags: ["penis", "tits", "nude"],
    },
    {
        id: 757,
        title: 'Andrei Chikatilo',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: "Portrait of Andrei Chikatilo (1936 – 1994), one of the most notorious serial killers in Soviet history. He was convicted in 1992 for the murder of 52 people, committed between 1978 and 1990. The drawing is based on a photograph taken during an interview in the early 1990s, in which Chikatilo appears composed, wearing a shirt bearing the emblem of the 1980 Moscow Olympic Games, with hair and a mustache. The work captures a rare moment before his trial.",
        date: '2016',
        image: "https://i.ibb.co/NdYdpVm9/IMG-3266small2.jpg", 
        thumbnails: [],
        tags: ["chikatilo", "serial killer"],
    },
    {
        id: 758,
        title: 'Kogan',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: 'Young man from Kazachstan, begging in the streets of Liepzig, Germany', 
        date: '2016',
        image: "https://i.ibb.co/7JFJSTDS/IMG-2985.jpg", 
        thumbnails: [],
        tags: ["punk", "homeless"],
    },
    {
        id: 759,
        title: 'Clara',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: 'Young woman from Brazil, living in Berlin', 
        date: '2016',
        image: "https://i.ibb.co/ymJy90JZ/IMG-3016small2.jpg", 
        thumbnails: [],
        tags: ["drawings-2016"],
    },
    {
        id: 760,
        title: 'Hen',
        medium: 'Oil pastels on paper 21 x 30 cm', 
        description: '', 
        date: '2016',
        image: "https://i.ibb.co/gLBfPfn6/IMG-2982small.jpg", 
        thumbnails: [],
        tags: ["punk", "oil pastels" ],
    },
    {
        id: 761,
        title: 'Charly-Charlott',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: 'Street sketch: Punk woman living in Berlin, originaly from other part of Germany', 
        date: '2016',
        image: "https://i.ibb.co/dJXtxy7k/IMG-3261.jpg", 
        thumbnails: [],
        tags: ["punk"],
    },
    {
        id: 762,
        title: 'Ed Gein',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: 'Portrait of Ed Gein (1906 – 1984), the notorious American murderer and necrophile whose crimes deeply influenced the modern horror genre. Exhumed numerous corpses from local cemeteries, using parts of the bodies to create masks, furniture, and a full torso corset made from female human skin — artifacts of his obsessive, ritualistic behavior. The drawing is based on a photograph taken on November 19, 1957, as Gein was being escorted to the Wisconsin State Crime Lab following his arrest. His subdued, almost passive expression contrasts sharply with the grotesque reality of his inner world, lending the portrait a haunting psychological depth.', 
        date: '2016',
        image: "https://i.ibb.co/wNqRgT1p/IMG-3260.jpg", 
        thumbnails: [],
        tags: ["serial Killer", "homicide", "ed gein"],
    },
    {
        id: 763,
        title: 'Max',
        medium: 'Graphite on paper 30 x 21 cm', 
        description: 'Punk from Uzbekistan, currently living in Berlin', 
        date: '2016',
        image: "https://i.ibb.co/wrQ3DsQ0/IMG-3258.jpg", 
        thumbnails: [],
        tags: ["punk"],
    },
    
];

export const drawings2021: Product[] = [
    {
        id: 900,
        title: 'Nude Transgender posing on the floor',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/bRCyH8nn/IMG-0105small.jpg", 
        thumbnails: [],
        tags: ["transgender", "penis"]
    },
    {
        id: 901,
        title: 'Homeless people',
        medium: 'Graphite on paper 21 cm x 30 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/N6PbVmqq/IMG-2952small.jpg", 
        thumbnails: ["drawings2021"]
    },
    {
        id: 902,
        title: 'Small Basel',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/zhNW1ZF5/IMG-2972.jpg", 
        thumbnails: ["drawings2021", "basel", "switzerland", "rhine"]
    },
    {
        id: 903,
        title: 'Nude beach in Basel',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/chJSzr6F/IMG-2964.jpg", 
        thumbnails: [],
        tags:["drawings2021", "gay", "transgender", "nude drawing", "beach", "rhine"]
    },
    {
        id: 904,
        title: 'Topless in Birsköpfli',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/fdWc51rP/IMG-8699small.jpg", 
        thumbnails: ["https://i.ibb.co/35TBHwgk/birsfelden-small.jpg"],
        tags:["drawings2021", "nude drawing", "topless"]
    },
    {
        id: 905,
        title: 'Group of 3 women in naturist beach in France',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/Qv9wp6mx/IMG-0111.jpg", 
        thumbnails: [],
        tags:["drawings2021", "nude drawing", "beach"]
    },
    {
        id: 906,
        title: 'Rhein River, Basel',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/zHj1JMG3/IMG-2970.jpg", 
        thumbnails: [],
        tags:["drawings2021", "basel", "switzerland", "rhine"]
    },
    {
        id: 907,
        title: 'Rhine embankment in Basel-1',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/Lhz24qrR/IMG-2955small.jpg", 
        thumbnails: [],
        tags:["drawings2021", "basel", "switzerland", "rhine"]
    },
    {
        id: 908,
        title: 'Rhine embankment in Basel-2',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/Jwp9F7xC/IMG-2954.jpg", 
        thumbnails: [],
        tags:["drawings2021", "basel", "switzerland", "rhine"]
    },
    {
        id: 910,
        title: 'People on the grass in Birsköpfli',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/b5YQgXdj/IMG-2968.jpg", 
        thumbnails: [],
        tags:["drawings2021", "basel", "switzerland", "rhine"]
    },
    {
        id: 911,
        title: 'Resting in the shade-naturist beach in France',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/236nFL4y/IMG-2942.jpg", 
        thumbnails: [],
        tags:["nude drawing", "beach"]
    },
    {
        id: 912,
        title: 'Girl from Hungary in Birs river',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2021',
        image: "https://i.ibb.co/YT0S7R31/IMG-3205.jpg", 
        thumbnails: [],
        tags:["beach", "river", "switzerland", "basel"]
    },
    {
        id: 913,
        title: 'Group of woman in naturist beach in France',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', 
        date: '2021',
        image: "https://i.ibb.co/wZnJQ1N3/IMG-3203.jpg", 
        thumbnails: [],
        tags:["nude drawing", "beach"]
    
    },
    {
        id: 914,
        title: 'Emma is sleeping',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', 
        date: '2021',
        image: "https://i.ibb.co/Y4zhpv5C/Emma.jpg", 
        thumbnails: [],
        tags:["emma", "child"]
    },
    {
        id: 915,
        title: 'Celine on the Rhine river in Basel',
        medium: 'Graphite on paper 29.7 cm x 42.0 cm', // Moved medium here
        description: '', 
        date: '2021',
        image: "https://i.ibb.co/4Z0KtM7j/IMG-3210.jpg", 
        thumbnails: [],
        tags:["celine", "oil pastels"]
    },
];

export const drawings2017: Product[] = [
    {
        id: 950,
        title: 'Lars',
        medium: 'Oil pastels on paper 21 x 30 cm', 
        description: 'Youn man from East Berlin, where flats are way more cheap for the rent', // Leave description empty
        date: '2017',
        image: "https://i.ibb.co/bgGDb4HB/IMG-2999.jpg", 
        thumbnails: [],
        tags:["oil pastels", "piercing"]
    },
    {
        id: 951,
        title: 'Parrot',
        medium: 'Acrylic and oil pastels on cardboard 21 x 30 cm', 
        description: '', 
        date: '2017',
        image: "https://i.ibb.co/q38dym0h/Parrot-Scanned-and-photoshoped-smaller2.jpg", 
        thumbnails: [],
        tags: ["acrylicpastels","animals" ],
    },
    {
        id: 952,
        title: 'Dorkas',
        medium: 'Soft pastels and oil pastels on cardboard 21 x 30 cm', 
        description: 'Student from Kenya', 
        date: '2017',
        image: "https://i.ibb.co/fVXb3FbT/Dorkas-new.jpg", 
        thumbnails: [],
        tags: ["pastels"],
        
    },
    {
        id: 953,
        title: 'Celine I',
        medium: 'Oil pastels on paper 21 x 30 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2017',
        image: "https://i.ibb.co/TMD6FMy2/IMG-2979small2.jpg", 
        thumbnails: [],
        tags: ["oil pastels","celine"],
    },
    {
        id: 954,
        title: 'Lena',
        medium: 'Oil pastels on paper 21 x 30 cm', // Moved medium here
        description: 'Young woman from Dortmund, living and working in Berlin, Germany', // Leave description empty
        date: '2017',
        image: "https://i.ibb.co/bjVSjbH9/IMG-2690-closeu.jpg", 
        thumbnails: ["https://i.ibb.co/dJc1y94s/IMG-2690-up.jpg"],
        tags: ['drawing', "nude", "tits", "breast", "nude posing", "tattoo", "piercing", "oil pastels"]

    },
    {
        id: 955,
        title: 'Anna',
        medium: 'Oil pastels on paper 21 x 30 cm', // Moved medium here
        description: '18- year old tourist from Russia, felt down at the night, from her second floor bed in Berlin', // Leave description empty
        date: '2017',
        image: "https://i.ibb.co/6gPZPq7/scanned-alexandra-or-anna-photoshoped-2025-small.jpg", 
        thumbnails: ["oil pastels"]
    },
    {
        id: 956,
        title: 'Celine II',
        medium: 'Oil pastels on paper 21 x 30 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2017',
        image: "https://i.ibb.co/b5JQphDx/SKM-C45818070115150-0002small.jpg", 
        thumbnails: [],
        tags: ["oil pastels","celine"],

    },
    {
        id: 957,
        title: 'Old Сhimpanzee',
        medium: 'Oil pastels on paper 21 x 30 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2017',
        image: "https://i.ibb.co/JjYdjQhq/scanned-small-detailjpg.jpg", 
        thumbnails: [],
        tags: ["animals" ],
    },
    {
        id: 958,
        title: 'Baby Lion',
        medium: 'Acrylic and oil pastels on paper 21 x 30 cm', // Moved medium here
        description: '', // Leave description empty
        date: '2017',
        image: "https://i.ibb.co/tTVBvsQ2/IMG-3271.jpg", 
        thumbnails: [],
        tags: ["acrylicpastels","animals" ],
    },
    {
        id: 959,
        title: 'Dorna',
        medium: 'Oil pastels on paper 21 x 30 cm', 
        description: '', 
        date: '2017',
        image: "https://i.ibb.co/SDt6ZPXc/d2jpg.jpg", 
        thumbnails: [],
        tags: ["oil pastels" ],
    },
    ];
    export const shop: Product[] = [
        {
          id: 1500,
          title: 'Print of Vanitas',
          medium: 'Print on 300 gr Paper', 
          description: '', 
          date: '2022',
          image: "https://i.ibb.co/5W9BDh1W/IMG-9769.jpg", 
          thumbnails: [],
          tags: [],
          price: 25.00, 
        },
        {
          id: 1501,
          title: 'Another Print',
          medium: 'Print on 300 gr Paper', 
          description: '', 
          date: '2022',
          image: "https://i.ibb.co/5W9BDh1W/IMG-9769.jpg", 
          thumbnails: [],
          tags: [],
          price: 30.00, // Add price
        },
        {
          id: 1502,
          title: 'Yet Another Print',
          medium: 'Print on 300 gr Paper', 
          description: '', 
          date: '2022',
          image: "https://i.ibb.co/5W9BDh1W/IMG-9769.jpg", 
          thumbnails: [],
          tags: [],
          price: 20.00, // Add price
        },
      ];

export const products = {
    general: generalImages,
    shop: shop,
    drawingsImages: drawingsImages,
    childhood: childhoodMemories,
    study: studyImages,
    services: services,
    characters: characters,
    romanstone: romanstone,
    nude: nude,
    paintingsonpaper: paintingsonpaper,
    homicide: homicide,
    drawings2009: drawings2009,
    drawings2016: drawings2016,
    drawings2017: drawings2017,
    drawings2021: drawings2021, 
    
};