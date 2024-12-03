import React, { createContext, useState } from 'react';

// Create the context
export const WatchLaterContext = createContext();

// Create a provider component
export const WatchLaterProvider = ({ children }) => {
  const [watchLaterList, setWatchLaterList] = useState([]);

  // Function to add a movie to the watch later list
  const addToWatchLater = (movie) => {
    // Prevent duplicates
    if (!watchLaterList.some((item) => item.id === movie.id)) {
      setWatchLaterList([...watchLaterList, movie]);
    }
  };

  return (
    <WatchLaterContext.Provider value={{ watchLaterList, addToWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};
