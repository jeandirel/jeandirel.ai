import React, { useState } from "react";
import axios from "axios";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { PROFILE } from "../data/profile";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INQUIRY_KEYS = ["freelance", "consulting", "recruiting", "research", "other"];

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiry_type: "freelance",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success(t.contact.success);
      setForm({ name: "", email: "", company: "", subject: "", message: "", inquiry_type: "freelance" });
    } catch (err) {
      toast.error(t.contact.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 lg:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="overline mb-4">{t.contact.eyebrow}</p>
            <h2 className="font-display text-3xl lg:text-5xl text-white tracking-tighter leading-[1.05] mb-6" data-testid="contact-title">
              {t.contact.title}
            </h2>
            <p className="text-[#D1D5DB] text-base lg:text-lg leading-relaxed mb-10">
              {t.contact.subtitle}
            </p>

            <div className="space-y-5">
              <a
                data-testid="contact-email-link"
                href={`mailto:${PROFILE.email}`}
                className="flex items-start gap-3 group"
              >
                <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center group-hover:border-[#00D4FF]/40 transition-all">
                  <Mail size={14} className="text-[#00D4FF]" />
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF] font-mono uppercase tracking-wider mb-1">Email</div>
                  <div className="text-white text-sm group-hover:text-[#00D4FF] transition-colors">
                    {PROFILE.email}
                  </div>
                  <a
                    data-testid="contact-email-personal"
                    href={`mailto:${PROFILE.emailPersonal}`}
                    className="text-xs text-[#9CA3AF] mt-1 hover:text-[#D1D5DB] transition-colors block"
                  >
                    {PROFILE.emailPersonal}
                  </a>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md border border-white/10 flex items-center justify-center">
                  <MapPin size={14} className="text-[#7C3AED]" />
                </div>
                <div>
                  <div className="text-xs text-[#9CA3AF] font-mono uppercase tracking-wider mb-1">Location</div>
                  <div className="text-white text-sm">{t.contact.basedIn}</div>
                  <div className="text-xs text-[#9CA3AF] mt-1">{t.contact.availableFor}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={submit}
            data-testid="contact-form"
            className="lg:col-span-7 surface rounded-md p-6 lg:p-10 space-y-5"
          >
            <div>
              <label className="overline block mb-2">{t.contact.formType}</label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {INQUIRY_KEYS.map((key) => (
                  <button
                    key={key}
                    type="button"
                    data-testid={`contact-inquiry-${key}`}
                    onClick={() => setForm({ ...form, inquiry_type: key })}
                    className={`px-2.5 py-2 rounded-md text-xs font-medium border transition-all ${
                      form.inquiry_type === key
                        ? "border-[#00D4FF] bg-[#00D4FF]/10 text-[#00D4FF]"
                        : "border-white/10 text-[#D1D5DB] hover:border-white/30"
                    }`}
                  >
                    {t.contact.types[key]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="overline block mb-2">{t.contact.formName} *</label>
                <input
                  data-testid="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className="w-full px-4 py-2.5 rounded-md bg-[#0B0F19] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
                />
              </div>
              <div>
                <label className="overline block mb-2">{t.contact.formEmail} *</label>
                <input
                  data-testid="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  className="w-full px-4 py-2.5 rounded-md bg-[#0B0F19] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="overline block mb-2">{t.contact.formCompany}</label>
                <input
                  data-testid="contact-company"
                  type="text"
                  value={form.company}
                  onChange={update("company")}
                  className="w-full px-4 py-2.5 rounded-md bg-[#0B0F19] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
                />
              </div>
              <div>
                <label className="overline block mb-2">{t.contact.formSubject}</label>
                <input
                  data-testid="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={update("subject")}
                  className="w-full px-4 py-2.5 rounded-md bg-[#0B0F19] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00D4FF] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="overline block mb-2">{t.contact.formMessage} *</label>
              <textarea
                data-testid="contact-message"
                required
                rows={6}
                value={form.message}
                onChange={update("message")}
                className="w-full px-4 py-3 rounded-md bg-[#0B0F19] border border-white/10 text-white placeholder:text-[#6B7280] text-sm focus:outline-none focus:border-[#00D4FF] transition-colors resize-none"
              />
            </div>

            <button
              data-testid="contact-submit"
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#00D4FF] hover:bg-[#33DDFF] text-[#0B0F19] font-medium text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              <Send size={14} />
              {submitting ? t.contact.sending : t.contact.submit}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
