import "../styles/contact.css";
import { useState } from "react";
import backgroundImg from "../assets/Netflix-Hintergrund-2.webp"
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    categre: "",
    message: "",
  });
  return (
    <>
      {/* home-div */}

      {/* form */}
      <div className="home-container item-center ">
        <h1 className="text-3xl ">Contact Us!</h1>
        <form className="  w-5/6 ">
          <div>
            <label className="block">Movie Name</label>
            <input
              type="text"
              className="bg-white w-full border-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="m-8">Categrie</label>
            <input
              className="block focus:outline-none focus:ring-2 focus:ring-red-500 bg-white w-full border-2 rounded-sm   "
              type="text"
            />
          </div>
          <div>
            <label>Message</label>
            <textarea className="block bg-white w-full border-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500">
              {" "}
            </textarea>
          </div>
          <button className="font-bold form-btn ">SEND</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
