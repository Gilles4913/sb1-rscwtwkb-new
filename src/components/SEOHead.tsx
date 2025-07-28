import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

export default function SEOHead({ title, description, canonical, noindex = false }: SEOHeadProps) {
  const location = useLocation();
  const baseUrl = 'https://www.a2display.fr';
  
  const defaultTitle = 'A2Display | Solutions d\'affichage dynamique et interactif pour collectivités et entreprises';
  const defaultDescription = 'Expert en affichage légal numérique, panneaux LED et bornes interactives. Solutions sur-mesure pour mairies, résidences seniors et entreprises. Support 100% français.';
  
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const canonicalUrl = canonical || `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1745333428/A2Display%20-%20logo%20-%20Affichage%20num%C3%A9rique%20intelligent%20-%20Dynamique%20-%20Interactif.png" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content="https://res.cloudinary.com/dfvwgjdsj/image/upload/v1745333428/A2Display%20-%20logo%20-%20Affichage%20num%C3%A9rique%20intelligent%20-%20Dynamique%20-%20Interactif.png" />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="A2Display" />
      <meta name="geo.region" content="FR" />
      <meta name="geo.placename" content="Beaucouzé" />
      <meta name="geo.position" content="47.478889;-0.630556" />
      <meta name="ICBM" content="47.478889, -0.630556" />
    </Helmet>
  );
}