import { useFetchUniqueImages } from "../utils/fetchUniqueImages";

export default function Creator() {

  const imageLinks = useFetchUniqueImages();

  return (
    <div className='container'>
      <div className='image-container'>
        {imageLinks.map((link, index) => {
          return <img className='image' id={`image-${index+1}`} src={link} key={index+1}/>;
        })}
      </div>
    </div>
  );
}
