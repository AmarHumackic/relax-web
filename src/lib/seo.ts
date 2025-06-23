import { Metadata } from "next";

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export function generateMetadata(
  config: SEOConfig,
  locale: string = "en",
): Metadata {
  const baseUrl = "https://relaxstolac.com";
  const defaultImage = "/images/gallery/all/1.webp";

  const metadata: Metadata = {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical: `${baseUrl}${config.url || ""}`,
      languages: {
        en: `${baseUrl}/en${config.url?.replace("/en", "").replace("/bs", "") || ""}`,
        bs: `${baseUrl}/bs${config.url?.replace("/en", "").replace("/bs", "") || ""}`,
      },
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: `${baseUrl}${config.url || ""}`,
      siteName: "Relax Apartments Stolac",
      images: [
        {
          url: config.image || defaultImage,
          width: 1200,
          height: 630,
          alt: config.title,
        },
      ],
      locale,
      type: config.type || "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [config.image || defaultImage],
    },
  };

  return metadata;
}

// Predefined metadata for different pages
export const pageMetadata = {
  home: {
    en: {
      title:
        "Relax Apartments Stolac - Comfortable Stay in Bosnia and Herzegovina",
      description:
        "Relax Apartments offers two comfortable and modern apartments with a spacious terrace, private parking, and a rose-filled garden. Ideally located in the city center of Stolac, perfect for exploring Herzegovina.",
      keywords: [
        "apartments stolac",
        "accommodation stolac",
        "stolac bosnia herzegovina",
        "herzegovina apartments",
        "stolac accommodation",
        "relax apartments",
        "stolac tourism",
        "bosnia herzegovina travel",
      ],
      url: "/en",
    },
    bs: {
      title: "Relax Apartmani Stolac - Udoban boravak u Bosni i Hercegovini",
      description:
        "Relax Apartmani nude dva udobna i moderna apartmana sa prostranom terasom, privatnim parkingom i vrtom punim ruža. Idealno locirani u centru grada Stoca, pravi su izbor za istraživanje Hercegovine.",
      keywords: [
        "apartmani stolac",
        "smještaj stolac",
        "stolac bosna hercegovina",
        "hercegovina apartmani",
        "stolac smještaj",
        "relax apartmani",
        "stolac turizam",
        "bosna hercegovina putovanja",
      ],
      url: "/bs",
    },
  },
  gallery: {
    en: {
      title: "Photo Gallery - Relax Apartments Stolac",
      description:
        "Explore our photo gallery showcasing the beautiful Relax Apartments in Stolac. See our comfortable rooms, spacious terrace, garden, and stunning views of the Old Town fortress.",
      keywords: [
        "stolac apartments photos",
        "relax apartments gallery",
        "stolac accommodation images",
        "herzegovina apartments pictures",
        "stolac tourism photos",
      ],
      url: "/en/gallery",
      image: "/images/gallery/all/1.webp",
    },
    bs: {
      title: "Fotogalerija - Relax Apartmani Stolac",
      description:
        "Istražite našu fotogaleriju koja prikazuje prelijepi Relax Apartmani u Stocu. Pogledajte naše udobne sobe, prostranu terasu, vrt i prekrasne poglede na starogradsku tvrđavu.",
      keywords: [
        "apartmani stolac fotografije",
        "relax apartmani galerija",
        "smještaj stolac slike",
        "hercegovina apartmani slike",
        "stolac turizam fotografije",
      ],
      url: "/bs/gallery",
      image: "/images/gallery/all/1.webp",
    },
  },
  amenities: {
    en: {
      title: "Apartments Amenities - Relax Apartments Stolac",
      description:
        "Discover all the amenities available at Relax Apartments Stolac including WiFi, air conditioning, private parking, garden, terrace, and fully equipped kitchens.",
      keywords: [
        "stolac apartments amenities",
        "relax apartments facilities",
        "stolac accommodation features",
        "herzegovina apartments wifi",
        "stolac apartments parking",
      ],
      url: "/en/amenities",
    },
    bs: {
      title: "Sadržaji apartmana - Relax Apartmani Stolac",
      description:
        "Otkrijte sve sadržaje dostupne u Relax Apartmanima Stolac uključujući WiFi, klima uređaj, privatni parking, vrt, terasu i potpuno opremljene kuhinje.",
      keywords: [
        "apartmani stolac sadržaji",
        "relax apartmani opremljenost",
        "smještaj stolac karakteristike",
        "hercegovina apartmani wifi",
        "apartmani stolac parking",
      ],
      url: "/bs/amenities",
    },
  },
  attractions: {
    en: {
      title: "Stolac Attractions - Things to See and Do - Relax Apartments",
      description:
        "Explore the rich history and natural beauty of Stolac. Visit Vidoški Fortress, Radimlja Necropolis, Daorson Illyrian City, Badanj Cave, and the beautiful Bregava River.",
      keywords: [
        "stolac attractions",
        "vidoški fortress",
        "radimlja necropolis",
        "daorson illyrian city",
        "badanj cave",
        "bregava river",
        "stolac tourism",
        "herzegovina attractions",
      ],
      url: "/en/attractions",
    },
    bs: {
      title: "Stolačke atrakcije - Šta vidjeti i raditi - Relax Apartmani",
      description:
        "Istražite bogatu historiju i prirodnu ljepotu Stoca. Posjetite Vidošku tvrđavu, nekropolu Radimlja, ilirski grad Daorson, pećinu Badanj i prekrasnu rijeku Bregavu.",
      keywords: [
        "stolačke atrakcije",
        "vidoška tvrđava",
        "nekropola radimlja",
        "ilirski grad daorson",
        "pećina badanj",
        "rijeka bregava",
        "stolac turizam",
        "hercegovina atrakcije",
      ],
      url: "/bs/attractions",
    },
  },
  contact: {
    en: {
      title: "Contact Us - Book Your Stay at Relax Apartments Stolac",
      description:
        "Contact Relax Apartments Stolac to book your comfortable stay. Located at Lazara Lazarevića 27, Stolac. Get in touch for reservations and information about our apartments.",
      keywords: [
        "contact relax apartments",
        "book stolac apartments",
        "stolac accommodation booking",
        "relax apartments contact",
        "stolac apartments reservation",
      ],
      url: "/en/contact",
    },
    bs: {
      title:
        "Kontaktirajte nas - Rezervišite svoj boravak u Relax Apartmanima Stolac",
      description:
        "Kontaktirajte Relax Apartmani Stolac da rezervišete svoj udoban boravak. Locirani na adresi Lazara Lazarevića 27, Stolac. Javite nam se za rezervacije i informacije o našim apartmanima.",
      keywords: [
        "kontakt relax apartmani",
        "rezervacija apartmana stolac",
        "smještaj stolac rezervacija",
        "relax apartmani kontakt",
        "apartmani stolac rezervacija",
      ],
      url: "/bs/contact",
    },
  },
};
