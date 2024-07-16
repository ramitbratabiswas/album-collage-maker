import { Route, Routes, useLocation } from 'react-router-dom';

import './styles.css';
import Frontpage from './pages/frontpage.jsx';

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Frontpage/>} />
      </Routes>
    </div>
  )
}
