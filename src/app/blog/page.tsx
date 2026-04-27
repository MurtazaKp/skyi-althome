import { Metadata } from 'next';
import BlogClient from '../components/BlogClient';

export const metadata: Metadata = {
  title: 'Journal - AltHome',
  description: 'Insights and stories about modular architecture and sustainable design',
};

export default function Page() {
  return <BlogClient />;
}
