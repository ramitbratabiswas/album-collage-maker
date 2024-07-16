import { useFetchMyRecents } from "./fetchMyRecents";
import { useFetchMyTopLong } from "./fetchMyTopLong";
import { useFetchMyTopMedium } from "./fetchMyTopMedium";
import { useFetchMyTopShort } from "./fetchMyTopShort";

export const useFetchUniqueImages = () => {

  const recentsImages = useFetchMyRecents().tracks.map(track => {
    return { album: track.album, link: track.image }
  });
  const topLongImages = useFetchMyTopLong().tracks.map(track => {
    return { album: track.album, link: track.image }
  });
  const topMediumImages = useFetchMyTopMedium().tracks.map(track => {
    return { album: track.album, link: track.image }
  });
  const topShortImages = useFetchMyTopShort().tracks.map(track => {
    return { album: track.album, link: track.image }
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

const shuffle = (unshuffled) => {
  return unshuffled
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);
}