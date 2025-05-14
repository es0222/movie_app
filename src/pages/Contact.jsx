import "../styles/contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formEl = form.current;
    const name = formEl.name.value.trim();
    const email = formEl.email.value.trim();
    const message = formEl.message.value.trim();
    if (!name || !email || !message) {
      Swal.fire({
        icon: "failed",
        title: "Message not send!",
        text: "Please fill in all fields before submitting.",
        width: "350px",
        background: "black",
        color: "white",
       
        buttonsStyling: false, // نوقف التنسيق الافتراضي
        customClass: {
          confirmButton: "my-faild-btn faild-btn",
          popup: "my-popup",
          backdrop: "my-backdrop",
          title: "my-swal-title",
          popup: "my-swal-popup",
          htmlContainer: "my-swal-text",
        }, 
        confirmButtonColor: "red",
        confirmButtonText: "OK",
        didOpen: () => {
          const popup = document.querySelector(".swal2-popup");
          popup.style.border = "3px solid red";
          popup.style.borderRadius = "12px";
        },
      });
      return;
    }

    emailjs
      .sendForm(
        "service_jn7qtwl",
        "template_m3oywzq",
        form.current,
        "gh_784McLCshM5swO"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            width: "350px",
            background: "black",
            color: "white",
            confirmButtonColor: "green",
            confirmButtonText: "OK",
            buttonsStyling: false, // نوقف التنسيق الافتراضي
            customClass: {
              confirmButton: "my-confirm-btn",
              popup: "my-popup",
              backdrop: "my-backdrop",
              title: "my-swal-title",
              popup: "my-swal-popup",
              htmlContainer: "my-swal-text",
            },
            backdrop: true,
            didOpen: () => {
              const popup = document.querySelector(".swal2-popup");
              popup.style.border = "3px solid green";
              popup.style.borderRadius = "12px";
            },
          });
          console.log(result.text);
          formEl.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again later.",
            width: "350px",
          });
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {/* form */}
      <div className="container text-center my-5  ">
        
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto  text-start  "
        ><h1 className="mb-4 text-start text-white title">Contact Us!</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="form-control p-2"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="form-control p-2"
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="message" className="form-label fw-bold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Suggest a movie"
              className="form-control"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn contact-btn btn-danger px-4 py-2 fw-bold m-6">
            SEND
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
