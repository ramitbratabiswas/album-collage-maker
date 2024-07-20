import { useState, useEffect } from "react";

export const useFetchSearchResults = (searchTerm) => {

  const [searchResults, setSearchResults] = useState([]);
  const accessToken = localStorage.getItem("access_token");
  const query = encodeURIComponent(searchTerm);

  console.log("useFetchSearchResultsCalled");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!accessToken) return null;

      try {
        const res = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=album`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        const data = await res.json();
        const albums = data.albums.items.map(album => {
          return { name: album.name, artist: album.artists[0].name, image: album.images[0].url };
        })
        
        setSearchResults(albums);

      } catch (error) {
        console.error(`catch clause error in fetchSearchResults: ${error}`);
      }
    }
    fetchSearchResults();
  },[accessToken, query]);

  return searchResults;
}