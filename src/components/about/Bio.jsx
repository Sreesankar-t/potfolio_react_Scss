import React from "react"
import {Link} from 'react-router-dom'
export const Bio = ({ items, Heading }) => {
  return (
    <>
      <Heading title='Short Bio' />
      <div className='about_details_bio'>
        {items.bio.map((val) => (
          <>
            <div className='about_details_bio_box'>
              <div className='about_details_bio_box_item'>
                <p>{val.para1}</p>
              </div>
              <div className='about_details_bio_box_item'>
                <p>{val.para2}</p>
              </div>
              <div className='about_details_bio_box_item'>
                <p>{val.para3}</p>
              </div>
              <div className='about_details_bio_box_item'>
              <p>CartWise Online platform - source code:</p>
              <a href="https://github.com/Sreesankar-t/CartWase-ecommerce.git" target="_blank" rel="noopener noreferrer">
              <p style={{color:"lightblue"}}>https://github.com/Sreesankar-t/CartWase-ecommerce.git</p>
              </a>

              
              <p>WONDERINN hotelbooking application - source code:</p>
              <a href="https://github.com/Sreesankar-t/BOOKING_app-MERN.git" target="_blank" rel="noopener noreferrer">
              
               <p style={{color:"lightblue"}}>https://github.com/Sreesankar-t/BOOKING_app-MERN.git</p>
              </a>
           
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
