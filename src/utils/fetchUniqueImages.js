import { useFetchMyRecents } from "./fetchMyRecents";
import { useFetchMyTopLong } from "./fetchMyTopLong";
import { useFetchMyTopMedium } from "./fetchMyTopMedium";
import { useFetchMyTopShort } from "./fetchMyTopShort";
import { shuffle } from './randomizeAlbums';

export const useFetchUniqueImages = () => {

  const recentsImages = useFetchMyRecents().tracks.map(track => {
    return { album: track.album, link: track.image, artist: track.artist }
  });
  const topLongImages = useFetchMyTopLong().tracks.map(track => {
    return { album: track.album, link: track.image, artist: track.artist }
  });
  const topMediumImages = useFetchMyTopMedium().tracks.map(track => {
    return { album: track.album, link: track.image, artist: track.artist }
  });
  const topShortImages = useFetchMyTopShort().tracks.map(track => {
    return { album: track.album, link: track.image, artist: track.artist }
  });
  const merged = [...recentsImages, ...topLongImages, ...topMediumImages, ...topShortImages];
  const unique = shuffle(removeDuplicates(merged));
  
  return unique;

}

const removeDuplicates = (arr) => {
  const seenLinks = new Set();
  return arr.filter(item => {
    if (seenLinks.has(item.link)) {
      return false;
    } else {
      seenLinks.add(item.link);
      return true;
    }
  });
};

