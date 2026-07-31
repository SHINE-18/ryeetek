import { useState } from "react";
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2 } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sent
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Enquiry submitted:", form);
    setStatus("sent");
  }

  return (
    <div>
      {/* HERO WITH BACKGROUND PHOTO */}
      <section className="relative overflow-hidden bg-navy-950 pt-28 pb-16 lg:pt-40 lg:pb-24">
        {/* Right side background hero photo overlay like Home page */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
          <PhotoPlaceholder motif="silos" image="/images/ryetek_real_engineering_hq_1785489693920.png" className="h-full w-full" label="Ryetek Engineering Workshop" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/40 to-transparent" />
        </div>

        <div className="container-xl relative">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
              Contact Us
            </p>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Ready to discuss a system,
              <br />
              <span className="text-teal-400">upgrade or equipment package?</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70">
              Send your project requirement and Ryetek will help define the practical equipment
              scope, documentation needs, installation pathway and commercial next step.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400" />
                <span>Australian Local Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-400" />
                <span>Direct Technical Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-display text-2xl font-bold uppercase text-navy-950">
              Contact Details
            </h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 shrink-0 text-teal-500" size={19} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">Phone</p>
                  <a href="tel:+61437433890" className="text-sm font-semibold text-navy-900 hover:text-teal-600">
                    +61 437 433 890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 shrink-0 text-teal-500" size={19} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">Email</p>
                  <a href="mailto:sales@ryetek.com.au" className="text-sm font-semibold text-navy-900 hover:text-teal-600">
                    sales@ryetek.com.au
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 shrink-0 text-teal-500" size={19} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">Website</p>
                  <span className="text-sm font-semibold text-navy-900">ryetek.com.au</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-teal-500" size={19} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">Address</p>
                  <span className="text-sm font-semibold text-navy-900">Warner, Brisbane QLD 4500</span>
                </div>
              </li>
            </ul>

            <div className="mt-8 border-l-2 border-teal-500 bg-paper-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy-700">
                Important project note
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-navy-700/70">
                Final dimensions, ratings, certifications, installation responsibilities and
                Australian compliance documentation must be validated project-by-project
                before manufacture, import, installation or operation.
              </p>
            </div>
          </div>

          <div className="border border-line-200 bg-paper-50 p-7 sm:p-9 shadow-sm">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="text-teal-500" size={44} />
                <h3 className="mt-4 text-lg font-semibold text-navy-950">Enquiry sent</h3>
                <p className="mt-2 max-w-sm text-sm text-navy-700/70">
                  Thanks — we'll get back to you shortly. For anything urgent, call
                  +61 437 433 890 directly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-700">
                      Name
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-line-200 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none transition-colors focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-700">
                      Company
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company / Organisation"
                      className="w-full border border-line-200 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none transition-colors focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-700">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com.au"
                    className="w-full border border-line-200 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none transition-colors focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-navy-700">
                    Project Requirement / Enquiry
                  </label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your equipment requirement, plant upgrade, wear parts need, or engineering scope..."
                    className="w-full border border-line-200 bg-white px-3.5 py-2.5 text-sm text-navy-950 outline-none transition-colors focus:border-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 bg-teal-500 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-teal-400 hover:shadow-md"
                >
                  Send Enquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
