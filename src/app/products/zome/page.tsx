import { Metadata } from 'next';
import { ProductDetail } from '../../components/ProductDetail';

export const metadata: Metadata = {
  title: 'ZOME - AltHome',
  description: 'Designed for those who need more space to enjoy living with a larger group. Geometric sanctuary that blends with nature.',
};

export default function ZomePage() {
  return <ProductDetail productName="ZOME" />;
}
