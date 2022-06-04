import React from 'react';
import { FcApproval } from "react-icons/fc";
import '../styles/Herosec.css';

const HeroSec = () => {
  return (
    <>
      <div className='container-fluid '>
        <div className='container'>
            <div className='row hero_main_sec align-items-center py-5'>
                <div className='hero_banner_text col-12 col-md-6'>
                    <h2>Here will be a Title <FcApproval sx={{fontSize:"20px"}} /></h2>
                    {/* <iAiFillAppstore /> */}
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum soluta dolorem cumque blanditiis velit et accusamus corporis, ipsa veniam earum. </h4>
                </div>
                <div className='hero_banner-photo col-12 col-md-6'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvxoR6JnotAGGbNzBJF84ei7YTQ_g-bORlg&usqp=CAU" alt="banner_photo" className='img-fluid' />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroSec
