import { Route, Routes } from 'react-router-dom';

import './styles.css';

import Frontpage from './pages/frontpage.jsx';
import Creator from './pages/creator.jsx';
import { AppProvider } from './utils/appContext.jsx';

import SpotifyCallback from './components/spotifyCallback.jsx';

export const App = () => {

  return (
    <AppProvider>
    <div>
      <Routes>
        <Route path="/" element={<Frontpage/>} />
        <Route path="/creator" element={<Creator/>} />
        <Route path="/callback/*" element={<SpotifyCallback />} />
      </Routes>
    </div>
    </AppProvider>
  )
}
