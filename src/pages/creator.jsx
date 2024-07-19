import { useState } from "react";

import Banner from "../components/banner";
import AlbumInfo from "../components/albumInfo";
import GridSettings from "../components/gridSettings";

export default function Creator() {

  const [data, setData] = useState({ rows: 4, columns: 7, resolution: 400 });
  const [covers, setCovers] = useState([]);

  return (
    <div className='creator-container'>
      <GridSettings data={data} setData={setData} covers={covers} setCovers={setCovers} />
      <AlbumInfo covers={covers} setCovers={setCovers} />
      <Banner data={data} setData={setData} covers={covers} setCovers={setCovers} />
    </div>
  );
}
