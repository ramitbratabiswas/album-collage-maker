import { useState } from "react";

import AlbumInfo from "../components/albumInfo";
import GridSettings from "../components/gridSettings";
import { useFetchUniqueImages } from "../utils/fetchUniqueImages";
import BannerCreator from "../components/bannerCreator";
import { AppProvider } from "../utils/appContext";

export default function Creator() {

  return (
    <AppProvider>
      <div className='creator-container'>
        <GridSettings />
        <AlbumInfo />
        <BannerCreator />
      </div>
    </AppProvider>
  );
}
