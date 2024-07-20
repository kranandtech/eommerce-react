import { useContext, useEffect, useState } from "react";
import AppContext from "../context/appContext";

const useGetProducts = ({ isSearchTextDependent = true }) => {
  const { searchText } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  async function getData(stx) {
    try {
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/products/?title=${stx}`
      );
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    if (isSearchTextDependent) {
      getData(searchText);
    } else {
      getData("");
    }
  }, [searchText]);
  return products;
};

export default useGetProducts;
