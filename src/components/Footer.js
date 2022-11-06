import React from 'react'

const Footer = () => {
  const style = {
    colorBack: {
      backgroundColor: "#222222"
    },
    blueText: {
      color: '#2096F3'
    }
  }
  return (
    <footer style={style.colorBack} className="text-center w-100 p-4 position-relative">
      <br/>
      <p className='text-white m-0'>Created and Designed by Benjamin Bushman | Copyright © 2022</p>
    </footer>
  )
}

export default Footer
