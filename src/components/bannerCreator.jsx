// BannerCreator.js
import React, { useState, useRef } from 'react';
import Banner from './banner.jsx';
import { downloadBanner } from '../utils/downloadBanner';

export default function BannerCreator({ data, setData, covers, setCovers }) {
  const { columns, resolution } = data;
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const bannerRef = useRef(null);

  const handleDownload = async () => {
    if (imagesLoaded && bannerRef.current) {
      await downloadBanner(bannerRef, columns, resolution);
    } else {
      alert('Images are still loading, please try again in a moment.');
    }
  };

  return (
    <div className='creator-container'>
      <div className='banner-container'>
        <Banner data={data} setImagesLoaded={setImagesLoaded} ref={bannerRef} />
      </div>
      <button onClick={handleDownload} disabled={!imagesLoaded}>Download as Image</button>
    </div>
  );
}
