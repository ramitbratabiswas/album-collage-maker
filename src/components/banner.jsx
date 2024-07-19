import { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { useFetchUniqueImages } from '../utils/fetchUniqueImages';

export default function Banner({ data, setData, covers, setCovers }) {

  const { rows, columns, resolution } = data;
  const imagesToShow = rows * columns;

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
      }8
    });

    // Check if there are no images
    if (totalImages === 0) {
      setImagesLoaded(true);
    }
  }, [albums]);

  const handleDownload = async () => {
    if (imagesLoaded && bannerRef.current) {
      // Save original CSS properties
      const originalGridTemplateColumns = bannerRef.current.style.gridTemplateColumns;
      const originalGap = bannerRef.current.style.gap;
  
      // Update CSS to make images larger
      bannerRef.current.style.gridTemplateColumns = `repeat(${columns}, ${resolution}px)`;
      bannerRef.current.style.gap = '0px';
  
      // Wait a short period to ensure the styles are applied
      await new Promise(resolve => setTimeout(resolve, 100));
  
      // Capture the canvas
      const canvas = await html2canvas(bannerRef.current, {
        useCORS: true,
        width: resolution * columns,
      });
  
      // Revert CSS changes
      bannerRef.current.style.gridTemplateColumns = originalGridTemplateColumns;
      bannerRef.current.style.gap = originalGap;
  
      // Convert canvas to image and trigger download
      const dataURL = canvas.toDataURL('image/jpeg');
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
  
  useEffect(() => {
    bannerRef.current.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  }, [columns]);

  return (
    <div className='creator-container'>
      <div className='banner-container'>
        <div ref={bannerRef} className='banner'>
          {albums.map((album, index) => (
            <div className='banner-image-container' key={index}>
              <img className='image' id={`image-${index}`} src={album.link} alt={`album-${index}`} />
            </div>
          )).slice(0, imagesToShow)}
        </div>
      </div>
      <button onClick={handleDownload} disabled={!imagesLoaded}>Download as Image</button>
    </div>
  );
}
