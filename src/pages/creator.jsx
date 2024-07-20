import { useContext } from "react";
import { Link } from "react-router-dom";
import { AlbumInfo } from "../components/albumInfo";
import GridSettings from "../components/gridSettings";
import BannerCreator from "../components/bannerCreator";
import { AppContext } from "../utils/appContext";

export default function Creator() {

  const { sidebarOpen } = useContext(AppContext);

  return (
    <>
      <div className={`creator-container ${sidebarOpen ? 'narrow' : 'wide'}`}>
        <Link className="header-link" to="/"><h1 className="header">my album collage!</h1></Link>
        <GridSettings />
        <BannerCreator />
      </div>
      <AlbumInfo />
    </>
  );
}
