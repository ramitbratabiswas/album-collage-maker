// Banner.js
import React, { useRef, useState, useEffect } from 'react';
import { useFetchUniqueImages } from '../utils/fetchUniqueImages';

export default function Banner({ data, setImagesLoaded }) {
  const { rows, columns } = data;
  const imagesToShow = rows * columns;
  const bannerRef = useRef(null);
  const albums = useFetchUniqueImages();

  useEffect(() => {
    const images = bannerRef.current.querySelectorAll('img');
    const totalImages = images.length;
    let loadedImages = 0;

    const checkImagesLoaded = () => {
      loadedImages += 1;
      if (loadedImages === totalImages) {
        setImagesLoaded(true);
      }
    };

    images.forEach(img => {
      if (img.complete) {
        checkImagesLoaded();
      } else {
        img.onload = checkImagesLoaded;
        img.onerror = checkImagesLoaded;
      }
    });

    if (totalImages === 0) {
      setImagesLoaded(true);
    }
  }, [albums, setImagesLoaded]);

  useEffect(() => {
    bannerRef.current.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }, [columns]);

  return (
    <div ref={bannerRef} className='banner'>
      {albums.slice(0, imagesToShow).map((album, index) => (
        <div className='banner-image-container' key={index}>
          <img className='image' src={album.link} alt={`album-${index}`} />
        </div>
      ))}
    </div>
  );
}
