import React from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import { HiStar } from 'react-icons/hi';

const Reviews = [
    {
        "patientName": "Rahul Singh",
        "review": "Dr. Rajesh Gupta is an excellent cardiologist. He diagnosed my heart condition accurately and provided the right treatment. Highly recommended!"
    },
    {
        "patientName": "Sneha Sharma",
        "review": "I had a great experience with Dr. Gupta. He patiently explained my health condition and the treatment plan. Very satisfied with his care."
    },
    {
        "patientName": "Amit Patel",
        "review": "I visited Dr. Rajesh for a routine checkup. He is friendly and knowledgeable. The clinic staff was also helpful. Will visit again."
    },
    {
        "patientName": "Ananya Singh",
        "review": "Dr. Neha Verma is a skilled dermatologist. Her treatment for my skin condition worked wonders. I'm very happy with the results."
    },
    {
        "patientName": "Ravi Verma",
        "review": "I had acne issues for years, but after consulting Dr. Neha, my skin has improved significantly. Her recommendations are effective."
    },
    {
        "patientName": "Priya Mehta",
        "review": "Dr. Verma is professional and caring. She takes the time to listen to her patients' concerns. I recommend her for any skin-related problems."
    },
    {
        "patientName": "Vikram Singh",
        "review": "Dr. Suresh Kumar performed my knee surgery. I'm grateful for his expertise and post-operative care. My knee feels much better now."
    },
    {
        "patientName": "Kavita Sharma",
        "review": "I had a sports injury, and Dr. Kumar helped me recover quickly. He explained the rehabilitation process in detail, which was very helpful."
    },
    {
        "patientName": "Anil Patel",
        "review": "Dr. Suresh is a highly skilled orthopedic surgeon. I underwent joint replacement surgery, and the results are outstanding."
    }
]


const Testimonial = () => {
    return (
        <div className='mt-[30px] lg:mt-[55px]'>
            <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}>
                {
                    Reviews.map(({ patientName, review }) => (
                        <SwiperSlide>
                            <div className='py-[30px] px-5 rounded'>
                                <div className='flex items-center gap-[13px]'>
                                    <img src={patientAvatar} alt="" />
                                    <div>
                                        <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                            {patientName}
                                        </h4>
                                        <div className='flex items-center gap-[2px]'>
                                            <HiStar className='text-yellowColor w-[18px] h-5' />
                                            <HiStar className='text-yellowColor w-[18px] h-5' />
                                            <HiStar className='text-yellowColor w-[18px] h-5' />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                                    "{review}"
                                </p>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}

export default Testimonial;