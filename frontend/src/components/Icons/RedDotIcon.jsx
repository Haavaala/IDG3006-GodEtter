import React from 'react'

function RedDot({ onClick }) {

  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
<path d="M24.9988 12.9464V12.0069C24.9988 6.84863 20.9699 2.66699 16 2.66699C11.0301 2.66699 7.00116 6.84863 7.00116 12.0069V12.9464C7.00116 14.0739 6.67962 15.1761 6.07706 16.1142L4.60048 18.413C3.25176 20.5128 4.2814 23.3669 6.62715 24.0309C12.7637 25.7679 19.2363 25.7679 25.3729 24.0309C27.7186 23.3669 28.7482 20.5128 27.3995 18.413L25.9229 16.1142C25.3204 15.1761 24.9988 14.0739 24.9988 12.9464Z" stroke="#1A1A1A" stroke-width="1.5"/>
<path d="M10 25.333C10.8734 27.6634 13.2299 29.333 16 29.333C18.7701 29.333 21.1266 27.6634 22 25.333" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="8.5" cy="7.16699" r="4" fill="#BD6F4E" stroke="black"/>
</svg>

  )
}

export default RedDot