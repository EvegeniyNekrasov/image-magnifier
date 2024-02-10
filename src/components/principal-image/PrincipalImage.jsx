import { useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { images } from '../../utils/images'

import './principal-image.css'

export default function PrincipalImage({
  selectedImage,
  setShowMagnifier,
  setMagnifiedPosition,
}) {
  const [image, setImage] = useState(images[0])

  useEffect(() => {
    if (selectedImage !== null) {
      setImage(selectedImage)
    }
  }, [selectedImage])

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const offsetX = e.clientX - left
    const offsetY = e.clientY - top
    const xPercent = (offsetX / width) * 100
    const yPercent = (offsetY / height) * 100

    setMagnifiedPosition({ x: xPercent, y: yPercent })
    setShowMagnifier(true)
  }

  const handleMouseLeave = () => setShowMagnifier(false)

  return (
    <div className="principal-image-container">
      <img
        className="principal-image"
        src={image.url}
        alt={image.alt}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <span dangerouslySetInnerHTML={{ __html: image.credits }} />
    </div>
  )
}

PrincipalImage.propTypes = {
  selectedImage: PropTypes.object,
  setShowMagnifier: PropTypes.func,
  setMagnifiedPosition: PropTypes.func,
}
