import { ArrowLeft, CheckCircle2, CircleHelp, MailPlus } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ContactPage = () => (
  <main className="contact-page">
    <section className="contact-content px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="contact-back"><ArrowLeft size={15} /> Back to home</Link>
        <p className="eyebrow mt-12">START A CONVERSATION</p>
        <h1>Let&apos;s talk about what you&apos;re building.</h1>
        <p className="contact-intro">We&apos;re looking forward to hearing about your project. This site does not yet have a configured contact channel or a working submission service.</p>

        <div className="contact-notice" role="status">
          <span className="contact-notice-icon"><CircleHelp size={22} aria-hidden="true" /></span>
          <div>
            <h2>Contact submissions are not set up yet</h2>
            <p>No form is collecting information here. Before requests can be sent, the site needs a verified business email address and a secure form endpoint connected to an email or CRM inbox.</p>
          </div>
        </div>

        <div className="contact-requirements">
          <div><CheckCircle2 size={18} aria-hidden="true" /><span>Configure a real Tan-Stellar contact address</span></div>
          <div><CheckCircle2 size={18} aria-hidden="true" /><span>Connect and test a protected submission backend</span></div>
          <div><CheckCircle2 size={18} aria-hidden="true" /><span>Add consent, validation, and spam protection</span></div>
        </div>

        <div className="contact-next-step">
          <MailPlus size={20} aria-hidden="true" />
          <p>Once those details are available, this page can safely accept consultation and project requests.</p>
        </div>
      </div>
    </section>
    <Footer />
  </main>
);

export default ContactPage;