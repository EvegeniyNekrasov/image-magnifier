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
        <div className="nasa-history">
          <h3>NASA (National Aeronautics and Space Administration)</h3>
          <span>
            NASA, short for the National Aeronautics and Space Administration,
            has a rich and storied history that stretches back to its founding
            in 1958. Established in response to the Soviet Union's successful
            launch of the first artificial satellite, Sputnik, NASA quickly
            became the United States' primary space exploration agency.
          </span>
          <span>
            Throughout its history, NASA has achieved numerous groundbreaking
            milestones. In 1969, NASA's Apollo 11 mission famously landed the
            first humans, Neil Armstrong and Buzz Aldrin, on the Moon, marking a
            historic moment not only for the United States but for all of
            humanity. This achievement was followed by a series of successful
            lunar missions under the Apollo program.
          </span>
          <span>
            In addition to lunar exploration, NASA has been at the forefront of
            robotic exploration of the solar system. Landmark missions such as
            the Viking landers on Mars, Voyager spacecraft exploring the outer
            planets, and the Hubble Space Telescope, which has provided
            unprecedented views of the universe, have expanded our understanding
            of our solar system and beyond.
          </span>
          <span>
            Over the decades, NASA has continued to push the boundaries of space
            exploration, developing advanced technologies and conducting
            groundbreaking scientific research. From the Space Shuttle program
            to the International Space Station (ISS), NASA has been instrumental
            in advancing human spaceflight capabilities and fostering
            international collaboration in space exploration.
          </span>
          <span>
            Today, NASA remains committed to exploring the cosmos, with
            ambitious plans for future missions to the Moon, Mars, and beyond.
            With its legacy of innovation and discovery, NASA continues to
            inspire people around the world and pave the way for the future of
            space exploration.
          </span>
        </div>
      </div>
    </main>
  )
}
