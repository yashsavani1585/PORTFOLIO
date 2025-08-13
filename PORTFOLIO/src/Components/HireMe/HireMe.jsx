import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";

const HireMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully! I’ll reply to you soon.");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <Toaster position="top-right" reverseOrder={false} /> 
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contacts</h1>
        <p className="text-center text-gray-400 mb-12">
          If you have a project in mind or want to work together, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <a href="mailto:yashsavani1585@example.com" className="hover:underline">
                yashsavani1585@example.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-400 text-2xl" />
              <a href="tel:+919909288061" className="hover:underline">
                +91 9909288061
              </a>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/yash-savani-21029524a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-500 text-3xl hover:scale-110 transition" />
              </a>
              <a
                href="https://github.com/yashsavani1585"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-gray-300 text-3xl hover:scale-110 transition" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
