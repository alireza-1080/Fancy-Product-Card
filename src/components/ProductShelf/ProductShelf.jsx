import ProductCard from "../ProductCard/ProductCard";
import "./ProductShelf.css";
import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { IoIosCloudDownload } from "react-icons/io";
import { HiUsers } from "react-icons/hi2";
import { FaWifi } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";


function ProductShelf() {

    const [productsData] = useState([
        {title: "Search",icon: <IoSearch />,color: "#ec407a", details: "Lorem ipsum dolor sit amet."},
        {title: "Download",icon: <IoIosCloudDownload />,color: "#5c6bc0", details: "Lorem ipsum dolor sit amet."},
        {title: "Users",icon: <HiUsers />,color: "#26a69a", details: "Lorem ipsum dolor sit amet."},
        {title: "Wireless",icon: <FaWifi />,color: "#ffca28", details: "Lorem ipsum dolor sit amet."},
        {title: "Food",icon: <MdFastfood />,color: "#7e57c2", details: "Lorem ipsum dolor sit amet."},
        {title: "Car Share",icon: <IoCarSportSharp />,color: "#d4e157", details: "Lorem ipsum dolor sit amet."},
    ])

  return (
    <div className="product-shelf-container">
        {productsData.map((product, index) => {
            return <ProductCard key={product.title} {...product}/>
        })}
    </div>
  )
}

export default ProductShelf