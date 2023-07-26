import React from 'react'
import FaqItem from './FaqItem'
import faq from '../../assets/data/faqs'

const FaqList = () => {
    return (
        <ul className='mt-[38px]'>
            {faq.map((item, index) => (<FaqItem item={item} key={index} />))}
        </ul>
    )
}

export default FaqList