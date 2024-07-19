import { useContext } from "react";
import { AppContext } from "../utils/appContext";

export const AlbumInfo = () => {

  const { covers, selectedIndex } = useContext(AppContext);
  if (covers[selectedIndex]) console.log(covers[selectedIndex]);

  console.log("in AlbumInfo");
  
  if (!covers[selectedIndex]) return null;

  return (
    <div className='album-info'>
      <h2>{covers[selectedIndex].album}</h2>
      <p>{covers[selectedIndex].artist}</p>
      <img className="album-info-image" src={covers[selectedIndex].link} alt={covers[selectedIndex].album} />
    </div>
  );

};
