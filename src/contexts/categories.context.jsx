import { createContext, useState, useEffect } from "react";
//import SHOP_DATA from "../shop-data.js";
import {
  getCategoriesAndDocuments,
  getCollectionAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  //console.log(SHOP_DATA[0]);
  //useEffect(() => {
  //  addCollectionAndDocuments("categories", SHOP_DATA);
  //}, []);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  });

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
