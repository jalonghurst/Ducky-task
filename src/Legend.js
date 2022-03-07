import React from 'react'
import './styles.css'

const Legend = () => {
  return (
    <div id="legend">

      {/* Con*/}
      <div className= "legendsection">
        <svg className="icon"
            width="30" 
            height="28" 
            viewBox="0 0 30 28" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2891 13.2852L16.1094 15.4648L26.4453 25.8008L24.3359 27.9102L14 17.5742L3.66406 27.9102L1.55469 25.8008L16.1797 11.1758C15.6641 10.0273 15.582 8.71484 15.9336 7.23828C16.3086 5.76172 17.0938 4.42578 18.2891 3.23047C19.7188 1.80078 21.3242 0.980469 23.1055 0.769531C24.8867 0.535156 26.3281 0.957031 27.4297 2.03516C28.5078 3.13672 28.9414 4.58984 28.7305 6.39453C28.5195 8.19922 27.6875 9.81641 26.2344 11.2461C25.0391 12.4414 23.7031 13.2148 22.2266 13.5664C20.7734 13.918 19.4609 13.8242 18.2891 13.2852ZM8.16406 16.0273L1.83594 9.69922C0.6875 8.55078 0.113281 7.15625 0.113281 5.51562C0.113281 3.85156 0.6875 2.43359 1.83594 1.26172L12.3828 11.7383L8.16406 16.0273Z" fill="#F6BA75"/>
        </svg>

        <span className="categorylabel">Food</span>
        <span className="percentagelabel">25%</span>
      </div>

      {/* Consumption */}
      <div className= "legendsection">
        <svg className="icon"
            width="36" 
            height="36" 
            viewBox="0 0 36 36" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5234 27.9883C26.3203 27.9883 27.0117 28.293 27.5977 28.9023C28.1836 29.5117 28.4766 30.2148 28.4766 31.0117C28.4766 31.832 28.1836 32.5352 27.5977 33.1211C27.0352 33.6836 26.3438 33.9648 25.5234 33.9648C24.7266 33.9648 24.0234 33.6836 23.4141 33.1211C22.8047 32.5352 22.5 31.832 22.5 31.0117C22.5 30.2148 22.793 29.5117 23.3789 28.9023C23.9883 28.293 24.7031 27.9883 25.5234 27.9883ZM1.47656 4.01172H6.39844L7.80469 6.96484H30.0234C30.4453 6.96484 30.7969 7.11719 31.0781 7.42188C31.3594 7.72656 31.5 8.08984 31.5 8.51172C31.5 8.65234 31.4766 8.78125 31.4297 8.89844C31.4062 9.01563 31.3594 9.12109 31.2891 9.21484L25.9453 18.918C25.7109 19.3867 25.3594 19.7617 24.8906 20.043C24.4219 20.3242 23.9062 20.4648 23.3438 20.4648H12.1641L10.8281 22.9258L10.7578 23.1367C10.7578 23.2539 10.7812 23.3477 10.8281 23.418C10.8984 23.4648 10.9922 23.4883 11.1094 23.4883H28.4766V26.5117H10.4766C9.67969 26.5117 8.98828 26.2188 8.40234 25.6328C7.81641 25.0234 7.52344 24.3086 7.52344 23.4883C7.52344 23.2539 7.54688 23.0195 7.59375 22.7852C7.66406 22.5273 7.75781 22.293 7.875 22.082L9.91406 18.3555L4.5 6.96484H1.47656V4.01172ZM10.4766 27.9883C11.2734 27.9883 11.9766 28.293 12.5859 28.9023C13.1953 29.5117 13.5 30.2148 13.5 31.0117C13.5 31.832 13.1953 32.5352 12.5859 33.1211C12 33.6836 11.2969 33.9648 10.4766 33.9648C9.67969 33.9648 8.98828 33.6836 8.40234 33.1211C7.81641 32.5352 7.52344 31.832 7.52344 31.0117C7.52344 30.2148 7.80469 29.5117 8.36719 28.9023C8.95312 28.293 9.65625 27.9883 10.4766 27.9883Z" fill="#EF5F8A"/>
        </svg>

        <span className="categorylabel">Consumption</span>
        <span className="percentagelabel">25%</span>
      </div>

      {/* Energy */}
      <div className= "legendsection">
        <svg className="icon"
            width="36" 
            height="36" 
            viewBox="0 0 36 36" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0469 11.4648C24.7734 11.4648 25.4414 11.793 26.0508 12.4492C26.6836 13.082 27 13.7617 27 14.4883V22.7148L21.7266 27.9883V32.4883H14.2734V27.9883L9 22.7148V14.4883C9 13.7617 9.30469 13.082 9.91406 12.4492C10.5234 11.793 11.2031 11.4648 11.9531 11.4648H12.0234V5.48828H14.9766V11.4648H21.0234V5.48828H23.9766L24.0469 11.4648Z" 
            fill="#00A1C9"/>
        </svg>

        <span className="categorylabel">Energy</span>
        <span className="percentagelabel">25%</span>
      </div>

      {/* Public */}
      <div className= "legendsection">
        <svg className='icon'
            width="36" 
            height="36"
            viewBox="0 0 36 36" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M26.8594 27.0742C27.8438 26.0195 28.6172 24.8008 29.1797 23.418C29.7422 22.0117 30.0234 20.5352 30.0234 18.9883C30.0234 17.7461 29.8359 16.5508 29.4609 15.4023C29.1094 14.2539 28.5938 13.1992 27.9141 12.2383C27.2578 11.2773 26.4727 10.4219 25.5586 9.67188C24.6211 8.92187 23.6016 8.32422 22.5 7.87891V8.51172C22.5 9.33203 22.1953 10.0352 21.5859 10.6211C21 11.1836 20.2969 11.4648 19.4766 11.4648H16.5234V14.4883C16.5234 14.9102 16.3711 15.2617 16.0664 15.543C15.7617 15.8242 15.3984 15.9648 14.9766 15.9648H12.0234V18.9883H21.0234C21.4453 18.9883 21.7969 19.1289 22.0781 19.4102C22.3594 19.6914 22.5 20.043 22.5 20.4648V24.9648H23.9766C24.6328 24.9648 25.2188 25.1758 25.7344 25.5977C26.2734 25.9961 26.6484 26.4883 26.8594 27.0742ZM16.5234 30.8711V27.9883C15.7266 27.9883 15.0234 27.6953 14.4141 27.1094C13.8047 26.5 13.5 25.7852 13.5 24.9648V23.4883L6.32812 16.3164C6.23438 16.7383 6.15234 17.1836 6.08203 17.6523C6.01172 18.0977 5.97656 18.543 5.97656 18.9883C5.97656 20.5352 6.24609 21.9883 6.78516 23.3477C7.32422 24.707 8.0625 25.9141 9 26.9688C9.96094 28.0234 11.0859 28.9023 12.375 29.6055C13.6641 30.2852 15.0469 30.707 16.5234 30.8711ZM18 4.01172C20.0625 4.01172 22.0078 4.41016 23.8359 5.20703C25.6641 5.98047 27.2461 7.04688 28.582 8.40625C29.9414 9.76562 31.0195 11.3477 31.8164 13.1523C32.5898 14.9805 32.9766 16.9258 32.9766 18.9883C32.9766 21.0742 32.5898 23.0195 31.8164 24.8242C31.0195 26.6523 29.9414 28.2461 28.582 29.6055C27.2461 30.9648 25.6641 32.0312 23.8359 32.8047C22.0312 33.5781 20.0859 33.9648 18 33.9648C15.9375 33.9648 13.9922 33.5781 12.1641 32.8047C10.3359 32.0312 8.74219 30.9648 7.38281 29.6055C6.04688 28.2461 4.98047 26.6523 4.18359 24.8242C3.41016 23.0195 3.02344 21.0742 3.02344 18.9883C3.02344 16.9258 3.41016 14.9805 4.18359 13.1523C4.98047 11.3477 6.04688 9.76562 7.38281 8.40625C8.74219 7.04688 10.3359 5.98047 12.1641 5.20703C13.9688 4.41016 15.9141 4.01172 18 4.01172Z" fill="#3999E3"/>
        </svg>

        <span className="categorylabel">Public</span>
        <span className="percentagelabel">25%</span>
      </div>

      {/* Transport */}
      <div className= "legendsection">
        <svg className="icon"
            width="36" 
            height="36" 
            viewBox="0 0 36 36" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"> 
            <path d="M7.52344 17.5117H28.4766L26.2266 10.7617H9.77344L7.52344 17.5117ZM26.2266 24.9648C26.8594 24.9648 27.3867 24.7539 27.8086 24.332C28.2539 23.8867 28.4766 23.3477 28.4766 22.7148C28.4766 22.082 28.2539 21.5547 27.8086 21.1328C27.3867 20.6875 26.8594 20.4648 26.2266 20.4648C25.5938 20.4648 25.0547 20.6875 24.6094 21.1328C24.1875 21.5547 23.9766 22.082 23.9766 22.7148C23.9766 23.3477 24.1875 23.8867 24.6094 24.332C25.0547 24.7539 25.5938 24.9648 26.2266 24.9648ZM9.77344 24.9648C10.4062 24.9648 10.9336 24.7539 11.3555 24.332C11.8008 23.8867 12.0234 23.3477 12.0234 22.7148C12.0234 22.082 11.8008 21.5547 11.3555 21.1328C10.9336 20.6875 10.4062 20.4648 9.77344 20.4648C9.14062 20.4648 8.60156 20.6875 8.15625 21.1328C7.73438 21.5547 7.52344 22.082 7.52344 22.7148C7.52344 23.3477 7.73438 23.8867 8.15625 24.332C8.60156 24.7539 9.14062 24.9648 9.77344 24.9648ZM28.4062 9.98828L31.5 18.9883V31.0117C31.5 31.4336 31.3594 31.7852 31.0781 32.0664C30.7969 32.3477 30.4453 32.4883 30.0234 32.4883H28.4766C28.0547 32.4883 27.7031 32.3477 27.4219 32.0664C27.1406 31.7852 27 31.4336 27 31.0117V29.4648H9V31.0117C9 31.4336 8.85938 31.7852 8.57812 32.0664C8.29688 32.3477 7.94531 32.4883 7.52344 32.4883H5.97656C5.55469 32.4883 5.20312 32.3477 4.92188 32.0664C4.64062 31.7852 4.5 31.4336 4.5 31.0117V18.9883L7.59375 9.98828C7.73438 9.54297 8.00391 9.19141 8.40234 8.93359C8.82422 8.65234 9.28125 8.51172 9.77344 8.51172H26.2266C26.7188 8.51172 27.1641 8.65234 27.5625 8.93359C27.9844 9.19141 28.2656 9.54297 28.4062 9.98828Z" fill="#673E88"/>
        </svg>


        <span className="categorylabel">Transport</span>
        <span className="percentagelabel">25%</span>
      </div>


    </div>
  )
}

export default Legend