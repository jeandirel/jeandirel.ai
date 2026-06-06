import React, { useState } from "react";
import axios from "axios";
import { Calendar, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { PROFILE } from "../data/profile";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Booking = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    purpose: "",
    preferred_date: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/booking`, form);
      toast.success(t.bookForm.success);
      setForm({ name: "", email: "", company: "", purpose: "", preferred_date: "", notes: "" });
    } catch (err) {
      toast.error(t.bookForm.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="booking" data-testid="booking-section" className="py-24 lg:py-32 border-t border-white/10 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <p className="overline mb-4">{t.booking.eyebrow}</p>
            <h2 className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05]" data-testid="booking-title">
              {t.booking.title}
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-[#D1D5DB] text-base lg:text-lg leading-relaxed">
            {t.booking.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Calendly area */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 surface rounded-md p-6 lg:p-8 min-h-[520px] flex flex-col"
            data-testid="calendly-area"
          >
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={14} className="text-[#00D4FF]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00D4FF]">
                Calendly
              </span>
            </div>
            <p className="text-sm text-[#9CA3AF] mb-6">{t.booking.embedNote}</p>

            {/* Calendly inline iframe — replace src with real link */}
            <div className="flex-1 rounded-md border border-white/10 overflow-hidden bg-[#0B0F19] min-h-[400px] flex items-center justify-center">
              <iframe
                src={`${PROFILE.links.calendly}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0B0F19&text_color=ffffff&primary_color=00D4FF`}
                title="Calendly Scheduling"
                width="100%"
                height="640"
                frameBorder="0"
                data-testid="calendly-iframe"
                className="w-full h-[640px]"
              />
            </div>

            <a
              data-testid="calendly-open-link"
              href={PROFILE.links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#D1D5DB] hover:text-white link-underline self-start"
            >
              {t.booking.openCalendly}
              <ArrowUpRight size={12} />
            </a>
          </motion.div>

          {/* Alternative form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 surface rounded-md p-6 lg:p-8"
          >
            <h3 className="font-display text-xl text-white tracking-tight mb-2">
              {t.booking.altTitle}
            </h3>
            <p className="text-sm text-[#9CA3AF] mb-6">{t.booking.altSubtitle}</p>

            <form onSubmit={submit} className="space-y-4" data-testid="booking-form">
              <input
                data-testid="booking-name"
                type="text"
                required
                placeholder={t.bookForm.name}
                value={form.name}
                onChange={update("name")}
                className="w-full px-4 py-2.5 rounded-md bg-[#0B0F19] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
              />
              <input
                data-testid="booking-email"
                type="email"
                required
                placeholder={t.bookForm.email}
                value={form.email}
                onChange={update("email")}
                className="w-full px-4 py-2.5 rounded-md bg-[#0B0F19] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
              />
              <input
                data-testid="booking-company"
                type="text"
                placeholder={t.bookForm.company}
                value={form.company}
                onChange={update("company")}
                className="w-full px-4 py-2.5 rounded-md bg-[#0B0F19] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
              />
              <input
                data-testid="booking-purpose"
                type="text"
                required
                placeholder={t.bookForm.purpose}
                value={form.purpose}
                onChange={update("purpose")}
                className="w-full px-4 py-2.5 rounded-md bg-[#0B0F19] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
              />
              <input
                data-testid="booking-date"
                type="text"
                placeholder={t.bookForm.preferred}
                value={form.preferred_date}
                onChange={update("preferred_date")}
                className="w-full px-4 py-2.5 rounded-md bg-[#0B0F19] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
              />
              <textarea
                data-testid="booking-notes"
                rows={3}
                placeholder={t.bookForm.notes}
                value={form.notes}
                onChange={update("notes")}
                className="w-full px-4 py-2.5 rounded-md bg-[#0B0F19] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00D4FF] transition-colors resize-none"
              />

              <button
                data-testid="booking-submit"
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0B0F19] font-medium text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? t.bookForm.sending : t.bookForm.submit}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
