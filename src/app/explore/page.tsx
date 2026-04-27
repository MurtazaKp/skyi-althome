import { Metadata } from 'next';
import ExploreClient from '../components/ExploreClient';

export const metadata: Metadata = {
  title: 'Explore Products - AltHome',
  description: 'Modular architecture for modern living',
};

export default function Page() {
  return <ExploreClient />;
}
