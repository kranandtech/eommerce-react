import { useEffect, useState } from "react";

const useGetProducts = (searchText) => {
    const [products, setProducts] = useState([]);
console.log("useGetProducts rendered");
    async function getData() {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        setProducts(data.products);
        console.log("api called");
      }
        useEffect(()=>{
    getData();
  },[searchText]);
      return products;
};

export default useGetProducts;