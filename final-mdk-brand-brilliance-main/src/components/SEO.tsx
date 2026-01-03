import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  name?: string;
  image?: string;
  keywords?: string;
}

export const SEO = ({ 
  title, 
  description, 
  canonical,
  type = 'website',
  name = 'MDK Fast Print',
  image = '/og-image.png',
  keywords
}: SEOProps) => {
  const siteUrl = 'https://mdkfastprint.com/';
  const fullUrl = canonical ? canonical : siteUrl + window.location.pathname;
  const fullImage = image.startsWith('http') ? image : siteUrl + image;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title} | MDK Brand</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "printing services Cape Town, web site,social media management, web development, MDK Brand"} />
      <link rel="canonical" href={fullUrl} />

      {/* Facebook / Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
};