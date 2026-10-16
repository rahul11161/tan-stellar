import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, CircleHelp, MailPlus } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import { contactBudgets, contactServices } from "../data/contactOptions";

const initialValues = {
  fullName: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  details: "",
};

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service");
  const [values, setValues] = useState(() => ({
    ...initialValues,
    service: contactServices.includes(initialService) ? initialService : "",
  }));
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const nameInputRef = useRef(null);
  const formSectionRef = useRef(null);
  const projectIntent = searchParams.get("intent") === "project";
  const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;

    document.title = "Contact Tan-Stellar | Discuss Your Project";
    if (description) {
      description.content = "Contact Tan-Stellar about e-commerce, web and mobile development, custom software, API integrations, or technical support.";
    }

    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, []);

  useEffect(() => {
    if (projectIntent) {
      formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      nameInputRef.current?.focus({ preventScroll: true });
    }
  }, [projectIntent]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitMessage(null);
  };

  const submitEnquiry = async (event) => {
    event.preventDefault();
    if (submitting) return;
    const nextErrors = {};

    if (!values.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address, for example name@company.com.";
    }
    if (!values.service) nextErrors.service = "Please select a service.";
    if (!values.details.trim()) nextErrors.details = "Please tell us a little about your project.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${firstInvalidField}`)?.focus();
      return;
    }

    if (!contactEndpoint) {
      setSubmitMessage({
        type: "error",
        text: "Your enquiry has not been sent. This site is not yet connected to an enquiry service; please try again later.",
      });
      return;
    }

    setSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          service: values.service,
          budget: values.budget,
          details: values.details.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`The enquiry service returned status ${response.status}.`);
      }

      setSubmitMessage({
        type: "success",
        text: "Thank you. Your project enquiry has been sent successfully.",
      });
      setValues(initialValues);
    } catch {
      setSubmitMessage({
        type: "error",
        text: "We couldn’t send your enquiry. Your details are still here; please try again shortly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-content px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="contact-hero">
            <p className="eyebrow"><span className="eyebrow-dot" /> CONTACT US</p>
            <h1>Let&apos;s Talk About Your Next Project</h1>
            <p className="contact-intro">
              Have a project in mind, need help improving an existing platform, or looking for a reliable development partner? Tell us about your requirements. We&apos;ll review your enquiry and discuss the next steps.
            </p>
          </div>

          <div className="contact-layout">
            <aside className="contact-sidebar">
              <section className="contact-info-card" aria-labelledby="contact-info-heading">
                <span className="contact-info-icon"><MailPlus size={21} aria-hidden="true" /></span>
                <h2 id="contact-info-heading">Get in Touch</h2>
                <p>We welcome enquiries about new projects, existing website improvements, e-commerce development, integrations, and ongoing technical support.</p>
              </section>
              <div className="contact-guidance" role="note">
                <CircleHelp size={20} aria-hidden="true" />
                <p>Not sure which service you need? Describe your business challenge, and we&apos;ll help you identify a suitable starting point.</p>
              </div>
            </aside>

            <section
              ref={formSectionRef}
              id="project-enquiry"
              className="contact-form-card"
              aria-labelledby="contact-form-heading"
            >
              <div className="contact-form-heading">
                <p className="eyebrow">PROJECT ENQUIRY</p>
                <h2 id="contact-form-heading">Tell Us About Your Project</h2>
                <p>Share a few details about your requirements so we can better understand your goals and the support you need.</p>
              </div>
              {!contactEndpoint && (
                <p className="contact-form-config-note" role="note">
                  Enquiry submissions are not connected yet. This form will not send or store your details until a secure form endpoint is configured.
                </p>
              )}

              <form className="contact-form" onSubmit={submitEnquiry} noValidate>
                <div className="contact-form-grid">
                  <div className="contact-field">
                    <label htmlFor="contact-fullName">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      ref={nameInputRef}
                      id="contact-fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={values.fullName}
                      onChange={updateField}
                      required
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? "contact-fullName-error" : undefined}
                    />
                    {errors.fullName && <span id="contact-fullName-error" className="contact-field-error">{errors.fullName}</span>}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">Business Email <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      value={values.email}
                      onChange={updateField}
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                    />
                    {errors.email && <span id="contact-email-error" className="contact-field-error">{errors.email}</span>}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-company">Company Name <span className="contact-optional">(optional)</span></label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company"
                      value={values.company}
                      onChange={updateField}
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-service">Service Required <span aria-hidden="true">*</span></label>
                    <select
                      id="contact-service"
                      name="service"
                      value={values.service}
                      onChange={updateField}
                      required
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? "contact-service-error" : undefined}
                    >
                      <option value="">Select a service</option>
                      {contactServices.map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                    {errors.service && <span id="contact-service-error" className="contact-field-error">{errors.service}</span>}
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-budget">Estimated Budget <span className="contact-optional">(optional)</span></label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={values.budget}
                      onChange={updateField}
                    >
                      <option value="">Choose a budget range</option>
                      {contactBudgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
                    </select>
                  </div>

                  <div className="contact-field contact-field-full">
                    <label htmlFor="contact-details">Project Details <span aria-hidden="true">*</span></label>
                    <textarea
                      id="contact-details"
                      name="details"
                      rows="6"
                      placeholder="Tell us about your goals, requirements, existing platform, or the challenges you’re looking to solve."
                      value={values.details}
                      onChange={updateField}
                      required
                      aria-invalid={Boolean(errors.details)}
                      aria-describedby={errors.details ? "contact-details-error" : undefined}
                    />
                    {errors.details && <span id="contact-details-error" className="contact-field-error">{errors.details}</span>}
                  </div>
                </div>

                {submitMessage && (
                  <p className={`contact-submit-message ${submitMessage.type}`} role={submitMessage.type === "error" ? "alert" : "status"}>
                    {submitMessage.type === "success" && <CheckCircle2 size={18} aria-hidden="true" />}
                    {submitMessage.text}
                  </p>
                )}

                <button className="button-primary contact-submit" type="submit" disabled={submitting}>
                  {submitting ? "Sending Enquiry…" : "Send Project Enquiry"}
                  {!submitting && <ArrowUpRight size={17} aria-hidden="true" />}
                </button>
                <p className="contact-form-required-note"><span aria-hidden="true">*</span> Required fields</p>
              </form>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactPage;
