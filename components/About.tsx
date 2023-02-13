import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0 }}
        src="/profile2.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-xl md:w-64 md:h-96 zl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{' '}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus
          inventore repellat dolores corrupti et, provident, facere assumenda,
          adipisci id voluptatem ipsa saepe officiis odio rem. Ea totam tenetur
          iusto. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dolor, dignissimos soluta blanditiis animi magnam dicta aut et illo
          libero officia laudantium delectus inventore. Maiores dolorum iure
          culpa ex perferendis officia. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestiae omnis, suscipit ex culpa, repellat aliquam
          quod maiores vitae natus assumenda quo, minima beatae a adipisci fugit
          est placeat illo quis!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
