import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({ rows: 4, columns: 7, resolution: 400 });
  const [covers, setCovers] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(2);

  return (
    <AppContext.Provider value={{ data, setData, covers, setCovers, selectedIndex, setSelectedIndex }}>
      {children}
    </AppContext.Provider>
  );
};
