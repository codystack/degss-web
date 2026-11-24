// Defaults generated from the original hand-written Privacy and Terms pages.
import { definePage } from "../schema";

const PARAGRAPH_HINT = "Leave a blank line between paragraphs. **Label:** makes a bold label.";
const LIST_HINT = "One bullet per line. **Label:** makes a bold label.";

export const privacyPage = definePage({
  key: "privacy",
  label: "Privacy policy",
  group: "pages",
  description: "Title, last-updated date, introduction and every numbered section.",
  viewPath: "/privacy",
  revalidate: [{ path: "/privacy" }],
  sections: [
    {
      title: "Header",
      fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "lastUpdated", label: "Last updated", type: "text" },
        { key: "intro", label: "Introduction", type: "textarea", rows: 3 },
      ],
    },
    {
      title: "Sections",
      fields: [
        {
          key: "sections",
          label: "Sections",
          type: "list",
          itemLabel: "Section",
          maxItems: 40,
          fields: [
            { key: "heading", label: "Heading", type: "text" },
            { key: "body", label: "Paragraphs", type: "textarea", rows: 5, optional: true, hint: PARAGRAPH_HINT },
            { key: "list", label: "Bullet points", type: "textarea", rows: 4, optional: true, hint: LIST_HINT },
          ],
        },
      ],
    },
  ],
  defaults: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: September 12, 2026",
    intro: "This Privacy Policy describes how DEGSS collects, uses, and protects your personal information when you use our website and services.",
    sections: [
      {
        "heading": "1. Our Commitment to Privacy",
        "body": "DEGSS Limited respects your privacy and is committed to protecting personal information entrusted to us.\n\nThis Privacy Policy explains how DEGSS collects, uses, stores, protects and may disclose personal information when you interact with our website, services, employees, agents or digital platforms.\n\nThis Policy is intended to operate consistently with applicable Nigerian data-protection requirements, including the Nigeria Data Protection Act 2023.",
        "list": ""
      },
      {
        "heading": "2. Information We Collect",
        "body": "Depending on your interaction with DEGSS, we may collect:",
        "list": "Identity information: full name, date of birth where necessary, and identification information where legally or commercially required.\nContact information: telephone number, email address, and residential or correspondence address.\nTransaction information: property or service purchased, payment information, transaction history, invoice and receipt information, and account information.\nCommunication information: enquiries, messages, customer-service communications, feedback and complaints.\nTechnical information: IP address, browser type, device information, operating system, website usage information, cookies and similar technologies."
      },
      {
        "heading": "3. How We Collect Information",
        "body": "We may collect personal information when you visit our website, complete an online form, contact us by email or telephone, request information, purchase a product or service, register for an account, submit an enquiry, participate in promotions, communicate with our representatives, interact with our digital platforms, or otherwise voluntarily provide information to us.\n\nWe may also receive information from authorised third parties where permitted by law.",
        "list": ""
      },
      {
        "heading": "4. How We Use Personal Information",
        "body": "We may use personal information to:",
        "list": "Provide requested products and services.\nProcess transactions and verify customer identity.\nCommunicate with customers and respond to enquiries.\nProvide customer support and process payments.\nMaintain records and improve our products and website.\nPrevent fraud and abuse and maintain cybersecurity.\nMeet legal and regulatory obligations.\nSend service-related communications and marketing communications where legally permitted.\nConduct analytics and business administration.\nProtect our legal rights and interests."
      },
      {
        "heading": "5. Lawful Basis for Processing",
        "body": "Depending on the circumstances, DEGSS may process personal data on the basis of your consent; performance of a contract; taking steps at your request before entering into a contract; compliance with a legal or regulatory obligation; protection of legitimate interests where applicable; or other lawful grounds recognised by applicable Nigerian data-protection law.",
        "list": ""
      },
      {
        "heading": "6. Marketing Communications",
        "body": "Where permitted by law, DEGSS may send information about products, services, promotions and investment opportunities.\n\nYou may unsubscribe from marketing communications at any time. However, opting out of marketing communications will not necessarily stop essential transactional, security or service communications.",
        "list": ""
      },
      {
        "heading": "7. Cookies",
        "body": "Our website may use cookies and similar technologies to keep the website functioning, remember user preferences, understand website traffic, improve website performance, analyse usage patterns and support relevant marketing activities where applicable.\n\nYou may configure your browser to reject or delete cookies. Disabling certain cookies may affect website functionality.",
        "list": ""
      },
      {
        "heading": "8. Sharing Personal Information",
        "body": "DEGSS does not sell personal information simply for the purpose of selling personal information.\n\nWe may disclose information where reasonably necessary to:",
        "list": "Employees and authorised representatives.\nProfessional advisers.\nPayment processors.\nBanks and financial institutions.\nTechnology and hosting providers.\nMarketing and communication providers.\nBusiness partners.\nGovernment agencies and regulators.\nLaw-enforcement authorities where legally required.\nOther service providers necessary to deliver requested services."
      },
      {
        "heading": "9. International Data Transfers",
        "body": "Some service providers used by DEGSS may process information outside Nigeria.\n\nWhere personal data is transferred or processed outside Nigeria, DEGSS will seek to ensure that appropriate safeguards and lawful transfer mechanisms are applied as required by applicable data-protection law.",
        "list": ""
      },
      {
        "heading": "10. Data Security",
        "body": "DEGSS takes reasonable technical and organisational measures to protect personal information against unauthorised access, accidental loss, destruction, misuse, alteration, unauthorised disclosure and other unlawful processing.\n\nHowever, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
        "list": ""
      },
      {
        "heading": "11. Data Retention",
        "body": "We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, including providing services, maintaining business and transaction records, meeting legal requirements, resolving disputes, enforcing agreements and protecting legitimate business interests.\n\nWhen information is no longer required, we will take reasonable steps to securely delete, anonymise or otherwise dispose of it where appropriate.",
        "list": ""
      },
      {
        "heading": "12. Your Data Protection Rights",
        "body": "Subject to applicable law and relevant conditions, you may have rights including the right to:",
        "list": "Request access to your personal data.\nRequest correction of inaccurate information.\nRequest deletion of personal data in appropriate circumstances.\nObject to certain processing.\nRequest restriction of certain processing.\nWithdraw consent where processing is based on consent.\nRequest portability of personal data where applicable.\nLodge a complaint regarding the processing of your personal data."
      },
      {
        "heading": "13. How to Exercise Your Rights",
        "body": "To exercise a privacy right or make a data-protection request, contact DEGSS Limited at info@degsslimited.com or 08038666532.\n\nWe may need to verify your identity before processing certain requests.",
        "list": ""
      },
      {
        "heading": "14. Data Breaches",
        "body": "Where a personal-data breach occurs, DEGSS will assess the incident and take appropriate measures in accordance with applicable Nigerian data-protection requirements, including notification to relevant authorities or affected individuals where legally required.",
        "list": ""
      },
      {
        "heading": "15. Children's Privacy",
        "body": "Our website and services are not intentionally directed toward children where parental consent or other legal requirements would be necessary.\n\nWe do not knowingly collect children's personal information unlawfully. If you believe a child has provided personal information to us improperly, please contact us.",
        "list": ""
      },
      {
        "heading": "16. Third-Party Websites",
        "body": "Our website may contain links to third-party websites. DEGSS is not responsible for the privacy practices, content or security of external websites. You should review the privacy policies of third-party websites before providing personal information.",
        "list": ""
      },
      {
        "heading": "17. Data Protection Compliance",
        "body": "DEGSS will endeavour to maintain appropriate data-protection governance, policies, security controls and procedures proportionate to the nature and volume of personal data it processes.\n\nThe Nigeria Data Protection Commission (NDPC) is Nigeria's data-protection authority established under the Nigeria Data Protection Act 2023.",
        "list": ""
      },
      {
        "heading": "18. Changes to This Privacy Policy",
        "body": "We may update this Privacy Policy periodically to reflect changes in our business, technology, applicable law, regulatory requirements or privacy practices.\n\nThe updated version will be published on our website with a revised effective date.",
        "list": ""
      },
      {
        "heading": "19. Contact Information",
        "body": "For privacy enquiries, complaints or data-protection requests:\n\nDEGSS Limited\n\n4, Adedayo Ogidan Close, Fidiso Estate (By Green Park Estate), Abijo, Ibeju-Lekki, Lagos, Nigeria.\n\n**Email:** info@degsslimited.com\n\n**Phone:** 08038666532\n\n**Website:** www.degsslimited.com",
        "list": ""
      }
    ],
  },
});

