import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = () => {
    // State for selected rating and hovered rating
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReview(value); // Update the review state
    }

    const handleSubmitReview = async (event) => {
        event.preventDefault();

    }

    return (
        <form action="">

            <div>
                {/* Heading asking the user to rate their experience */}
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                    How would you rate the overall experience?*
                </h3>

                <div>
                    {/* Generate star rating buttons */}
                    {[...Array(5).keys()].map((_, index) => {
                        const starIndex = index + 1;
                        return (
                            <button
                                key={starIndex}
                                type='button'
                                // Dynamic class to set color based on selection and hover
                                className={`${starIndex <= ((rating && hover) || hover) ? "text-yellowColor" : "text-gray-400"} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                // Update selected rating on click
                                onClick={() => setRating(starIndex)}
                                // Set hover state on mouse enter
                                onMouseEnter={() => { setHover(starIndex) }}
                                // Maintain hover effect when mouse leaves
                                onMouseLeave={() => setHover(rating)}
                                // Double click to reset both rating and hover
                                onDoubleClick={() => {
                                    setHover(0);
                                    setRating(0);
                                }}
                            >
                                <span>
                                    {/* Star icon */}
                                    <AiFillStar />
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="mt-[30px]">
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
                    Share your feedback or suggestions*
                </h3>
                <textarea
                    name='review'
                    value={review}
                    className="
                 border border-solid
                border-[#0066ff34] focus:outline
                 outline-primaryColor w-full px-4 py-3 rounded-md"
                    rows="5"
                    placeholder='Write your message'
                    onChange={handleChange}>

                </textarea>
            </div>
            <button type="submit" className="btn" onClick={handleSubmitReview}>
                Submit Feedback
            </button>
        </form>
    );
};

export default FeedbackForm;




// Import Statements:

// The code starts by importing the necessary components. It imports React and the AiFillStar icon from the 'react-icons/ai' package.
// It also imports the useState hook from 'react', which is used to manage component state.
// FeedbackForm Component:

// This is a functional component named FeedbackForm.
// State Management:

// Two pieces of state are initialized using the useState hook:
// rating represents the selected rating. It starts with a default value of 0.
// hover represents the rating that is being hovered over with the mouse. It also starts with a default value of 0.
// JSX Structure:

// Inside the return statement, the code generates JSX elements that will be rendered on the screen.
// Heading Element:

// This part creates a heading that asks the user to rate their experience.
// Star Rating Buttons:

// Inside the div element, a star rating system is generated using the map function on an array created using [...Array(5).keys()]. This array will have values [0, 1, 2, 3, 4].
// Button Elements:

// For each value in the array, the map function generates a button element.
// The key prop is set to starIndex to uniquely identify each button.
// The type is set to 'button' to prevent the button from submitting any form.
// The className is dynamically set based on whether the current star should be yellow (selected) or gray (not selected).
// The onClick handler updates the rating state to the selected star's index.
// The onMouseEnter handler updates the hover state to the star's index being hovered over.
// The onMouseLeave handler resets the hover state to the current rating (used to maintain hover effect when the mouse leaves).
// The onDoubleClick handler resets both rating and hover states to 0.
// Star Icon:

// The AiFillStar icon is rendered inside each button element.
// Component Export:

// The FeedbackForm component is exported as the default export of this module.
// Summary:
// The code creates a star rating feedback form component. It uses the useState hook to manage the selected rating (rating) and the currently hovered rating (hover). For each star button, dynamic class names are used to control the color based on the current selection and hover state. Event handlers are used to update the states as the user interacts with the buttons. Overall, this component provides a user-friendly way to rate an experience using star icons.
