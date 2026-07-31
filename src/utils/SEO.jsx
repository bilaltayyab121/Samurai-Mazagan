import { Helmet } from 'react-helmet-async';
import { restaurantData } from '../data/restaurant';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  structuredData
}) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const fullTitle = title ? `${title} | ${restaurantData.name}` : `${restaurantData.name} | Japanese Hot Pot & Sushi Restaurant`;
  const fullDescription = description || restaurantData.description;
  const fullKeywords = keywords || `${restaurantData.name}, Japanese Restaurant El Jadida, Hot Pot Morocco, Sushi El Jadida, Asian Dining, Rooftop Restaurant`;
  const ogImage = image || 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20Japanese%20restaurant%20exterior%20night%20Samurai%20Mazagan%20El%20Jadida%20premium%20dining&image_size=square_hd';

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurantData.name,
    description: restaurantData.description,
    image: ogImage,
    url: fullUrl,
    telephone: restaurantData.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurantData.address.street,
      addressLocality: 'El Jadida',
      postalCode: '24000',
      addressCountry: 'MA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurantData.address.coordinates.lat,
      longitude: restaurantData.address.coordinates.lng
    },
    priceRange: '$$$',
    servesCuisine: ['Japanese', 'Sushi', 'Hot Pot', 'Asian'],
    rating: {
      '@type': 'Rating',
      ratingValue: restaurantData.rating,
      reviewCount: restaurantData.reviews
    },
    openingHours: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '00:00'
      }
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={restaurantData.name} />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0d0d0d" />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={restaurantData.name} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
