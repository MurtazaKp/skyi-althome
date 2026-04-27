import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface DimensionCard {
  sqft: number;
  enclosed: boolean;
  price: string;
  dimensions: string;
}

interface DimensionsCarouselProps {
  dimensions: DimensionCard[];
  onSelect: (dimension: DimensionCard) => void;
}

export function DimensionsCarousel({ dimensions, onSelect: onSelectDimension }: DimensionsCarouselProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {dimensions.map((dim, idx) => (
        <motion.button
          key={idx}
          onClick={() => onSelectDimension(dim)}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-[240px] bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 text-left relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-5xl font-bold mb-1 leading-none tracking-tight">{dim.sqft}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 font-bold">Sq.Ft</p>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-white/40 flex items-center justify-center flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </div>
          <div>
            <p className="text-base text-gray-300 mb-3 leading-tight font-medium">{dim.dimensions}</p>
            <div className="text-sm text-white/60 group-hover:text-white transition-colors flex items-center gap-1 font-bold">
              <span>View plans</span>
              <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none"></div>
        </motion.button>
      ))}
    </div>
  );
}
