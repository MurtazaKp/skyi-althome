'use client';

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Header } from "./Header";
import Link from "next/link";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-[#141414]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white text-xs uppercase tracking-[0.3em] mb-6 font-semibold">
            Get In Touch
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl text-[#fafafa] mb-8 leading-[0.95] tracking-[-0.04em] font-bold">
            Let's <span className="italic text-white">talk</span>
          </h1>
          <p className="text-base lg:text-lg text-[#fafafa]/70 max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to start your project? We'd love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#fafafa] mb-12">
                Connect
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "8855 868 806",
                    href: "tel:8855868806",
                  },
                  {
                    icon: Mail,
                    label: "Website",
                    value: "www.althomes.com",
                    href: "https://www.althomes.com",
                  },
                  {
                    icon: MapPin,
                    label: "Address",
                    value:
                      "Skyi Alternate Homes Pvt. Ltd.\nGat No. 274, Skyi Songbirds,\nVillage Bhugaon, Pune- Mulshi,\nMaharashtra – 412115.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-5 p-6 bg-[#141414] rounded-3xl border border-[#fafafa]/10 hover:border-accent/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white mb-2 font-semibold">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg text-[#fafafa] hover:text-white transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg text-[#fafafa] whitespace-pre-line font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-xs uppercase tracking-[0.2em] text-white mb-4 font-semibold">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {["In", "Ig", "Fb"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="w-12 h-12 rounded-full border border-[#fafafa]/10 bg-[#141414] flex items-center justify-center hover:border-accent hover:text-white transition-colors text-[#fafafa]"
                    >
                      <span className="text-sm font-semibold">{s}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#141414] rounded-3xl p-8 lg:p-10 border border-[#fafafa]/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: "name", label: "Name *", type: "text", required: true },
                  {
                    id: "email",
                    label: "Email *",
                    type: "email",
                    required: true,
                  },
                  { id: "phone", label: "Phone", type: "tel", required: false },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-xs uppercase tracking-[0.2em] text-white mb-3 font-semibold"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      required={field.required}
                      value={
                        formData[field.id as keyof typeof formData] as string
                      }
                      onChange={(e) =>
                        setFormData({ ...formData, [field.id]: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-[#1a1a1a] border border-[#fafafa]/10 rounded-2xl text-[#fafafa] placeholder:text-[#fafafa]/60 focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.2em] text-white mb-3 font-semibold"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-[#1a1a1a] border border-[#fafafa]/10 rounded-2xl text-[#fafafa] placeholder:text-[#fafafa]/60 focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-4 text-xs tracking-[0.2em] hover:bg-accent/90 transition-all rounded-full shadow-xl font-semibold"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
