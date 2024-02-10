import PropTypes from 'prop-types'

import './side-gallery.css'

export default function SideGallery({ images, setSelectedImage }) {
  const handleSetSelectedImage = (image) => {
    setSelectedImage(image)
  }

  return (
    <div className="side-gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.url}
          alt="placeholder"
          onMouseEnter={() => handleSetSelectedImage(image)}
        />
      ))}
    </div>
  )
}

SideGallery.propTypes = {
  images: PropTypes.array,
  setSelectedImage: PropTypes.func,
}
