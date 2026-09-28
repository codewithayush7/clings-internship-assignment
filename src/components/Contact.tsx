"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle, Sparkles, MessageCircle } from "lucide-react";
import { companyContact } from "@/data/siteData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please provide details about your project or inquiry";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Have a project in mind? */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#EF1B23] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have a project in mind?
            </h2>

            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Whether you are architecting a new product from scratch, rebuilding an existing enterprise platform, or seeking a dedicated engineering squad — we are ready to help.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${companyContact.phoneRaw}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#151518] border border-white/5 hover:border-[#EF1B23]/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#EF1B23]/10 border border-[#EF1B23]/20 flex items-center justify-center text-[#EF1B23] group-hover:bg-[#EF1B23] group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono">Direct Phone Call</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#EF1B23] transition-colors">
                    {companyContact.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${companyContact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#151518] border border-white/5 hover:border-[#EF1B23]/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono">Official Inquiries</div>
                  <div className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {companyContact.email}
                  </div>
                </div>
              </a>

              <a
                href={companyContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#151518] border border-white/5 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-mono">Instant WhatsApp</div>
                  <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Chat with Engineering Director
                  </div>
                </div>
              </a>
            </div>

            {/* Headquarters Location */}
            <div className="mt-8 pt-8 border-t border-white/10 text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-neutral-300 font-semibold mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#EF1B23]" />
                <span>Global Headquarters:</span>
              </div>
              <p className="leading-relaxed">
                130-132, 2nd Floor, Wave Galleria, Wave City, NH-24, Noida, UP - 201015
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form with Validation & Demo Success State */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#151518] border border-white/10 p-8 sm:p-10 shadow-2xl relative">
              {isSuccess ? (
                /* Demo Success State */
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. This is a demonstration state verifying client-side form validation. In production, our technical team responds within 24 hours.
                  </p>
                  <div className="p-4 rounded-xl bg-[#0A0A0B] border border-white/5 text-xs text-neutral-400 max-w-sm mx-auto font-mono text-left space-y-1">
                    <div>Status: 200 OK (Validated)</div>
                    <div>Email: {formData.email}</div>
                    {formData.company && <div>Company: {formData.company}</div>}
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Actual Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Full Name <span className="text-[#EF1B23]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Singh"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#EF1B23] transition-all ${
                          errors.name ? "border-[#EF1B23]" : "border-white/10 hover:border-white/20"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-[#EF1B23] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Work Email <span className="text-[#EF1B23]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ramesh@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#EF1B23] transition-all ${
                          errors.email ? "border-[#EF1B23]" : "border-white/10 hover:border-white/20"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-[#EF1B23] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 8264469132"
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-white/10 hover:border-white/20 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#EF1B23] transition-all"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Company or Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company Pvt Ltd"
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-white/10 hover:border-white/20 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#EF1B23] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Project Details &amp; Requirements <span className="text-[#EF1B23]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project timeline, technical requirements, goals, or existing tech stack..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#EF1B23] transition-all ${
                        errors.message ? "border-[#EF1B23]" : "border-white/10 hover:border-white/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-[#EF1B23] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#EF1B23] to-[#C6151C] hover:from-[#FF2A33] hover:to-[#EF1B23] shadow-lg shadow-red-950/50 hover:shadow-red-900/70 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group focus:outline-none focus:ring-2 focus:ring-[#EF1B23]"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-neutral-500">
                    We respect your privacy. No marketing spam. Direct response from senior architects.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
