import { useState, useEffect } from "react";

export const useFetchMyRecents = () => {

  const [recentsData, setRecentsData] = useState({
    name: '',
    tracks: []
  });
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchMyRecents = async () => {
      if (!accessToken) return null;

      try {
        const res = await fetch(`https://api.spotify.com/v1/me/player/recently-played`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        const data = await res.json();
        const tracks = data.items.map((item) => {
          let songAlbum = item.track.album.name;
          let songImage = item.track.album.images[0].url;
          return { album: songAlbum, image: songImage }
        });
        
        setRecentsData({
          name: "recents",
          tracks: tracks
        });

      } catch (error) {
        console.error(`catch clause error in fetchMyPlaylists: ${error}`);
      }
    }
    fetchMyRecents();
  },[accessToken]);

  return recentsData;
}