'use client';

import { useState } from 'react';
import { X, Check } from 'lucide-react';

interface SizeSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: 'HIVE' | 'ZOME';
  sizes: {
    small: { sqft: number; price: string; dimensions: string };
    large: { sqft: number; price: string; dimensions: string };
  };
  onSelect: (size: 'small' | 'large') => void;
}

export function SizeSelectorModal({ isOpen, onClose, productName, sizes, onSelect }: SizeSelectorModalProps) {
  const [selectedSize, setSelectedSize] = useState<'small' | 'large'>('small');

  if (!isOpen) return null;

  const handleConfirm = () => {
    onSelect(selectedSize);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:opacity-70 transition-opacity z-10"
        >
          <X className="w-5 h-5 text-gray-900" />
        </button>

        <div className="p-8 sm:p-12 lg:p-16">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-4">{productName}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 leading-[1.1] tracking-[-0.02em] font-extralight">
              Choose Your Size
            </h2>
            <p className="text-sm text-gray-600">
              Select the configuration that best fits your needs
            </p>
          </div>

          {/* Size Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <button
              onClick={() => setSelectedSize('small')}
              className={`p-8 lg:p-10 border transition-all duration-300 text-left ${
                selectedSize === 'small'
                  ? 'border-gray-900 bg-white'
                  : 'border-black/10 bg-white hover:border-black/20'
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Standard</p>
                  <p className="text-5xl lg:text-6xl font-extralight text-gray-900 tracking-tight">{sizes.small.sqft}</p>
                  <p className="text-xs text-gray-500 mt-2">Sq.Ft</p>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  selectedSize === 'small' ? 'border-gray-900 bg-gray-900' : 'border-gray-300'
                }`}>
                  {selectedSize === 'small' && <Check className="w-3 h-3 text-white" />}
                </div>
              </div>

              {/* Dimension Visual */}
              <div className="aspect-video bg-gray-50 mb-6 flex items-center justify-center relative">
                <div className="w-3/4 h-3/4 border-2 border-gray-900 relative">
                  <div className="absolute -top-6 left-0 right-0 text-center text-xs text-gray-600">
                    {sizes.small.dimensions}
                  </div>
                </div>
              </div>

              <p className="text-xl lg:text-2xl font-extralight text-gray-900 mb-2">{sizes.small.price}</p>
            </button>

            <button
              onClick={() => setSelectedSize('large')}
              className={`p-8 lg:p-10 border transition-all duration-300 text-left ${
                selectedSize === 'large'
                  ? 'border-gray-900 bg-white'
                  : 'border-black/10 bg-white hover:border-black/20'
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Expanded</p>
                  <p className="text-5xl lg:text-6xl font-extralight text-gray-900 tracking-tight">{sizes.large.sqft}</p>
                  <p className="text-xs text-gray-500 mt-2">Sq.Ft</p>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  selectedSize === 'large' ? 'border-gray-900 bg-gray-900' : 'border-gray-300'
                }`}>
                  {selectedSize === 'large' && <Check className="w-3 h-3 text-white" />}
                </div>
              </div>

              {/* Dimension Visual */}
              <div className="aspect-video bg-gray-50 mb-6 flex items-center justify-center relative">
                <div className="w-full h-3/4 border-2 border-gray-900 relative">
                  <div className="absolute -top-6 left-0 right-0 text-center text-xs text-gray-600">
                    {sizes.large.dimensions}
                  </div>
                </div>
              </div>

              <p className="text-xl lg:text-2xl font-extralight text-gray-900 mb-2">{sizes.large.price}</p>
            </button>
          </div>

          {/* Confirm Button */}
          <div className="text-center">
            <button
              onClick={handleConfirm}
              className="bg-gray-900 text-white px-12 py-4 text-xs tracking-widest hover:bg-gray-800 transition-all duration-300"
            >
              CONFIRM SELECTION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
