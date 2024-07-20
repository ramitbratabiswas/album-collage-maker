import { useContext } from "react";
import { AppContext } from "../utils/appContext";

export const AlbumInfo = () => {
  const { covers, selectedIndex } = useContext(AppContext);

  if (!covers[selectedIndex]) return null;

  return (
    <div className={`album-info-sidebar ${covers[selectedIndex] ? 'open' : ''}`}>
      <div className='album-info-card'>
        <img className="album-info-image" src={covers[selectedIndex].link} alt={covers[selectedIndex].album} />
        <p className="album-info-name">{covers[selectedIndex].album}</p>
        <p className="album-info-artist-name">{covers[selectedIndex].artist}</p>
      </div>
      <p className="album-info-replace-with">replace with...</p>
      <form className="album-info-search-form">
        <input className="album-info-search" placeholder="type album name here..."></input>
        <button className="album-info-search-submit" type="submit">Search</button>
      </form>
    </div>
  );
};
