"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// import { Playfair_Display } from "next/font/google";

export default function Home() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    message: ""
  });

  // const playfair = Playfair_Display({ subsets: ["latin"] });

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const text = `Hello Swastik Hotel,

Name: ${formData.name}
Phone: ${formData.phone}
Check-in: ${formData.checkin}
Check-out: ${formData.checkout}
Message: ${formData.message}

नमस्ते, मुझे कमरे की उपलब्धता जाननी है।`;

    const url = `https://wa.me/919756066660?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    // <main className="bg-white text-gray-800 scroll-smooth">
    <main className="bg-white text-gray-800 scroll-smooth selection:bg-emerald-200">

      {/* NAVBAR */}
      {/* <nav className="fixed top-0 w-full bg-black/40 text-white backdrop-blur-md shadow-sm z-50"> */}
      <nav
  className={`fixed top-0 w-full text-white backdrop-blur-md z-50 transition-all duration-500 ${
    scrolled
      ? "bg-black/80 shadow-lg"
      : "bg-black/40"
  }`}
>
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* <h1 className="text-xl font-bold">Swastik Hotel</h1> */}
                    <h1 className="text-xl font-semibold tracking-wide drop-shadow-md">Swastik Hotel</h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#rooms" className="hover:text-emerald-300 transition">Rooms</a>
            <a href="#amenities" className="hover:text-emerald-300 transition">Amenities</a>
            <a href="#gallery" className="hover:text-emerald-300 transition">Gallery</a>
            <a href="#testimonials" className="hover:text-emerald-300 transition">Testimonials</a>
            <a href="#location" className="hover:text-emerald-300 transition">Location</a>
            <a href="#contact" className="hover:text-emerald-300 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      {/* <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-orange-100 to-white px-4"> */}
            {/* <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-amber-100 via-orange-50 to-[#fdfaf6] px-4">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Swastik Hotel
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-8">
          Comfortable Stay Near Ram Jhula & Ganga  
          <br />
          आरामदायक ठहराव राम झूला और गंगा के पास
        </p> */}
        {/* <a
          href="https://wa.me/919756066660"
          target="_blank"
          className="bg-green-500 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 transition"
        > */}

         {/* <a
          href="https://wa.me/919756066660"
          target="_blank"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 transition"
        >
          Check Availability on WhatsApp
        </a>
      </section> */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white">

  {/* Background */}
  {/* <img
    src="/images/hero.jpeg"
    className="absolute inset-0 w-full h-full object-cover"
    alt="Swastik Hotel"
  /> */}
    <img
    src="/images/hero.jpeg"
className="absolute inset-0 w-full h-full object-cover scale-110 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
    alt="Swastik Hotel"
  />

  {/* Overlay */}
  {/* <div className="absolute inset-0 bg-black/55"></div> */}
    {/* <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div> */}
<div className="absolute inset-0 bg-black/40"></div>


  {/* Content */}
  <div className="relative z-10 px-6 mt-20">
    {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"> */}
    {/* <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-2xl"> */}
    {/* <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-2xl font-serif"> */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 drop-shadow-2xl font-serif">

      Swastik Hotel
    </h1>
    

    <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-gray-200">
      Premium Comfortable Stay Near Ram Jhula & Ganga  
      <br />
      आरामदायक ठहराव राम झूला और गंगा के पास
    </p>

    {/* <a
      href="https://wa.me/919756066660"
      target="_blank"
      className="bg-emerald-600 hover:bg-emerald-700 px-10 py-4 rounded-full text-lg shadow-2xl transition duration-300"
    > */}
       <a
  href="https://wa.me/919756066660?text=Hello%20Swastik%20Hotel%2C%20I%20want%20to%20check%20room%20availability."
      target="_blank"
      className="bg-emerald-600 hover:bg-emerald-700 px-10 py-4 rounded-full text-lg shadow-2xl transition duration-300 hover:scale-105 hover:shadow-emerald-500/30"
    >
      Check Availability on WhatsApp
    </a>
  </div>
</section>

      {/* ROOMS */}
      {/* <section id="rooms" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Rooms</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Single Bedroom</h3>
            <p>Starting from ₹1200 / night</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Double Bedroom</h3>
            <p>Starting from ₹2000 / night</p>
          </div>
        </div>
      </section> */}
      {/* ROOMS */}
{/* <section id="rooms" className="py-20 bg-gray-50 text-center"> */}
  <motion.section
  initial={{ opacity: 0, y: 120, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  id = "rooms"
  className="py-20 bg-gray-50 text-center"
>
  <h2 className="text-3xl font-bold mb-10">Our Rooms</h2>

  <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">

    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
      <img src="/images/single-room.jpeg" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Single Bedroom</h3>
        <p className="mb-3">Starting from ₹1200 / night</p>
        <a href="https://wa.me/919756066660" target="_blank"
          className="text-orange-500 font-semibold">
          Call for Best Price
        </a>
      </div>
    </div>

    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition">
      <img src="/images/double-room.jpeg" className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Double Bedroom</h3>
        <p className="mb-3">Starting from ₹2000 / night</p>
        <a href="https://wa.me/919756066660" target="_blank"
          className="text-orange-500 font-semibold">
          Call for Best Price
        </a>
      </div>
    </div>

  </div>
{/* </section> */}
</motion.section>

      {/* AMENITIES */}
      {/* <section id="amenities" className="py-20 text-center bg-white"> */}
        <motion.section
  initial={{ opacity: 0, y: 120, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  id="amenities"
  className="py-20 text-center bg-white"
>
        <h2 className="text-3xl font-bold mb-10">Amenities</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <div>📶 Free WiFi</div>
          <div>❄️ AC Rooms</div>
          <div>🚿 Attached Bathroom</div>
          <div>⚡ 24x7 Power Backup</div>
          <div>🛎 Room Service</div>
          <div>🅿️ Parking</div>
        </div>
      {/* </section> */}
      </motion.section>

      {/* GALLERY */}
      {/* <section id="gallery" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-10">Gallery</h2>
        <p>Add your hotel images here (we’ll connect real photos next)</p>
      </section> */}
{/* GALLERY */}
{/* <section id="gallery" className="py-20 bg-gray-50 text-center"> */}
  <motion.section
  initial={{ opacity: 0, y: 120, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  id="gallery"
  className="py-20 bg-gray-50 text-center"
>
  <h2 className="text-3xl font-bold mb-10">Gallery</h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
    <img src="/images/hotel-front.jpeg" className="rounded-xl object-cover h-60 w-full hover:scale-105 transition duration-300" />
    <img src="/images/reception.jpeg" className="rounded-xl object-cover h-60 w-full hover:scale-105 transition duration-300" />
    <img src="/images/corridor.jpeg" className="rounded-xl object-cover h-60 w-full hover:scale-105 transition duration-300" />
  </div>
{/* </section> */}
</motion.section>

{/* HOTEL TOUR */}
{/* <section className="py-20 bg-white text-center"> */}
  <motion.section
  initial={{ opacity: 0, y: 120, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  className="py-20 bg-white text-center"
>
  <h2 className="text-3xl font-bold mb-10">Hotel Tour</h2>

  <div className="max-w-4xl mx-auto px-4">
    <video 
      src="/videos/hotel-tour.mp4" 
      controls 
      className="w-full rounded-2xl shadow-lg"
    />
  </div>
{/* </section> */}
</motion.section>

{/* TESTIMONIALS */}
{/* <section className="py-20 bg-gray-50 text-center"> */}
  <motion.section
  initial={{ opacity: 0, y: 120, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  id="testimonials"
  className="py-20 bg-gray-50 text-center"
>
  <h2 className="text-3xl font-bold mb-12">What Our Guests Say</h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">

    <div className="bg-white p-6 rounded-2xl shadow-md">
      <p className="mb-4">
        “Very clean rooms and walking distance to Ram Jhula. 
        Staff was very helpful.”
      </p>
      <h4 className="font-semibold">– Rahul Sharma</h4>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-md">
      <p className="mb-4">
        “Perfect location near Ganga and market. 
        Budget friendly and comfortable stay.”
      </p>
      <h4 className="font-semibold">– Priya Verma</h4>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-md">
      <p className="mb-4">
        “Great for families. Safe and peaceful area. 
        Highly recommended.”
      </p>
      <h4 className="font-semibold">– Amit Joshi</h4>
    </div>

  </div>
{/* </section> */}
</motion.section>

{/* LOCATION */}
{/* <section className="py-20 bg-white text-center"> */}
  <motion.section
  initial={{ opacity: 0, y: 120, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  id="location"
  className="py-20 bg-white text-center"
>
  <h2 className="text-3xl font-bold mb-10">Our Location</h2>

  <p className="mb-6">
    📍 Near Ram Jhula, Janki Setu, Rishikesh  
    <br />
    गंगा और स्थानीय बाजार के पास
  </p>

  <div className="max-w-4xl mx-auto px-4">
    {/* <iframe
      src="PASTE_YOUR_GOOGLE_MAP_EMBED_LINK_HERE"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="rounded-2xl shadow-lg"
    ></iframe> */}
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d862.8233646971636!2d78.30233626962676!3d30.114415158520156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA2JzUxLjkiTiA3OMKwMTgnMTAuNyJF!5e0!3m2!1sen!2sin!4v1772566961058!5m2!1sen!2sin"
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  className="rounded-2xl shadow-lg"
></iframe>
  </div>
{/* </section> */}
</motion.section>

      {/* CONTACT FORM */}
      {/* <section id="contact" className="py-20 text-center bg-white"> */}
        <motion.section
   initial={{ opacity: 0, y: 120, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  id="contact"
  className="py-20 bg-white text-center"
>
        <h2 className="text-3xl font-bold mb-10">Check Room Availability</h2>

        <div className="max-w-xl mx-auto space-y-4 px-4">
          <input type="text" name="name" placeholder="Your Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg" />

          <input type="text" name="phone" placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg" />

          <input type="date" name="checkin"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg" />

          <input type="date" name="checkout"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg" />

          <textarea name="message" placeholder="Your Message"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg" />

          {/* <button
            onClick={sendToWhatsApp}
            className="bg-green-500 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 transition w-full"
          > */}
                <button
            onClick={sendToWhatsApp}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 transition w-full"
          >
            Send Inquiry on WhatsApp
          </button>
        </div>
      {/* </section> */}
      </motion.section>

      {/* FLOATING WHATSAPP */}
      {/* <a
        href="https://wa.me/919756066660"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      > */}
         <a
  href="https://wa.me/919756066660?text=Hello%20Swastik%20Hotel%2C%20I%20want%20to%20check%20room%20availability."
        target="_blank"
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        WhatsApp
      </a>

{/* FOOTER */}
<footer className="bg-gray-900 text-white py-10 text-center">
  <h3 className="text-xl font-semibold mb-4">Swastik Hotel</h3>
  <p className="mb-2">Near Ram Jhula, Janki Setu, Rishikesh</p>
  <p className="mb-4">📞 +91 9756066660</p>

  {/* <a
    href="https://wa.me/919756066660"
    target="_blank"
    className="bg-green-500 px-6 py-2 rounded-full hover:bg-green-600 transition"
  > */}
    <a
  href="https://wa.me/919756066660?text=Hello%20Swastik%20Hotel%2C%20I%20want%20to%20check%20room%20availability."
    target="_blank"
    className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2 rounded-full hover:bg-green-600 transition"
  >
    Book on WhatsApp
  </a>

  <p className="mt-6 text-sm text-gray-400">
    © {new Date().getFullYear()} Swastik Hotel. All rights reserved.
  </p>
</footer>
    </main>
  );
}





// git add .
// git commit -m "update"
// git push
