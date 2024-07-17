import { useFetchUniqueImages } from "../utils/fetchUniqueImages";

export default function Banner() {

  const albums = useFetchUniqueImages();

  return (
    <div className='banner-container'>
      <div className='banner-image-container'>
        {albums.map((album, index) => {
          return <img className='image' id={`image-${index+1}`} src={album.link} key={index+1}/>;
        })}
      </div>
    </div>
  );
}
