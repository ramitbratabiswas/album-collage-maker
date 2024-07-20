import { useContext, useState } from "react";
import { AppContext } from "../utils/appContext";
import SearchResults from "./searchResults";

export const AlbumInfo = () => {
  const { covers, selectedIndex } = useContext(AppContext);
  const [query, setQuery] = useState("");
  const [isResized, setIsResized] = useState(false);

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
    setIsResized(param.length > 0);
  };

  return (
    <div className={`album-info-sidebar ${covers[selectedIndex] ? 'open' : ''}`}>
      <h1 className="album-info-header">replace</h1>
      <div className={`album-info-card ${isResized ? 'small' : 'big'}`}>
        <img className={`album-info-image`} src={covers[selectedIndex].link} alt={covers[selectedIndex].album} />
        <div className="album-info-text">
          <p className="album-info-name">{covers[selectedIndex].album}</p>
          <p className="album-info-artist-name">{covers[selectedIndex].artist}</p>
        </div>
      </div>
      <p className="album-info-replace-with">with</p>
      <form className="album-info-search-form" onSubmit={handleAlbumSubmit}>
        <input 
          name="query"
          className="album-info-search" 
          placeholder="type album name here..." 
        />
        <button className="album-info-search-submit" type="submit">search!</button>
      </form>
      <SearchResults query={query} />
    </div>
  );
};
