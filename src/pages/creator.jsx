import { useContext } from "react";
import { AlbumInfo } from "../components/albumInfo";
import GridSettings from "../components/gridSettings";
import BannerCreator from "../components/bannerCreator";
import { AppContext } from "../utils/appContext";

export default function Creator() {

  const { sidebarOpen } = useContext(AppContext);

  return (
    <>
      <div className={`creator-container ${sidebarOpen ? 'narrow' : 'wide'}`}>
        <h1 className="header">my album collage!</h1>
        <GridSettings />
        <BannerCreator />
      </div>
      <AlbumInfo />
    </>
  );
}
