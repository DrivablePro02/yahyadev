import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import {  FaWhatsapp } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import { FiMail } from 'react-icons/fi';

const Contact = () => {


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 items-center w-full">
      <a className="text-blue-500 hover:text-blue-700" href="https://www.linkedin.com/in/yahya-eddaqqaq-0b130926b/" target="_blank">
        <FaLinkedin className="w-12 h-12" />
      </a>
      <a className="text-green-500 hover:text-green-700" href="https://wa.me/2120657217705" target="_blank">
        <FaWhatsapp className="w-12 h-12" />
      </a>
      <a className="text-red-500 hover:text-red-700" href="mailto:yahyadard@gmal.com" target="_blank">
        <FiMail className="w-12 h-12" />
      </a>
      <a className="text-blue-400 hover:text-blue-600" href="https://twitter.com/DrivablePro" target="_blank">
        <FaTwitter className="w-12 h-12" />
      </a>
    </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
