import Banner from "../components/banner";
import AlbumInfo from "../components/albumInfo";
import GridSettings from "../components/gridSettings";

export default function Creator() {

  return (
    <div className='creator-container'>
      <GridSettings />
      <AlbumInfo />
      <Banner />
    </div>
  );
}
