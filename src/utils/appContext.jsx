import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState({ rows: 4, columns: 7, resolution: 400 });
  const [covers, setCovers] = useState([]);

  return (
    <AppContext.Provider value={{ data, setData, covers, setCovers }}>
      {children}
    </AppContext.Provider>
  );
};
