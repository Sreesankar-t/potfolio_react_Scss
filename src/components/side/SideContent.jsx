import React from "react"
import { side, socialIcon } from "../../data/data"
import sideImg from "../../images/WhatsApp Image 2023-11-30 at 13.07.58_8a06629f.jpg"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { FiDownloadCloud } from "react-icons/fi"

const Progress = ({ done, title, back }) => {

  return (
    <div className='progress'>
      <div
        className={`progress_done ${back}`}
        style={{
          opacity: 1,
          width: `${done}%`,
        }}
      ></div>
      <div className='progress_num'>
        <h4>{done}.</h4>
      </div>
      <div className='progress_title'>
        <h3> {title}</h3>
      </div>
    </div>
  )
}

export const SideContent = () => {

  const handleHireMeClick = () => {
    const email = 'mailto:sreeshankerthekkan@gmail.com';
    window.location.href = email;
  };

  const url = "http://localhost:3000/sreeshankerNew.pdf"
  const handleDownload=(url)=>{
   const fileName = url.split('/').pop();
   const aTage = document.createElement('a');
   aTage.href=url
   aTage.setAttribute('download',fileName)
   document.body.appendChild(aTage)
   aTage.click();
   aTage.remove();
  }
  return (
    <>
      <section className='sideContent'>
        <div className='sideContent_top'>
          <div className='sideContent_top_img'>
            <img src={sideImg} alt='side' width='100%' />
            <div className='sideContent_top_img_name'>
              <h3>Sreesankar t</h3>
              <span>Web Developer</span>
            </div>
          </div>
          <div className='sideContent_top_social'>
            {socialIcon.map((icons) => (
              <div className={icons.class}>
                <span>{icons.icon}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='sideContent_bottom'>
          <div className='sideContent_bottom_skill'>
            {side.map((item) => (
              <div className='sideContent_skill_box'>
                <Progress title={item.text} done={item.num} back={item.class} />
              </div>
            ))}
          </div>

          <div className='sideContent_bottom_buttonGroup'>
            <button onClick={()=>{handleDownload(url)}} className='sm_button'>
              <span>
                <FiDownloadCloud className='button_bicon' />
              </span>
            </button>
            <button onClick={handleHireMeClick} className='button'>
              <RiMoneyDollarCircleLine className='button_bicon' />
              <span>HIRE ME</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
