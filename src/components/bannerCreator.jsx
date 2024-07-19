// BannerCreator.js
import { useState, useRef, useContext } from 'react';
import Banner from './banner.jsx';
import { downloadBanner } from '../utils/downloadBanner';
import { AppContext } from '../utils/appContext.jsx';

export default function BannerCreator() {

  const { data, setData, covers, setCovers } = useContext(AppContext);

  const { columns, resolution } = data;
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const ref = useRef(null);

  const handleDownload = async () => {
    if (imagesLoaded && ref.current) {
      await downloadBanner(ref, columns, resolution);
    } else {
      alert('Images are still loading, please try again in a moment.');
    }
  };

  return (
    <div className='creator-container'>
      <div className='banner-container'>
        <Banner data={data} setImagesLoaded={setImagesLoaded} ref={ref} />
      </div>
      <button onClick={handleDownload} disabled={!imagesLoaded}>Download as Image</button>
    </div>
  );
}
