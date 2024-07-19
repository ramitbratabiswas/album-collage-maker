import { AlbumInfo } from "../components/albumInfo";
import GridSettings from "../components/gridSettings";
import BannerCreator from "../components/bannerCreator";
import { AppProvider } from "../utils/appContext";

export default function Creator() {

  return (
    <AppProvider>
      <div className='creator-container'>
        <GridSettings />
        <BannerCreator />
        <AlbumInfo />
      </div>
    </AppProvider>
  );
}
