import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Coffee Cafe</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
              ratione ipsam quibusdam assumenda voluptatibus laudantium.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone></FaPhone>+880 (123) 456-789
              </p>
              <p className="flex items-center gap-2 mt-2">
                {" "}
                <FaMapLocation></FaMapLocation>Dhaka, Bangladesh
              </p>
            </div>
          </motion.div>
          {/* Footer Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first column links */}
              <div>
                <ul className="space-y-6">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* second column links */}
              <div>
                <ul className="space-y-6">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <a href="">
                <FaFacebook className="text-3xl hover:scale-105 duration-300"></FaFacebook>
              </a>
              <a href="">
                <FaInstagram className="text-3xl hover:scale-105 duration-300"></FaInstagram>
              </a>
              <a href="">
                <FaTelegram className="text-3xl hover:scale-105 duration-300"></FaTelegram>
              </a>
              <a href="">
                <FaGoogle className="text-3xl hover:scale-105 duration-300"></FaGoogle>
              </a>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
              <img src={CreditCards} alt="" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2024 Company Name. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
