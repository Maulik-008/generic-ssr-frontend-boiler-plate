import AboutUs from '@/views/AboutUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - StudyClock.com Mission & Team',
  description:
    'Learn about StudyClock.com - our mission to help students and professionals boost productivity through effective time management tools.',
  keywords:
    'about studyclock, our mission, productivity tools, study timer team, time management software',
  alternates: {
    canonical: 'https://studyclock.com/about-us',
  },
};

export default function AboutUsPage() {
  return <AboutUs />;
}
