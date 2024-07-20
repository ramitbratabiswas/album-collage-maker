import { useContext, useState } from "react";
import { AppContext } from "../utils/appContext";
import SearchResults from "./searchResults";

export const AlbumInfo = () => {
  const { covers, selectedIndex } = useContext(AppContext);
  const [query, setQuery] = useState("");

  if (!covers[selectedIndex]) return null;

  const handleAlbumSubmit = (event) => {
    event.preventDefault();
    const param = event.target.query.value;
    setQuery(param);
    if (param.length > 0) { 
      document.querySelector('.search-result-list').style.display = 'flex';
    } else {
      document.querySelector('.search-result-list').style.display = 'none';
    }
  };

  return (
    <div className={`album-info-sidebar ${covers[selectedIndex] ? 'open' : ''}`}>
      <div className='album-info-card'>
        <img className="album-info-image" src={covers[selectedIndex].link} alt={covers[selectedIndex].album} />
        <p className="album-info-name">{covers[selectedIndex].album}</p>
        <p className="album-info-artist-name">{covers[selectedIndex].artist}</p>
      </div>
      <p className="album-info-replace-with">replace with</p>
      <form className="album-info-search-form" onSubmit={handleAlbumSubmit}>
        <input 
          name="query"
          className="album-info-search" 
          placeholder="type album name here..." 
        />
        <button className="album-info-search-submit" type="submit">Search</button>
      </form>
      <SearchResults query={query} />
    </div>
  );
};
