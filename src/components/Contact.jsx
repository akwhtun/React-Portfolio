import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const msgRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xeqyjnpb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        msgRef.current.textContent = "Your message has been successfully sent.";
      } else {
        msgRef.current.textContent = "Fail to sent.Try again!";
      }
    } catch (error) {
      msgRef.current.textContent = "Fail to sent. " + error;
    }
  };

  return (
    <div className="" id="contact">
      <p className="line text-3xl text-black">Contact Me</p>

      <div className="flex md:flex-row flex-col justify-center xl:px-28 sm:px-10 px-4 py-10 gap-y-3 gap-x-14">
        <a
          href="tel:+1234567890"
          className="bg-dark-grayish-blue hover:bg-light-hover-gray text-light-gray font-bold py-2 px-4 rounded inline-flex items-center"
        >
          {" "}
          <FontAwesomeIcon icon={faPhone} className="icon-large px-2" />{" "}
          +959891082064
        </a>
        <a
          href="mailto:example@gmail.com"
          className="bg-dark-grayish-blue hover:bg-light-hover-gray text-light-gray font-bold py-2 px-4 rounded inline-flex items-center"
        >
          {" "}
          <FontAwesomeIcon icon={faEnvelope} className="icon-large px-2" />{" "}
          akwhtun@gmail.com
        </a>
        <a
          href="https://www.google.com/maps?q=21.4745,95.3888"
          className="bg-dark-grayish-blue hover:bg-light-hover-gray text-light-gray font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <FontAwesomeIcon icon={faMapMarker} className="icon-large px-2" />{" "}
          Myanmar, Mandalay, Myingyan
        </a>
      </div>
      <form className="xl:px-28 sm:px-10 px-4" onSubmit={handleSubmit}>
        <div
          className="bg-dark-grayish-blue mb-2 rounded relative"
          role="alert"
        >
          <span ref={msgRef} className="px-4 py-2 block font-bold border-light-hover-gray text-light-gray">
            
          </span>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-light-gray font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light-hover-gray"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-light-gray font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light-hover-gray"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-light-gray font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="6"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-light-hover-gray"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="btn bg-dark-grayish-blue hover:bg-light-hover-gray text-light-gray font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="line text-3xl text-black py-10">
        <a
          href="https://"
          className="btn bg-dark-grayish-blue hover:bg-light-hover-gray text-light-gray font-bold px-3 py-1"
        >
          <FontAwesomeIcon icon={faFacebook} className="icon-large" />
        </a>
        <a
          href="https://"
          className="btn bg-dark-grayish-blue hover:bg-light-hover-gray text-light-gray font-bold px-3 py-1 mx-2"
        >
          <FontAwesomeIcon icon={faGithub} className="icon-large" />
        </a>
        <a
          href="https://"
          className="btn bg-dark-grayish-blue hover:bg-light-hover-gray text-light-gray font-bold px-3 py-1"
        >
          <FontAwesomeIcon icon={faTelegram} className="icon-large" />
        </a>
      </div>
      <div className="flex justify-center pb-2">
        <p className="text-2xl text-darker-grayish-blue relative font-ubuntu scrolling">
          Thanks for Scrolling.
        </p>
      </div>
    </div>
  );
}
