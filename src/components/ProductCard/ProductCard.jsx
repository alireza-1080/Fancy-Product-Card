import "./ProductCard.css";
import React, { useEffect, useRef } from 'react'

function ProductCard({title ,icon ,color ,details}) {
    
    const productCard = useRef(null)

  return (
    <div className="product-card-container" ref={productCard} style={{ '--pseudo-backgroundColor': color }}>
        <div className="icon-container" style={{color: color}}>
            {icon}
        </div>
        <div className="title-container">
            <h2>{title}</h2>
        </div>
        <div className="details-container">
            <h3>{details}</h3>
        </div>
    </div>
  )
}

export default ProductCard