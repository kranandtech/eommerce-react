import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import HomePage from "./src/pages/homePage";
import AmazonSearch from "./src/pages/amazonSearch";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import ProductInfo from "./src/pages/productInfo";
const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);
const productInfoCards = [
  {
    id: 1,
    title: "Revamp",
    products: [
      {
        title: "Cushion",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
      },
      {
        title: "Figurines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Home Storage",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Lighting Solutions",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      },
      
    ],
  },
  {
    id: 1,
    title: "Revamp",
    products: [
      {
        title: "Cushion",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
      },
      {
        title: "Figurines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Home Storage",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Lighting Solutions",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      },
      
    ],
  },
  {
    id: 1,
    title: "Revamp",
    products: [
      {
        title: "Cushion",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
      },
      {
        title: "Figurines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Home Storage",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Lighting Solutions",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      },
      
    ],
  },
  {
    id: 1,
    title: "Revamp",
    products: [
      {
        title: "Cushion",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
      },
      {
        title: "Figurines",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Home Storage",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
      },
      {
        title: "Lighting Solutions",
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
      },
      
    ],
  },
];

const categories = [
  "Fresh",
  "Amazon MiniTV",
  "Sell",
  "Best Sellers",
  "Mobiles",
  "Today Deals",
  "Prime",
  "Fashion",
];



const App = () => {
  const [searchText, setSearchText] = useState("");
  const router = createBrowserRouter([
    {
      path:'/',
      element:<HomePage searchText={searchText} setSearchText={setSearchText} productInfoCards={productInfoCards} categories={categories}/>
    },
    {
      path:'/search',
      element:<AmazonSearch searchText={searchText} setSearchText={setSearchText} categories={categories}/>
    },
    {
      path:'/search/:id',
      element:<ProductInfo/>
    }
  ]);

  return(
     <RouterProvider router={router}/>
  );
};

root.render(<App />);
