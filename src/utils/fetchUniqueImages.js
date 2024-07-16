import { useFetchMyRecents } from "./fetchMyRecents";
import { useFetchMyTopLong } from "./fetchMyTopLong";
import { useFetchMyTopMedium } from "./fetchMyTopMedium";
import { useFetchMyTopShort } from "./fetchMyTopShort";

export const useFetchUniqueImages = () => {

  const recentsImages = useFetchMyRecents().tracks.map(track => track.image);
  const topLongImages = useFetchMyTopLong().tracks.map(track => track.image);
  const topMediumImages = useFetchMyTopMedium().tracks.map(track => track.image);
  const topShortImages = useFetchMyTopShort().tracks.map(track => track.image);
  const merged = [...recentsImages, ...topLongImages, ...topMediumImages, ...topShortImages];
  const unique = removeDuplicates(merged);
  console.log(unique.length);
  
  return unique;

}

const removeDuplicates = (arr) => {
  return arr.filter((item,
      index) => arr.indexOf(item) === index);
}