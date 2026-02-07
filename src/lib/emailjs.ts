import emailjs from '@emailjs/browser';

// Initialize EmailJS
export const initEmailJS = () => {
  // Replace with your actual EmailJS public key
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
};

// Email service configuration
export const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
export const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
export const EMAIL_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
