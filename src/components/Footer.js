import React from 'react'

const Footer = () => {
  const style = {
    blueText: {
      color: '#2096F3'
    },
    social: {
      padding: "20px",
      fontSize: "30px",
      width: "50px",
      textAlign: "center",
      textDecoration: "none",
    },
    link: {
      textDecoration: "none",
      color: "black"
    },
    footer: {
      position: "relative",
      bottom: "0",
    }
  }
  return (
    <footer style={style.footer} className="text-center w-100 py-3">
      <div className='container'>
        <br />
        <div className='bg-white d-inline-flex m-2 rounded-pill'>
          <div className='d-flex'>
            <div className='' style={style.social}><a style={style.link} href="https://github.com/benbushman98" target="_blank" rel="noopener noreferrer" alt="GitHub Profile"><i aria-hidden="true" className="fa fa-1x fa-github"></i><title>GitHub</title></a></div>
            <div className='' style={style.social}><a style={style.link} href="https://www.linkedin.com/in/benjamin-bushman-92b17a217/" target="_blank" rel="noopener noreferrer" alt="LinkedIn Profile"><i aria-hidden="true" className="fa fa-1x fa-linkedin"></i><title>LinkedIn</title></a></div>
            <div className='me-3' style={style.social}><a style={style.link} href="https://wakatime.com/@d5bf7d44-40df-44fa-8584-1d216fc91153" target="_blank" rel="noopener noreferrer" alt="WakaTime Profile"><svg role="img" width="25" height="30" viewBox="0 2 24 24" xmlns="http://www.w3.org/2000/svg"><title>WakaTime</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.824a9.176 9.176 0 1 1 0 18.352 9.176 9.176 0 0 1 0-18.352zm5.097 5.058c-.327 0-.61.19-.764.45-1.025 1.463-2.21 3.162-3.288 4.706l-.387-.636a.897.897 0 0 0-.759-.439.901.901 0 0 0-.788.492l-.357.581-1.992-2.943a.897.897 0 0 0-.761-.446c-.514 0-.903.452-.903.96a1 1 0 0 0 .207.61l2.719 3.96c.152.272.44.47.776.47a.91.91 0 0 0 .787-.483c.046-.071.23-.368.314-.504l.324.52c-.035-.047.076.113.087.13.024.031.054.059.078.085.019.019.04.036.058.052.036.033.08.056.115.08.025.016.052.028.076.04.029.015.06.024.088.035.058.025.122.027.18.04.031.004.064.003.092.005.29 0 .546-.149.707-.36 1.4-2 2.842-4.055 4.099-5.849A.995.995 0 0 0 18 8.842c0-.508-.389-.96-.903-.96" /></svg></a></div>
          </div>
        </div>
        <p className='mt-4 text-white'>Created and Designed by Benjamin Bushman | Copyright © 2022</p>
      </div>
    </footer>
  )
}

export default Footer
