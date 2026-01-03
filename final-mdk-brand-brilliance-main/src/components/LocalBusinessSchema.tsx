import { Helmet } from 'react-helmet-async';

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MDK Brand",
    "image": "https://mdkfastprint.com/og-image.png",
    "description": "Professional printing services and web development solutions in Cape Town. DTF transfers, sublimation, and custom websites.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cape Town",
      "addressRegion": "Western Cape",
      "addressCountry": "ZA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-33.9249", // You might want to update these specific coords
      "longitude": "18.4241"
    },
    "url": "https://mdkfastprint.com",
    "telephone": "+27691623990", // UPDATE THIS WITH REAL NUMBER
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};