// import { useRef } from "react";
// import { useFetchUniqueImages } from "../utils/fetchUniqueImages";

// export default function Banner() {

//   const bannerRef = useRef<HTMLDivElement>(null);
//   const albums = useFetchUniqueImages();

//   return (
//     <div className='banner-container'>
//       <div ref={bannerRef} className='banner'>
//         {albums.map((album, index) => {
//           return (
//             <div className='banner-image-container' key={index + 1}>
//               <img className='image' id={`image-${index + 1}`} src={album.link} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { useFetchUniqueImages } from '../utils/fetchUniqueImages';

export default function Banner() {
  const bannerRef = useRef(null);
  const albums = useFetchUniqueImages();
  const [imagesLoaded, setImagesLoaded] = useState(false);

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

    // Check if there are no images
    if (totalImages === 0) {
      setImagesLoaded(true);
    }
  }, [albums]);

  const handleDownload = async () => {
    if (imagesLoaded && bannerRef.current) {
      const canvas = await html2canvas(bannerRef.current, {
        useCORS: true,
      });
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'banner.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Images are still loading, please try again in a moment.');
    }
  };

  return (
    <div className='creator-container'>
      <div className='banner-container'>
        <div ref={bannerRef} className='banner'>
          {albums.map((album, index) => (
            <div className='banner-image-container' key={index}>
              <img className='image' id={`image-${index}`} src={album.link} alt={`album-${index}`} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleDownload} disabled={!imagesLoaded}>Download as Image</button>
    </div>
  );
}
