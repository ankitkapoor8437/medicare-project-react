import React, { useState } from 'react';
import avatar from '../../assets/images/avatar-icon.png';
import { formatDate } from '../../utils/formatDate';
import { AiFillStar } from 'react-icons/ai';


const DoctorFeedback = () => {

  const [feedback, setFeedback] = useState(false);

  const num = 4;
  const stars = [...Array(num).keys()].map((_, index) => (
    <AiFillStar key={index} color="#0067FF" />
  ));

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All Reviews (272)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img src={avatar} alt="" className="w-full" />
            </figure>

            <div>
              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                Aniket Singh
              </h5>
              <p className="text-[14px] leading-6 text-textColor">
                {formatDate("02/14/2023")}
              </p>
              <p className="text-[15px] font-medium text-gray-600 mt-3">
                Good services, Highly recommended!!
              </p>
            </div>
          </div>
          <div className="flex gap-1">{stars}</div>
        </div>
      </div>

      <div className="text-center">
        <button className='btn'>
          Give Feedback
        </button>
      </div>

    </div>
  );
};

export default DoctorFeedback;
