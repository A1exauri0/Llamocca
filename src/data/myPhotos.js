// src/data/myPhotos.js

const myPhotos = [
  {
    itemImageSrc: "/images/arte1.jpg",
    thumbnailImageSrc: "/images/arte1.jpg",
    alt: "Arte 1",
    title: "Arte Local",
  },
  {
    itemImageSrc: "/images/arte2.jpg",
    thumbnailImageSrc: "/images/arte2.jpg",
    alt: "Arte 2",
    title: "Arte Local",
  },
  {
    itemImageSrc: "/images/arte3.jpg",
    thumbnailImageSrc: "/images/arte3.jpg",
    alt: "Arte 3",
    title: "Arte Local",
  },
  {
    itemImageSrc: "/images/arte4.jpg",
    thumbnailImageSrc: "/images/arte4.jpg",
    alt: "Arte 4",
    title: "Arte Local",
  },
    {
    itemImageSrc: "/images/arte1.jpg",
    thumbnailImageSrc: "/images/arte1.jpg",
    alt: "Arte 1",
    title: "Arte Local",
  },
  {
    itemImageSrc: "/images/arte2.jpg",
    thumbnailImageSrc: "/images/arte2.jpg",
    alt: "Arte 2",
    title: "Arte Local",
  },
  {
    itemImageSrc: "/images/arte3.jpg",
    thumbnailImageSrc: "/images/arte3.jpg",
    alt: "Arte 3",
    title: "Arte Local",
  },
  {
    itemImageSrc: "/images/arte4.jpg",
    thumbnailImageSrc: "/images/arte4.jpg",
    alt: "Arte 4",
    title: "Arte Local",
  },
];

export const getMyPhotos = () => {
  return Promise.resolve(myPhotos);
};
