import { useState } from "react";

import AlbumInfo from "../components/albumInfo";
import GridSettings from "../components/gridSettings";
import { useFetchUniqueImages } from "../utils/fetchUniqueImages";
import BannerCreator from "../components/bannerCreator";

export default function Creator() {

  const [data, setData] = useState({ rows: 4, columns: 7, resolution: 400 });
  const [covers, setCovers] = useState([]);

  const albums = useFetchUniqueImages();
  console.log(albums);

  return (
    <div className='creator-container'>
      <GridSettings data={data} setData={setData} covers={covers} setCovers={setCovers} />
      <AlbumInfo covers={covers} setCovers={setCovers} />
      <BannerCreator data={data} setData={setData} covers={covers} setCovers={setCovers} />
    </div>
  );
}
