import { createContext, useEffect, useState, useRef } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({ rows: 4, columns: 7, resolution: 400 });
  const [covers, setCovers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [sidebarOpen, setSidebarOpen] = useState(selectedIndex >= 0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setSidebarOpen(selectedIndex >= 0);
  }, [selectedIndex])

  return (
    <AppContext.Provider 
      value={
        { data, 
        setData, 
        covers, 
        setCovers, 
        selectedIndex, 
        setSelectedIndex,
        sidebarOpen,
        setSidebarOpen,
        imagesLoaded,
        setImagesLoaded,
        ref
      }
      }>
      {children}
    </AppContext.Provider>
  );
};
