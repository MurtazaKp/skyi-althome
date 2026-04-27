import { Metadata } from 'next';
import HomeClient from './components/HomeClient';

export const metadata: Metadata = {
  title: 'AltHome - New horizons for your space',
  description: 'Experiential architecture that harmonizes with nature',
};

export default function Page() {
  return <HomeClient />;
}
