import { useState, useRef, useContext } from 'react';
import Banner from './banner.jsx';
import { downloadBanner } from '../utils/downloadBanner';
import { AppContext } from '../utils/appContext';

export default function BannerCreator() {

  return (
    <div className={`banner-creator-container`}>
      <div className={`banner-container`}>
        <Banner />
      </div>
    </div>
  );
}
