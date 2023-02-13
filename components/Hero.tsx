import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Ajay Kumar",
      'Guy-who-loves-Problem-Solving',
      '<UsingMernStack />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto"
        src="/profile1.jpeg"
        height={128}
        width={128}
        alt="profile"
      />
      <div className='z-20'>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className='pt-5'>
          <Link href="#about" ><button className='heroButton'>About</button></Link>
          <Link href="#experience" ><button className='heroButton'>Experience</button></Link>
          <Link href="#skills" ><button className='heroButton'>Skills</button></Link>
          <Link href="#projects" ><button className='heroButton'>Projects</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
