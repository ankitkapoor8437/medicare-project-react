import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import heroImage1 from '../assets/images/hero-img01.png'
import heroImage2 from '../assets/images/hero-img02.png'
import heroImage3 from '../assets/images/hero-img03.png'
import Options from '../assets/data/Options'
import Statistics from '../assets/data/Statistics'
import About from '../components/about/About'
import ServiceList from '../components/services/ServiceList'

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
    </>
  )
}

export default Home