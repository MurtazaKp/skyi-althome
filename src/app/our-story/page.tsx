import { Metadata } from 'next';
import OurStoryClient from '../components/OurStoryClient';

export const metadata: Metadata = {
  title: 'Our Story - AltHome',
  description: 'Inspired by nature, engineered through precision systems',
};

export default function Page() {
  return <OurStoryClient />;
}
