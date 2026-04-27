import { Metadata } from 'next';
import ContactClient from '../components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact - AltHome',
  description: 'Get in touch with us to start your modular journey',
};

export default function Page() {
  return <ContactClient />;
}
