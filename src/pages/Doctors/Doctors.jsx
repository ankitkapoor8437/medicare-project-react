import React from 'react'
import DoctorCard from '../../components/doctors/DoctorCard'
import { doctors } from './../../assets/data/doctors'

const Doctors = () => {
  return (
    <>
      <section className=' bg-[#fff9ae]'>
        <div className='container text-center'>
          <h2 className='heading'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input type="search"
              placeholder='Search Doctor'
              name="" id=""
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' />
            <button className='btn mt-0 rounded-[0px] rounded-r-md'>Search</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Doctors