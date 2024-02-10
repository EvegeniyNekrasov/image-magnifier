import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { images } from '../../utils/images'

import './magnifier.css'

export default function Magnifier({ selectedImage, magnifiedPosition }) {
  const [img, setImg] = useState(images[0])

  useEffect(() => {
    if (selectedImage !== null) {
      setImg(selectedImage)
    }
  }, [selectedImage])

  return (
    <div
      className="magnifier"
      style={{
        backgroundImage: `url(${img.url})`,
        backgroundPosition: `${magnifiedPosition.x}% ${magnifiedPosition.y}%`,
      }}
    ></div>
  )
}

Magnifier.propTypes = {
  selectedImage: PropTypes.object,
  magnifiedPosition: PropTypes.object,
}
