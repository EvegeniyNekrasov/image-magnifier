import { useState } from 'react'
import { images } from './utils/images.js'

import SideGallery from './components/side-gallery/SideGallery.jsx'
import PrincipalImage from './components/principal-image/PrincipalImage.jsx'
import Magnifier from './components/magnifier/Magnifier.jsx'

import './App.css'

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [magnifiedPosition, setMagnifiedPosition] = useState({ x: 0, y: 0 })

  return (
    <main>
      <h1>Image Magnifier</h1>
      <span>Hover over the image to see the enlarged image</span>
      <div className="main-content">
        <SideGallery images={images} setSelectedImage={setSelectedImage} />
        <PrincipalImage
          selectedImage={selectedImage}
          setShowMagnifier={setShowMagnifier}
          setMagnifiedPosition={setMagnifiedPosition}
        />
        {showMagnifier ? (
          <Magnifier
            magnifiedPosition={magnifiedPosition}
            selectedImage={selectedImage}
          />
        ) : null}
        <div>
          <span>some boiler text</span>
        </div>
      </div>
    </main>
  )
}
