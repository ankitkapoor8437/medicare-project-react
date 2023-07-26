import React from 'react'
// Icons
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
// Images
import heroImage1 from '../assets/images/hero-img01.png'
import heroImage2 from '../assets/images/hero-img02.png'
import heroImage3 from '../assets/images/hero-img03.png'
import FeatureImage from '../assets/images/feature-img.png'
import VideoIcon from '../assets/images/video-icon.png'
import AvatarIcon from '../assets/images/avatar-icon.png'
import faqImage from '../assets/images/faq-img.png'
// Components
import Options from '../assets/data/Options'
import Statistics from '../assets/data/Statistics'
import About from '../components/about/About'
import ServiceList from '../components/services/ServiceList'
import FeatureList from '../assets/data/FeatureList';
import DoctorList from '../components/doctors/DoctorList';
import FaqList from '../components/faq/FaqList';

const Home = () => {
  return (
    <>
      {/* Hero Section */}

      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patients live a healthy, longer life.
                </h1>

                <p className='text__para'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, delectus nesciunt! Ipsam possimus magni voluptatum excepturi quo, delectus voluptatibus maxime expedita, iste culpa architecto, impedit alias harum rem voluptas hic?
                </p>

                <button className='btn'>Request an Appointment.</button>
              </div>

              {/* Hero Counter */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                {Statistics.map(({ value, desc, color }) => (
                  <div >
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                      {value}
                    </h2>
                    <span className={color}></span>
                    <p className='text__para'>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* hero image */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={heroImage1} className='w-full' alt="" />
              </div>
              <div className='mt-30px'>
                <img src={heroImage2} alt="" className='w-full mb-[30px]' />
                <img src={heroImage3} alt="" className='w-full' />
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Hero Section End */}
      <section section >
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Providing the best medical services.
            </h2>
            <p className='text__para text-center'>World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            {
              Options.map(({ image, title, desc }) => (
                <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={image} alt="" />
                  </div>

                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                      {title}
                    </h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                      {desc}
                    </p>
                    <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none' >
                      <BsArrowRight className='group-hover:text-white w-6 h-5' />
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section >


      {/* About Section Start */}
      <About />
      {/* About Section End */}

      {/* Services start section */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px mx-auto]'>
            <h2 className='heading text-center'>Our medical services.</h2>
            <p className='text__para text-center'>
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <ServiceList />

        </div>
      </section>
      {/* Services end section */}


      {/* Feature Section Start*/}

      <section>
        <div className='container'>
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            {/* Feature content */}
            <div className='xl:w-[670px]'>
              <h2 className='heading'>
                Get virtual treatment <br />anytime.
              </h2>

              <ul className='pl-4'>
                {FeatureList.map(({ point }) => (
                  <li className='text__para'>{point}</li>
                ))}
              </ul>
              <Link to="">
                <button className='btn'>
                  Learn More
                </button>
              </Link>
            </div>

            {/* Feature image */}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={FeatureImage} alt="" className='w-3/4' />

              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 
              md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                      Tue, 24
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[600]'>
                      10:00 AM
                    </p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center 
                  bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] '>
                    <img src={VideoIcon} alt="" />
                  </span>
                </div>

                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full '>
                  Consultation
                </div>

                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={AvatarIcon} alt="" />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>
                    Aniket Singhania
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* Feature Section End*/}

      {/* Doctors Section Start */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px mx-auto]'>
            <h2 className='heading text-center'>Our Great Doctors.</h2>
            <p className='text__para text-center'>
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* Doctors Section End */}

      {/* FAQ Section Start */}
      <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={faqImage} alt="" />
            </div>
            <div className='w-full md:w-1/2'>
              <h2 className='heading'>Most questions by our beloved patients.</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section End */}



    </>
  )
}

export default Home