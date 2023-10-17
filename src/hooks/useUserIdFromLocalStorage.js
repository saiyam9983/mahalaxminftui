import { useEffect, useState } from "react";

// Define a custom hook to get the user ID from local storage
const useUserIdFromLocalStorage = () => {
  const [userId, setUserId] = useState(null);

  // Define the key for local storage
  const localStorageKey = "userId";

  useEffect(() => {
    // Get the user ID from local storage when the component mounts
    const storedUserId = localStorage.getItem(localStorageKey);

    if (storedUserId) {
      // If the user ID is found in local storage, set it in the state
      setUserId(storedUserId);
    }
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const setUserIdToLocalStorage = (newUserId) => {
    // Set the user ID in local storage
    localStorage.setItem(localStorageKey, newUserId);
    // Update the user ID in the state
    setUserId(newUserId);
  };

  const clearUserIdFromLocalStorage = () => {
    // Remove the user ID from local storage
    localStorage.removeItem(localStorageKey);
    // Clear the user ID in the state
    setUserId(null);
  };

  return { userId, setUserIdToLocalStorage, clearUserIdFromLocalStorage };
};

export default useUserIdFromLocalStorage;