export const termsPage = definePage({
  key: "terms",
  label: "Terms & conditions",
  group: "pages",
  description: "Title, last-updated date, introduction and every numbered section.",
  viewPath: "/terms",
  revalidate: [{ path: "/terms" }],
  sections: [
    {
      title: "Header",
      fields: [
        { key: "title", label: "Title", type: "text" },
        { key: "lastUpdated", label: "Last updated", type: "text" },
        { key: "intro", label: "Introduction", type: "textarea", rows: 3 },
      ],
    },
    {
      title: "Sections",
      fields: [
        {
          key: "sections",
          label: "Sections",
          type: "list",
          itemLabel: "Section",
          maxItems: 40,
          fields: [
            { key: "heading", label: "Heading", type: "text" },
            { key: "body", label: "Paragraphs", type: "textarea", rows: 5, optional: true, hint: PARAGRAPH_HINT },
            { key: "list", label: "Bullet points", type: "textarea", rows: 4, optional: true, hint: LIST_HINT },
          ],
        },
      ],
    },
  ],
  defaults: {
    title: "Terms & Conditions",
    lastUpdated: "Last updated: September 12, 2026",
    intro: "Please read these Terms & Conditions carefully before using the DEGSS website. They set out the rules and guidelines for how you may use our website and services.",
    sections: [
      {
        "heading": "1. Introduction",
        "body": "Welcome to DEGSS Limited (\"DEGSS\", \"we\", \"us\", or \"our\"). These Terms & Conditions (\"Terms\") govern your access to and use of the DEGSS website, degsslimited.com, and any services, products, platforms, applications, communications or transactions provided by DEGSS Limited.\n\nBy accessing our website or using our services, you acknowledge that you have read, understood and agreed to be legally bound by these Terms. If you do not agree with these Terms, please discontinue use of our website and services.",
        "list": ""
      },
      {
        "heading": "2. About DEGSS Limited",
        "body": "DEGSS Limited is a Nigerian company registered with the Corporate Affairs Commission (CAC) under registration number 8799328.",
        "list": "**Registered Office:** 4, Adedayo Ogidan Close, Fidiso Estate (By Green Park Estate), Abijo, Ibeju-Lekki, Lagos, Nigeria.\n**Email:** info@degsslimited.com\n**Telephone:** 08038666532\n**Website:** degsslimited.com"
      },
      {
        "heading": "3. Eligibility",
        "body": "By using our website or services, you represent that:",
        "list": "You are legally capable of entering into a binding agreement.\nThe information you provide to DEGSS is accurate and complete.\nYou will comply with all applicable laws and regulations.\nYou will not use our services for unlawful, fraudulent or unauthorised purposes."
      },
      {
        "heading": "4. Website Use",
        "body": "You agree to use our website responsibly and only for lawful purposes.",
        "list": "Attempt to gain unauthorised access to our systems.\nIntroduce malware, viruses or other malicious code.\nInterfere with the operation or security of the website.\nCopy, reproduce or exploit our content without permission.\nUse our website for fraudulent or deceptive activities.\nImpersonate DEGSS, its employees, agents or representatives.\nUse automated systems to scrape, harvest or extract information without written permission.\nSubmit false, misleading or fraudulent information."
      },
      {
        "heading": "5. Products and Services",
        "body": "DEGSS may provide or facilitate access to various products and services, which may include real estate opportunities, property-related services, investment opportunities, consultancy, marketing, technology-enabled services, referral programmes and other services introduced from time to time.\n\nSpecific products or services may have additional terms, prices, payment schedules, eligibility requirements, documentation and contractual conditions. Where additional terms apply, those terms shall form part of the agreement between you and DEGSS.",
        "list": ""
      },
      {
        "heading": "6. Property and Real Estate Transactions",
        "body": "Where DEGSS facilitates or markets real estate transactions:",
        "list": "Property descriptions, prices, sizes, locations, titles, development status and availability are subject to verification.\nInformation may change without prior notice.\nProspective purchasers should independently verify property documentation before completing a transaction.\nA property advertisement does not, by itself, constitute a transfer of legal title.\nNo property shall be considered sold until the applicable contractual requirements and payment obligations have been satisfied.\nGovernment approvals, title documentation, surveys, planning requirements and other property matters may be subject to the relevant authorities.\nDEGSS shall not be responsible for representations made by unauthorised third parties."
      },
      {
        "heading": "7. Investment Disclaimer",
        "body": "Where DEGSS advertises or facilitates an investment opportunity, the information provided is for general informational and commercial purposes unless expressly stated otherwise.\n\nPast performance, projected returns, estimated appreciation or projected profits are not guarantees of future results.\n\nInvestment involves risk, including the possible loss of capital. You should conduct your own due diligence and obtain independent professional, financial, legal or tax advice where appropriate before committing funds.\n\nNothing on our website should automatically be interpreted as a guarantee that an investor will receive a particular return.\n\nWhere an investment product is regulated or requires regulatory approval, DEGSS will operate subject to applicable Nigerian laws and regulatory requirements.",
        "list": ""
      },
      {
        "heading": "8. Prices and Payments",
        "body": "Prices displayed on our website may change without prior notice. A price displayed online does not necessarily constitute a binding offer unless expressly stated otherwise.\n\nPayments must be made through authorised DEGSS payment channels.\n\nDEGSS will not be responsible for payments made to unauthorised individuals, personal bank accounts, fraudulent websites or third parties claiming to represent DEGSS. Customers should independently verify payment instructions with DEGSS before making substantial payments.",
        "list": ""
      },
      {
        "heading": "9. Refunds and Cancellations",
        "body": "Refunds, cancellations, transfers and payment reversals shall be governed by the terms applicable to the particular product or transaction.\n\nWhere a transaction has a specific agreement, the refund and cancellation provisions contained in that agreement shall prevail over general website information.\n\nWhere a refund is approved, applicable administrative, transaction, third-party or statutory deductions may apply where legally permissible and disclosed.",
        "list": ""
      },
      {
        "heading": "10. Third-Party Services",
        "body": "Our website may contain links, integrations or references to third-party websites, payment processors, financial institutions, technology providers, social-media platforms or other service providers.\n\nDEGSS does not control all third-party services and is not responsible for their availability, security, privacy practices, content, terms and conditions, or performance. Your use of third-party services is subject to the relevant third party's terms.",
        "list": ""
      },
      {
        "heading": "11. Intellectual Property",
        "body": "Unless otherwise stated, all content appearing on the DEGSS website belongs to or is licensed to DEGSS Limited. This includes logos, trademarks, text, graphics, photographs, videos, designs, software, website layouts, marketing materials and other intellectual property.\n\nYou may not reproduce, modify, distribute, sell, publish or commercially exploit our intellectual property without prior written permission.",
        "list": ""
      },
      {
        "heading": "12. User-Submitted Content",
        "body": "Where you submit information, reviews, testimonials, photographs, comments or other content to DEGSS, you confirm that you have the right to provide the content and that it does not violate another person's rights or applicable law.\n\nYou grant DEGSS permission to use such content for legitimate business, marketing and promotional purposes where legally permitted and where appropriate consent has been obtained.",
        "list": ""
      },
      {
        "heading": "13. Accuracy of Information",
        "body": "We endeavour to ensure that information published on our website is accurate and current. However, errors, omissions, typographical errors, pricing changes, availability changes and technical inaccuracies may occasionally occur.\n\nDEGSS reserves the right to correct errors and update information without prior notice.",
        "list": ""
      },
      {
        "heading": "14. Availability of Website",
        "body": "We do not guarantee that the website will always be available, uninterrupted, secure or error-free. The website may occasionally be unavailable due to maintenance, technical failures, internet or telecommunications failures, cybersecurity incidents, third-party service failures, force majeure events or other circumstances beyond our reasonable control.",
        "list": ""
      },
      {
        "heading": "15. Limitation of Liability",
        "body": "To the extent permitted by Nigerian law, DEGSS shall not be liable for indirect, incidental, consequential or unforeseeable losses arising from your use of the website or services.\n\nNothing in these Terms excludes liability that cannot lawfully be excluded under applicable Nigerian law.",
        "list": ""
      },
      {
        "heading": "16. Indemnity",
        "body": "You agree to indemnify and hold harmless DEGSS Limited, its directors, employees, agents and authorised representatives from claims, losses, liabilities, damages and reasonable expenses arising from your breach of these Terms, unlawful use of our services, fraudulent or misleading information supplied by you, violation of another person's rights, or violation of applicable law.",
        "list": ""
      },
      {
        "heading": "17. Privacy",
        "body": "Your use of our website is also governed by the DEGSS Limited Privacy Policy, which forms part of these Terms. Our Privacy Policy explains how we collect, use, store, disclose and protect personal information.",
        "list": ""
      },
      {
        "heading": "18. Electronic Communications",
        "body": "By communicating electronically with DEGSS, you consent to receiving communications electronically where legally permitted. These communications may include emails, SMS, WhatsApp messages, transaction notifications, service updates, marketing communications and other electronic notices.\n\nYou may opt out of marketing communications where applicable.",
        "list": ""
      },
      {
        "heading": "19. Force Majeure",
        "body": "DEGSS shall not be liable for failure or delay caused by circumstances reasonably beyond its control, including natural disasters, government actions, civil unrest, telecommunications failures, cyber incidents, epidemics, strikes, power failures or other force majeure events.",
        "list": ""
      },
      {
        "heading": "20. Termination",
        "body": "DEGSS may suspend or terminate access to its website or services where you breach these Terms, your activities create security or legal risks, fraud is suspected, required information is inaccurate or misleading, or termination is otherwise permitted by law or applicable contract.\n\nTermination does not affect rights or obligations that accrued before termination.",
        "list": ""
      },
      {
        "heading": "21. Governing Law",
        "body": "These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria.\n\nSubject to applicable law, disputes shall be resolved through appropriate negotiation, mediation, arbitration or the competent courts of Nigeria, as applicable.",
        "list": ""
      },
      {
        "heading": "22. Changes to These Terms",
        "body": "DEGSS may update these Terms from time to time. Updated Terms will be published on the website with a revised effective date. Your continued use of the website after an update constitutes acceptance of the revised Terms to the extent permitted by law.",
        "list": ""
      },
      {
        "heading": "23. Contact Us",
        "body": "For questions, complaints or enquiries regarding these Terms:\n\nDEGSS Limited\n\n4, Adedayo Ogidan Close, Fidiso Estate (By Green Park Estate), Abijo, Ibeju-Lekki, Lagos, Nigeria.\n\n**Email:** info@degsslimited.com\n\n**Phone:** 08038666532\n\n**Website:** www.degsslimited.com",
        "list": ""
      }
    ],
  },
});
