import { Helmet } from "react-helmet-async";

export default function StructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "OPTERWA",
          "url": "https://opterwa.com",
          
          "logo": "https://opterwa.com/logo.png",

          "description":
            "OPTERWA is an NGO in Rwanda empowering artisans and communities through technology training, IT services, and digital innovation.",

          "foundingDate": "2024",

          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kigali",
            "addressCountry": "RW"
          },

          "areaServed": "Rwanda",

          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "availableLanguage": ["English", "Kinyarwanda"]
          },

          "sameAs": [
            "https://facebook.com/opterwa",
            "https://twitter.com/opterwa"
          ],

          "knowsAbout": [
            "IT Training",
            "Digital Skills",
            "Software Development",
            "Networking",
            "Cybersecurity",
            "Community Development"
          ],

          "potentialAction": [
            {
              "@type": "DonateAction",
              "target": "https://opterwa.com/donate"
            },
            {
              "@type": "ContactAction",
              "target": "https://opterwa.com/contact"
            }
          ]
        })}
      </script>
    </Helmet>
  );
}