import { useState, useEffect } from "react";

export const useFetchMyTopShort = () => {

  const [myTopShortData, setMyTopShortData] = useState({
    name: '',
    tracks: []
  });
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchMyTopShort = async () => {
      if (!accessToken) return null;

      try {
        const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        const data = await res.json();
        const tracks = data.items.map((item) => {
          let songAlbum = item.album.name;
          let songImage = item.album.images[0].url;
          return { album: songAlbum, image: songImage }
        });
        
        setMyTopShortData({
          name: "top songs - last month",
          tracks: tracks
        });

      } catch (error) {
        console.error(`catch clause error in fetchMyTopMedium: ${error}`);
      }
    }
    fetchMyTopShort();
  },[accessToken]);

  return myTopShortData;
}