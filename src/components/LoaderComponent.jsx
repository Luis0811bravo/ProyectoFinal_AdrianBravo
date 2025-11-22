import React from 'react'
import '../styles/Loader.css';

const LoaderComponent = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <p className="loader-text">Cargando...</p>
    </div>
  )
}

export default LoaderComponent