import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='relative z-10 pb-4 pt-2 text-center text-gray-500'>
      <div className='flex flex-wrap justify-center gap-4 mb-2 text-sm'>
        <Link
          href='/'
          className='text-gray-400 hover:text-gray-300 transition-colors'
        >
          Home
        </Link>
        <Link
          href='/pomodoro-technique'
          className='text-gray-400 hover:text-gray-300 transition-colors'
        >
          Pomodoro Technique
        </Link>
        <Link
          href='/study-clock-guide'
          className='text-gray-400 hover:text-gray-300 transition-colors'
        >
          Study Guide
        </Link>
        <Link
          href='/about-us'
          className='text-gray-400 hover:text-gray-300 transition-colors'
        >
          About Us
        </Link>
        <Link
          href='/privacy-policy'
          className='text-gray-400 hover:text-gray-300 transition-colors'
        >
          Privacy Policy
        </Link>
        <Link
          href='/terms-of-use'
          className='text-gray-400 hover:text-gray-300 transition-colors'
        >
          Terms of Use
        </Link>
      </div>
      <p>StudyClock.com - Focus Better, Achieve More</p>
      <div className='mt-2 text-xs'>
        <p>© {new Date().getFullYear()} StudyClock. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
