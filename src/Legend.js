import React from 'react'
import './styles.css'

const Legend = () => {
  return (
    <div id="legend">
      <div className= "legendsection">
      <svg
            className="icon"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0469 11.4648C24.7734 11.4648 25.4414 11.793 26.0508 12.4492C26.6836 13.082 27 13.7617 27 14.4883V22.7148L21.7266 27.9883V32.4883H14.2734V27.9883L9 22.7148V14.4883C9 13.7617 9.30469 13.082 9.91406 12.4492C10.5234 11.793 11.2031 11.4648 11.9531 11.4648H12.0234V5.48828H14.9766V11.4648H21.0234V5.48828H23.9766L24.0469 11.4648Z"
              fill="#00A1C9"
            />
          </svg>
          <span className="categorylabel">Food</span>
          <span className="percentagelabel">25%</span>
      </div>
    </div>
  )
}

export default Legend