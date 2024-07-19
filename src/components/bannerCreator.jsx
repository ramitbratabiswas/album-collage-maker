// BannerCreator.js
import { useState, useRef, useContext, useEffect } from 'react';
import Banner from './banner.jsx';
import { downloadBanner } from '../utils/downloadBanner';
import { AppContext } from '../utils/appContext.jsx';
import { useFetchUniqueImages } from '../utils/fetchUniqueImages.js';

export default function BannerCreator() {
  const { data, setCovers, covers } = useContext(AppContext);
  const uniqueImages = useFetchUniqueImages();

  const { columns, resolution } = data;
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (uniqueImages.length > 0) {
      setCovers(uniqueImages);
    }
  }, [uniqueImages, setCovers]);

  const handleDownload = async () => {
    if (imagesLoaded && ref.current) {
      await downloadBanner(ref, columns, resolution);
    } else {
      alert('Images are still loading, please try again in a moment.');
    }
  };

  return (
    <div className='banner-creator-container'>
      <div className='banner-container'>
        <Banner data={data} setImagesLoaded={setImagesLoaded} ref={ref} />
      </div>
      <button onClick={handleDownload} disabled={!imagesLoaded}>Download as Image</button>
    </div>
  );
}
