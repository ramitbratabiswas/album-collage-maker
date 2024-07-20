import { useState, useRef, useContext } from 'react';
import Banner from './banner.jsx';
import { downloadBanner } from '../utils/downloadBanner';
import { AppContext } from '../utils/appContext';

export default function BannerCreator() {
  const { data, imagesLoaded, setImagesLoaded, ref } = useContext(AppContext);
  const { columns, resolution } = data;

  const handleDownload = async () => {
    if (imagesLoaded && ref.current) {
      await downloadBanner(ref, columns, resolution);
    } else {
      alert('Images are still loading, please try again in a moment.');
    }
  };


  return (
    <div className={`banner-creator-container`}>
      <div className={`banner-container`}>
        <Banner />
      </div>
      <button onClick={() => handleDownload()} disabled={!imagesLoaded}>Download as Image</button>
    </div>
  );
}
