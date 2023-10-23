import React, { useContext, createContext, useState, useEffect } from "react";
import { data } from "./Dummy";
console.log("data", data);

const GlobalContext = createContext();
const CreateContext = ({ children }) => {
  const [recipiesStore, setRecipies] = useState([]);
  const [singleRecipie, setSingleRecipie] = useState([]);
  const [liked, setliked] = useState(() => {
    try {
      const data = localStorage.getItem("liked");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);
  return (
    <GlobalContext.Provider
      value={{
        recipiesStore,
        setRecipies,
        singleRecipie,
        setSingleRecipie,
        liked,
        setliked
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useData = () => useContext(GlobalContext);
export default CreateContext;
