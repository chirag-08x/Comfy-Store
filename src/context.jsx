import { useContext, useEffect, useState, createContext, useRef } from "react";
import useFetch from "./useFetch";

const URL = "https://course-api.com/react-store-products";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const refContainer = useRef(null);
  const [totalItems, setTotalItems] = useState(0);
  const { items, loading, setItems } = useFetch(URL);
  const [value, setValue] = useState("");

  const compare = (a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    return 0;
  };

  const sortByType = (sortType) => {
    if (sortType === "price-lowest") {
      const newItems = items.sort((a, b) => {
        return a.price - b.price;
      });
      setItems([...newItems]);
    } else if (sortType === "price-highest") {
      const newItems = items.sort((a, b) => {
        return b.price - a.price;
      });
      setItems([...newItems]);
    } else if (sortType === "name-a") {
      const newItems = items.sort((a, b) => compare(b, a));
      setItems([...newItems]);
    } else if (sortType === "name-z") {
      const newItems = items.sort((a, b) => compare(a, b));
      setItems([...newItems]);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (!loading) {
      sortByType("price-lowest");
    }
  }, [loading]);

  const openSidebar = () => {
    setSidebarOpen(true);
    refContainer.current.classList.add("show-sidebar");
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    refContainer.current.classList.remove("show-sidebar");
  };

  const handleSubmit = () => {
    setValue("");
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
        setValue,
        value,
        handleSubmit,
        sortByType,
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
