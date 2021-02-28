import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  return (
    <AppContext.Provider value={{ page, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }

  return context;
}

export { useAppContext, AppContextProvider };
