import { Metadata } from 'next';
import { ProductDetail } from '../../components/ProductDetail';

export const metadata: Metadata = {
  title: 'HIVE - AltHome',
  description: 'Designed for those who need more space to enjoy living with a larger group. Modular architecture that adapts to your needs.',
};

export default function HivePage() {
  return <ProductDetail productName="HIVE" />;
}
