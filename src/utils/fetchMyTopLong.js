import { useState, useEffect } from "react";

export const useFetchMyTopLong = () => {

  const [myTopLongData, setMyTopLongData] = useState({
    name: '',
    tracks: []
  });
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchMyTopLong = async () => {
      if (!accessToken) return null;

      try {
        const res = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${accessToken}`
          }
        });

        const data = await res.json();
        const tracks = data.items.map((item) => {
          let songAlbum = item.album.name;
          let songImage = item.album.images[0].url;
          let songArtist = item.artists.map(artist => artist.name).join(", ");
          return { album: songAlbum, image: songImage, artist: songArtist };
        });
        
        setMyTopLongData({
          name: "top songs - last year",
          tracks: tracks
        });

      } catch (error) {
        console.error(`catch clause error in fetchMyTopLong: ${error}`);
      }
    }
    fetchMyTopLong();
  },[accessToken]);

  return myTopLongData;
}