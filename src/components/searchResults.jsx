import { AppContext } from "../utils/appContext.jsx";
import { useFetchSearchResults } from "../utils/fetchSearchResults.js";
import { useContext } from "react";

export default function SearchResults({ query }) {
  const { selectedIndex, covers, setCovers } = useContext(AppContext);

  const replaceImage = (result) => {
    setCovers((prevCovers) => { 
      const newCovers = [...prevCovers];
      newCovers[selectedIndex] = {
        album: result.name,
        link: result.image,
        artist: result.artist
      };
      return newCovers; 
    });
  };

  const results = useFetchSearchResults(query);
  console.log(results);

  return (
    <div className="search-result-list">
      {results.map((result, index) => (
        <div key={index} className="search-result-card" onClick={() => replaceImage(result)}>
          <img className="search-result-image" src={result.image} alt={result.name} />
          <div className="search-result-info">
            <p className="search-result-name">{result.name}</p>
            <p className="search-result-artist">{result.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
