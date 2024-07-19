import { AlbumInfo } from "../components/albumInfo";
import GridSettings from "../components/gridSettings";
import BannerCreator from "../components/bannerCreator";
import { AppProvider } from "../utils/appContext";
import { useState } from 'react';

export default function Creator() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <AppProvider>
      <div className='creator-container'>
        <GridSettings />
        <AlbumInfo album={selectedAlbum} isOpen={!!selectedAlbum} onClose={() => setSelectedAlbum(null)} />
        <BannerCreator onAlbumClick={setSelectedAlbum} />
      </div>
    </AppProvider>
  );
}
