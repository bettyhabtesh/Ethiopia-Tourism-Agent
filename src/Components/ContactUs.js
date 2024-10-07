import React from "react"; 

const ContactUs = () => {   
  return (     
    <section className="bg-[#F3E9DC] py-16 flex flex-col items-center">  
      {/* Contact Us Title */}       
      <h2 className="text-4xl font-semibold text-center text-customBrown mb-6 underline">           
        Contact Us         
      </h2>       

      {/* Form Container */}
      <div className="w-full max-w-4xl bg-[#F3E9DC] p-8 rounded-3xl shadow-lg">         
        <form className="space-y-6">           
          {/* First Name */}           
          <div>                       
            <input                 
              type="text"                 
              id="firstName"                 
              className="w-full mt-1 py-4 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3a2b]"                 
              placeholder="First Name"               
            />           
          </div>            

          {/* Last Name */}           
          <div>                        
            <input                 
              type="text"                 
              id="lastName"                 
              className="w-full mt-1 py-4 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3a2b]"                 
              placeholder="Last Name"               
            />           
          </div>            

          {/* Email */}           
          <div>                         
            <input                 
              type="email"                 
              id="email"                 
              className="w-full mt-1 py-4 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3a2b]"                 
              placeholder="Email"               
            />           
          </div>            

          {/* Message */}           
          <div>                       
            <textarea                 
              id="message"                 
              rows="6"                 
              className="w-full mt-1 py-4 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5c3a2b]"                 
              placeholder="Message"               
            ></textarea>           
          </div>            

          {/* Send Message Button */}           
          <div>             
            <button               
              type="submit"               
              className="w-full py-4 bg-customBrown text-white font-semibold rounded-lg hover:bg-[#57453c] transition-colors"             
            >               
              Send Message             
            </button>           
          </div>         
        </form>       
      </div>     
    </section>   
  ); 
}; 

export default ContactUs;
