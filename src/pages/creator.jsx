import { AlbumInfo } from "../components/albumInfo";
import GridSettings from "../components/gridSettings";
import BannerCreator from "../components/bannerCreator";
import { AppProvider } from "../utils/appContext";

export default function Creator() {

  return (
    <AppProvider>
      <div className='creator-container'>
        <h1 className="header">my album collage!</h1>
        <GridSettings />
        <BannerCreator />
      </div>
      <AlbumInfo />
    </AppProvider>
  );
}
