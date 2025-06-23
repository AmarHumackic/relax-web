export default function LocalBusinessStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Relax Apartments Stolac",
    description:
      "Relax Apartments offers two comfortable and modern apartments with a spacious terrace, private parking, and a rose-filled garden. Ideally located in the city center of Stolac, perfect for exploring Herzegovina.",
    url: "https://relaxstolac.com/en",
    telephone: "+387-XX-XXX-XXX",
    email: "info@relaxstolac.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lazara Lazarevića 27",
      addressLocality: "Stolac",
      addressRegion: "Herzegovina-Neretva Canton",
      addressCountry: "BA",
      postalCode: "88360",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "43.082923",
      longitude: "17.961159",
    },
    openingHours: "Mo-Su 08:00-22:00",
    priceRange: "$$",
    currenciesAccepted: "EUR, BAM",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    image: [
      "https://relaxstolac.com/images/gallery/all/1.webp",
      "https://relaxstolac.com/images/gallery/all/2.webp",
      "https://relaxstolac.com/images/gallery/all/3.webp",
    ],
    sameAs: [
      "https://www.facebook.com/relaxstolac",
      "https://www.instagram.com/relaxstolac",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "9.8",
      reviewCount: "178",
      bestRating: "10",
      worstRating: "8",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Deborah",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "10",
          bestRating: "10",
        },
        reviewBody:
          "Liked everything, hosts were amazing, beds comfortable and great location. If you are looking to book a place in Stolac, make it here :)",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Dainoras",
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "10",
          bestRating: "10",
        },
        reviewBody:
          "The hosts are super kind and the location is not too far from Mostar, the rooms are perfect, highly recommend, especially if you are with a larger group",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Stolac",
    },
    serviceArea: {
      "@type": "City",
      name: "Stolac",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Apartment Rentals",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ground Level Apartment",
            description:
              "2 bedrooms, 1 living room, 1 bathroom, 6 beds, flower garden",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Upper Level Apartment",
            description:
              "3 bedrooms, 1 living room, 1 bathroom, 7 beds, spacious terrace",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
