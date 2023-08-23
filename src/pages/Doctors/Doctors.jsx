import React from 'react'
import DoctorCard from '../../components/doctors/DoctorCard'
import doctors from '../../assets/data/doctors'
import Testimonial from '../../components/testimonials/Testimonial'

const Doctors = () => {
  return (
    <>
      <section className=' bg-[#fff9ae]'>
        <div className='container text-center'>
          <h2 className='text-[36px] leading-[54px] font-[700] text-headingColor'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input type="search"
              placeholder='Search Doctor'
              name="" id=""
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' />
            <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
            {
              doctors.map((doctor) => (<DoctorCard index={doctor.id} doctor={doctor} />))
            }
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='xl:w-[470px mx-auto]'>
            <h2 className='heading text-center'>What are patients say.</h2>
            <p className='text__para text-center'>
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  )
}

export default Doctors