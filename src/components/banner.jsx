import { useFetchUniqueImages } from "../utils/fetchUniqueImages";

export default function Banner() {

  const albums = useFetchUniqueImages();

  return (
    <div className='banner-container'>
      <div className='banner'>
        {albums.map((album, index) => {
          return (
            <div className='banner-image-container' key={index + 1}>
              <img className='image' id={`image-${index + 1}`} src={album.link} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
