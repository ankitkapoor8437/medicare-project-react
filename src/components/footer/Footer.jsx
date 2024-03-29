import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { socialLinks, quickLinks1, quickLinks2, quickLinks3 } from '../../assets/data/footerData'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright &#169; {year} developed by Ankit Kapoor. All rights reserved.
            </p>

            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map(({ path, icon, index }) => (
                <Link to={path}
                  key={index}
                  className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none' >{icon}</Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] text-headingColor'>
              Quick Links
            </h2>

            <ul>
              {quickLinks1.map(({ index, path, display }) => (
                <li key={index} className='mb-4'>
                  <Link to={path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] text-headingColor'>
              I want to:
            </h2>

            <ul>
              {quickLinks2.map(({ index, path, display }) => (
                <li key={index} className='mb-4'>
                  <Link to={path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] text-headingColor'>
              Support
            </h2>

            <ul>
              {quickLinks3.map(({ index, path, display }) => (
                <li key={index} className='mb-4'>
                  <Link to={path} className='text-[16px] leading-7 font-[400] text-textColor'>
                    {display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer