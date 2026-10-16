export const contactServices = [
  "Magento / Adobe Commerce",
  "E-commerce Development",
  "Website / Web Application Development",
  "Mobile App Development",
  "Custom Software Development",
  "API Integration",
  "Technical Support / Maintenance",
  "Other",
];

export const contactBudgets = [
  "Under ₹1 lakh",
  "₹1 lakh – ₹5 lakhs",
  "₹5 lakhs – ₹10 lakhs",
  "₹10 lakhs – ₹25 lakhs",
  "Over ₹25 lakhs",
  "Not decided yet",
];

export const contactHref = ({ intent, service } = {}) => {
  const params = new URLSearchParams();

  if (intent === "project") params.set("intent", intent);
  if (contactServices.includes(service)) params.set("service", service);

  const query = params.toString();
  return query ? `/contact?${query}` : "/contact";
};
