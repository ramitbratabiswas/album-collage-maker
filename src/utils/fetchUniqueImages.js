import { useMemo } from 'react';
import { useFetchMyRecents } from './fetchMyRecents';
import { useFetchMyTopLong } from './fetchMyTopLong';
import { useFetchMyTopMedium } from './fetchMyTopMedium';
import { useFetchMyTopShort } from './fetchMyTopShort';

export const useFetchUniqueImages = () => {
  const recents = useFetchMyRecents();
  const topLong = useFetchMyTopLong();
  const topMedium = useFetchMyTopMedium();
  const topShort = useFetchMyTopShort();

  const uniqueImages = useMemo(() => {
    const recentsImages = recents.tracks.map(track => ({
      album: track.album,
      link: track.image,
      artist: track.artist
    }));

    const topLongImages = topLong.tracks.map(track => ({
      album: track.album,
      link: track.image,
      artist: track.artist
    }));

    const topMediumImages = topMedium.tracks.map(track => ({
      album: track.album,
      link: track.image,
      artist: track.artist
    }));

    const topShortImages = topShort.tracks.map(track => ({
      album: track.album,
      link: track.image,
      artist: track.artist
    }));

    const merged = [
      ...recentsImages,
      ...topLongImages,
      ...topMediumImages,
      ...topShortImages
    ];

    return removeDuplicates(merged);
  }, [recents, topLong, topMedium, topShort]);

  return uniqueImages;
};

const removeDuplicates = arr => {
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
