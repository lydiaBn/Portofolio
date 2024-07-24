import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publickeyID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  console.log(process.env);
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
    console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("Public Key ID:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    emailjs.sendForm(serviceID, templateID, form.current, publickeyID).then(
      (result) => {
        console.log(result.text);
        setShowMessage(true); // Show the success message
        // Clear the form after submission
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
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleInputChange}
        />
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <input type="submit" value="Send" />
      </form>
      {showMessage && (
        <SuccessMessage>Message sent successfully!</SuccessMessage>
      )}
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input,
    textarea {
      width: 100%;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    input {
      height: 35px;
      color: black; /* Text color for light mode */

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-height: 100px;
      min-height: 100px;
      color: black; /* Text color for light mode */

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
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
