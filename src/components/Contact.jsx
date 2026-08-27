import Eyebrow from "./ui/Eyebrow.jsx";
import Rule from "./ui/Rule.jsx";
import Field from "./ui/Field.jsx";
import ContactRow from "./ui/ContactRow.jsx";
import { SERVICES, CONTACT } from "../data/content.js";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your backend, form service, or email API.
  }

  return (
    <section id="contact" className="px-5 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        <div>
          <Eyebrow>Get In Touch</Eyebrow>
          <Rule />
          <h2 className="font-headline font-semibold text-3xl md:text-4xl mb-6 text-ink">
            Let's build the future together
          </h2>
          <p className="mb-8 max-w-md leading-relaxed text-slate">
            Ready to elevate your digital presence? Tell us what you're
            working on and we'll follow up within one business day.
          </p>
          <div className="space-y-5">
            <ContactRow icon="@" label="Email Us" value={CONTACT.email} />
            <ContactRow icon="◎" label="Location" value={CONTACT.location} />
            <ContactRow
              icon="in"
              label="Connect with the Founder"
              value="LinkedIn Profile"
              href={CONTACT.linkedin}
            />
          </div>
        </div>

        <form
          className="rounded-lg p-8 space-y-5 bg-paper border border-line"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="First Name" placeholder="John" name="firstName" />
            <Field label="Last Name" placeholder="Doe" name="lastName" />
          </div>
          <Field label="Email Address" placeholder="john@company.com" type="email" name="email" />
          <div>
            <label className="block text-xs font-medium mb-2 text-ink">Interested Service</label>
            <select
              name="service"
              className="w-full rounded-sm px-4 py-3 text-sm bg-transparent border border-line text-ink focus:border-bronze transition-colors"
            >
              {SERVICES.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium mb-2 text-ink">Message</label>
            <textarea
              rows={4}
              name="message"
              placeholder="Tell us about your project..."
              className="w-full rounded-sm px-4 py-3 text-sm resize-none bg-transparent border border-line text-ink focus:border-bronze transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-sm text-sm font-medium tracking-wide bg-ink text-bronze hover:bg-ink-deep transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
