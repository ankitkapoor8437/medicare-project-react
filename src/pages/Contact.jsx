import React, { useState } from 'react'

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  }

  const submitChange = (e) => {
    e.preventDefault();
    console.log(contactForm);
  }

  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature?
          Let us know.
        </p>
        <form onSubmit={submitChange} className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">Your Email</label>
            <input type="email"
              id='email'
              placeholder='example@gmail.com'
              className="form__input mt-1"
              name='email'
              value={contactForm.email}
              onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="subject" className="form__label">Subject</label>
            <input type="subject"
              id='subject'
              placeholder='Let use know how can we help you.'
              className="form__input mt-1"
              name='subject'
              value={contactForm.subject}
              onChange={handleChange} />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">Your Message</label>
            <textarea type="text"
              rows="6"
              id='message'
              placeholder='Leave a comment....'
              className="form__input mt-1"
              name='message'
              value={contactForm.message}
              onChange={handleChange} />
          </div>
          <button type='submit' className='btn rounded sm:w-fit'>
            Submit
          </button>
        </form>
      </div>
    </section>)
}

export default Contact