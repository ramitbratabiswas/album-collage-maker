import { Route, Routes, useLocation } from 'react-router-dom';

import './styles.css';

import Frontpage from './pages/frontpage.jsx';

import SpotifyCallback from './components/spotifyCallback.jsx';

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Frontpage/>} />
        <Route path="/callback/*" element={<SpotifyCallback />} />
      </Routes>
    </div>
  )
}
