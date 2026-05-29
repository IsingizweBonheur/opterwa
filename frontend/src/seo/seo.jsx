// seo/SEO.js
import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ 
  title, 
  description, 
  image, 
  url, 
  keywords,
  type = "website"
}) {
  // Default values (fallback for all pages)
  const siteTitle = "OPTERWA - Computing Future";
  const siteDescription = "Bridging traditional craftsmanship with modern technology solutions for potters and artisans worldwide.";
  const siteUrl = "https://opterwa.com";
  const siteImage = "https://opterwa.com/og-image.jpg";
  const twitterHandle = "@opterwa";
  
  // Page-specific values (use props if provided, otherwise use defaults)
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const pageDescription = description || siteDescription;
  const pageImage = image || siteImage;
  const pageUrl = url || siteUrl;
  const pageKeywords = keywords || "OPTERWA, technology solutions, pottery craft, IT infrastructure, cybersecurity, cloud computing, networking, software development, CCTV installation, printer repair, computer services, Rwanda tech, digital transformation, artisan technology";
  
  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta name="author" content="OPTERWA" />
      <meta name="publisher" content="OPTERWA" />
      <meta name="keywords" content={pageKeywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={pageUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content="OPTERWA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:site" content={twitterHandle} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="RW" />
      <meta name="geo.placename" content="Kigali" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#1e293b" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "OPTERWA",
          "url": siteUrl,
          "description": siteDescription,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kigali",
            "addressCountry": "RW"
          }
        })}
      </script>
    </Helmet>
  );
}