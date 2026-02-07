import { Metadata } from 'next';
import AboutUs from '@/views/AboutUs';

export const metadata: Metadata = {
  title: 'Study With Me Pomodoro Timer - StudyClock.com',
  description:
    'Start your Pomodoro session with StudyClock.com – 25 minutes of focused work followed by strategic breaks. Perfect for students and remote workers.',
  keywords:
    'study timer, pomodoro, clock timer, countdown timer, productivity, focus timer, time management',
  alternates: {
    canonical: 'https://studyclock.com/',
  },
};

export default function Home() {
  return (
    <AboutUs />
  );
}
