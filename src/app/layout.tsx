import type { Metadata } from 'next';
import '../styles/index.css';

export const metadata: Metadata = {
  title: 'AltHome by skyi',
  description: 'High-tech infrastructure for nature-proximate experiential properties.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, height: '100%' }}>{children}</body>
    </html>
  );
}
