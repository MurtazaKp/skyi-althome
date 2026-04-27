'use client';

import { useState } from "react";
import { X, ArrowRight, ArrowLeft } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    newsletter: false,
    buildingType: [] as string[],
    additionalInfo: "",
  });

  if (!isOpen) return null;

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      buildingType: prev.buildingType.includes(value)
        ? prev.buildingType.filter((item) => item !== value)
        : [...prev.buildingType, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  const canProceed =
    step === 1
      ? formData.name && formData.address && formData.email
      : formData.buildingType.length > 0;

  const inputCls =
    "w-full px-0 py-3 border-b border-white text-sm text-white placeholder:text-white focus:outline-none focus:border-accent transition-colors bg-transparent font-medium";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-3xl shadow-2xl border border-white">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-secondary transition-colors z-10"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="p-8 sm:p-10 lg:p-14">
          {step === 1 && (
            <div>
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-white mb-4 font-bold">
                  Step 01 / 02
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-tight font-bold tracking-tight">
                  Let's build your{" "}
                  <span className="italic text-white">vision</span> together
                </h2>
                <p className="text-sm text-white leading-relaxed font-medium">
                  Enter your information below and we'll get in touch to discuss
                  your project.
                </p>
              </div>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="What's your name? *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputCls}
                  required
                />
                <input
                  type="text"
                  placeholder="What's your address? *"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className={inputCls}
                  required
                />
                <input
                  type="email"
                  placeholder="What's your email? *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputCls}
                  required
                />
                <input
                  type="tel"
                  placeholder="What's your phone number? (opt.)"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={inputCls}
                />

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={(e) =>
                      setFormData({ ...formData, newsletter: e.target.checked })
                    }
                    className="w-4 h-4 accent-accent"
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm text-white cursor-pointer font-medium"
                  >
                    Sign up to our newsletter
                  </label>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-white mb-4 font-bold">
                  Step 02 / 02
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-tight font-bold tracking-tight">
                  What are you looking to{" "}
                  <span className="italic text-white">build?</span>
                </h2>
                <p className="text-sm text-white leading-relaxed font-medium">
                  Select all that apply to help us understand your needs.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  { value: "HIVE", label: "HIVE — Modular Living Space" },
                  { value: "ZOME", label: "ZOME — Geodesic Structure" },
                  {
                    value: "Other",
                    label: "Custom Project (please elaborate below)",
                  },
                ].map((opt) => {
                  const selected = formData.buildingType.includes(opt.value);
                  return (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-4 p-5 rounded-2xl border cursor-pointer transition-colors ${selected ? "border-accent bg-accent/10" : "border-white bg-secondary hover:border-accent/40"}`}
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => handleCheckboxChange(opt.value)}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-sm text-white font-bold">{opt.label}</span>
                    </label>
                  );
                })}
              </div>

              <div>
                <label
                  htmlFor="additionalInfo"
                  className="block text-sm text-white mb-3 font-bold"
                >
                  Anything else you would like to add? (opt.)
                </label>
                <textarea
                  id="additionalInfo"
                  rows={5}
                  placeholder="Tell us more about your project..."
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalInfo: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-secondary border border-white rounded-2xl text-sm text-white placeholder:text-white focus:outline-none focus:border-accent transition-colors resize-none font-medium"
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="p-3 rounded-full hover:bg-secondary transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
            ) : (
              <div />
            )}

            {step < 2 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                  canProceed
                    ? "bg-accent hover:bg-accent/90 text-white shadow-xl"
                    : "bg-secondary text-white cursor-not-allowed"
                }`}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed}
                className={`px-10 py-4 rounded-full text-xs tracking-[0.2em] transition-all font-bold ${
                  canProceed
                    ? "bg-accent hover:bg-accent/90 text-white shadow-xl"
                    : "bg-secondary text-white cursor-not-allowed"
                }`}
              >
                SUBMIT REQUEST
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
