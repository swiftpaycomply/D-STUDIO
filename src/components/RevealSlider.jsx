import { useState, useRef } from 'react'
import '../styles/RevealSlider.css'

function RevealSlider({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After' }) {
  const [sliderValue, setSliderValue] = useState(50)
  const containerRef = useRef(null)

  const handleChange = (e) => {
    setSliderValue(e.target.value)
  }

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percent = (x / rect.width) * 100
    if (percent >= 0 && percent <= 100) {
      setSliderValue(percent)
    }
  }

  return (
    <div 
      className="reveal" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      aria-label="Image comparison slider"
    >
      <picture>
        <img 
          className="before" 
          src={beforeImage} 
          alt={beforeLabel}
          aria-hidden={false}
        />
      </picture>

      <picture>
        <img 
          className="after" 
          src={afterImage} 
          alt={afterLabel}
          aria-hidden={true}
          style={{ clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` }}
        />
      </picture>

      <div className="reveal-divider" aria-hidden="true" style={{ left: `${sliderValue}%` }}></div>
      <div className="reveal-label label-before">{beforeLabel}</div>
      <div className="reveal-label label-after">{afterLabel}</div>
      
      <input 
        className="range" 
        type="range" 
        min="0" 
        max="100" 
        value={sliderValue} 
        onChange={handleChange}
        aria-label="Reveal slider"
      />
    </div>
  )
}

export default RevealSlider
