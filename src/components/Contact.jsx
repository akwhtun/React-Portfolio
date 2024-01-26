import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import ClipLoader from "react-spinners/ClipLoader";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <p className="line text-3xl text-light-gray text-opacity-90 font-ubuntu">
        Contact Me
      </p>

      <div className="flex md:flex-row flex-col justify-center xl:px-28 sm:px-10 px-4 py-10 gap-y-3 gap-x-14">
        <a
          href="tel:+959881971360"
          className="bg-btn-color hover:bg-btn-hover text-light-gray text-opacity-80 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          {" "}
          <FontAwesomeIcon icon={faPhone} className="icon-large px-2" />{" "}
          +959881971360
        </a>

        <a
          href="mailto:akwhtun@gmail.com"
          className="bg-btn-color hover:bg-btn-hover text-light-gray text-opacity-80 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          {" "}
          <FontAwesomeIcon icon={faEnvelope} className="icon-large px-2" />{" "}
          akwhtun@gmail.com
        </a>
        <a
          href="https://www.google.com/maps?q=21.4745,95.3888"
          className="bg-btn-color hover:bg-btn-hover text-light-gray text-opacity-80 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <FontAwesomeIcon icon={faMapMarker} className="icon-large px-2" />{" "}
          Myanmar, Mandalay, Myingyan
        </a>
      </div>
      <form className="xl:px-28 sm:px-10 px-4" onSubmit={handleSubmit}>
        <div className="bg-btn-color mb-2 rounded relative" role="alert">
          <span
            ref={msgRef}
            className="px-4 py-2 block font-bold border-btn-hover text-light-gray text-opacity-80"
          ></span>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-light-gray text-opacity-80 font-semibold mb-2"
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
            className="w-full bg-btn-color text-light-gray text-opacity-90 px-4 py-2 border border-btn-color rounded-md  focus:outline-none focus:border-background-color"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-light-gray text-opacity-80 font-semibold mb-2"
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
            className="w-full bg-btn-color text-light-gray text-opacity-90 px-4 py-2 border border-btn-color rounded-md  focus:outline-none focus:border-background-color"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-light-gray text-opacity-80 font-semibold mb-2"
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
            className="w-full bg-btn-color text-light-gray text-opacity-90 px-4 py-2 border border-btn-color rounded-md  focus:outline-none focus:border-background-color"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="btn bg-btn-color hover:bg-btn-hover text-light-gray text-opacity-80 font-bold py-2 px-4 rounded transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="line text-3xl text-black py-10">
        <a
          href="https://www.facebook.com/profile.php?id=100087490458440&mibextid=JRoKGi"
          className="btn bg-btn-color hover:bg-btn-hover text-light-gray text-opacity-80 font-bold px-3 py-1 rounded-md shadow-lg"
        >
          <FontAwesomeIcon icon={faFacebook} className="icon-large" />
        </a>
        <a
          href="https://github.com/akwhtun"
          className="btn bg-btn-color hover:bg-btn-hover text-light-gray text-opacity-80 font-bold px-3 py-1 rounded-md shadow-lg mx-2"
        >
          <FontAwesomeIcon icon={faGithub} className="icon-large" />
        </a>
        <a
          href="##"
          className="btn bg-btn-color hover:bg-btn-hover text-light-gray text-opacity-80 font-bold px-3 py-1 rounded-md shadow-lg"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon-large" />
        </a>
      </div>
      <div className="flex justify-center pb-2">
        <p className="text-2xl text-white text-opacity-0 relative font-ubuntu scrolling">
          Thanks for Scrolling.
        </p>
      </div>
      {loading && (
        <div className="contact-load">
          <ClipLoader
            color={"snow"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </div>
  );
}
