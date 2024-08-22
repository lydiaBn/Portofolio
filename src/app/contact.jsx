import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publickeyID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publickeyID).then(
      (result) => {
        setShowMessage(true); // Show the success message
        setFormData({ user_name: "", user_email: "", message: "" });

        // Hide the success message after 3 seconds
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <StyledContactForm>
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            className="dark:bg-gray-800 dark:text-white"
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            className="dark:bg-gray-800 dark:text-white"
          />
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="dark:bg-gray-800 dark:text-white"
          />
          <input type="submit" value="Send" />
        </form>
        {showMessage && (
          <SuccessMessage>Message sent successfully!</SuccessMessage>
        )}
      </div>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  min-height: 300px; /* Ensure the container has enough height */

  .form-container {
    width: 100%;
    max-width: 600px; /* Set a max-width for the form */
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input,
    textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    input {
      height: 40px;
      color: black; /* Text color for light mode */
    }

    textarea {
      min-height: 120px;
      color: black; /* Text color for light mode */
    }

    label {
      margin-top: 1rem;
      color: #000; /* Default color for light mode */
      font-weight: bold;

      /* Dark mode styles */
      .dark & {
        color: #fff; /* Change to white in dark mode */
      }
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: linear-gradient(
        90deg,
        rgba(0, 162, 255, 1) 0%,
        rgba(0, 206, 158, 1) 100%
      );
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      font-size: 16px;
    }
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1rem;
  padding: 10px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  text-align: center;
`;
