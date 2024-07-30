import "./App.css"
import React from 'react'
import ProductShelf from "./components/ProductShelf/ProductShelf"

function App() {
  return (
    <div className="body">
      <div className="app-container">
        <ProductShelf />
      </div>
    </div>
  )
}

export default App