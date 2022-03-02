import { useContext, useEffect, useState, createContext, useRef } from "react";
import useFetch from "./useFetch";

const URL = "https://course-api.com/react-store-products";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const refContainer = useRef(null);
  const [totalItems, setTotalItems] = useState(0);
  const { items, loading } = useFetch(URL);

  const openSidebar = () => {
    setSidebarOpen(true);
    refContainer.current.classList.add("show-sidebar");
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    refContainer.current.classList.remove("show-sidebar");
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        openSidebar,
        closeSidebar,
        refContainer,
        totalItems,
        items,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
