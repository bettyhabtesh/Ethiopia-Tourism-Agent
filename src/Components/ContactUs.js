import React, { useState } from "react"; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: "" });

    try {
      const response = await fetch("https://formspree.io/f/myzbrroy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message
        }),
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: "Thank you! Your message has been sent successfully."
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: "Sorry, there was an error sending your message. Please try again."
      });
    }
  };

  return (     
    <section className="bg-[#F3E9DC] py-16 flex flex-col items-center">  
      {/* Contact Us Title */}       
      <h2 className="text-4xl font-semibold text-center text-customBrown mb-6 underline">           
        Contact Us         
      </h2>       

      {/* Form Container */}
      <div className="w-full max-w-4xl bg-[#F3E9DC] p-8 rounded-3xl shadow-lg">         
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>           
          {/* First Name */}           
          <div>                       
            <input                 
              type="text"                 
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full mt-1 py-4 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3a2b]"                 
              placeholder="First Name"               
            />           
          </div>            

          {/* Last Name */}           
          <div>                        
            <input                 
              type="text"                 
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full mt-1 py-4 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3a2b]"                 
              placeholder="Last Name"               
            />           
          </div>            

          {/* Email */}           
          <div>                         
            <input                 
              type="email"                 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 py-4 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3a2b]"                 
              placeholder="Email"               
            />           
          </div>            

          {/* Message */}           
          <div>                       
            <textarea                 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"                 
              className="w-full mt-1 py-4 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3a2b]"                 
              placeholder="Message"               
            ></textarea>           
          </div>            

          {/* Status Message */}
          {status.message && (
            <div className={`p-4 rounded-lg ${
              status.submitted 
                ? "bg-green-100 text-green-800 border border-green-300" 
                : "bg-red-100 text-red-800 border border-red-300"
            }`}>
              {status.message}
            </div>
          )}

          {/* Send Message Button */}           
          <div>             
            <button               
              type="submit"
              disabled={status.submitting}
              className="w-full py-4 bg-customBrown text-white font-semibold rounded-lg hover:bg-[#57453c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"             
            >               
              {status.submitting ? "Sending..." : "Send Message"}
            </button>           
          </div>         
        </form>       
      </div>     
    </section>   
  ); 
};

export default ContactUs;
