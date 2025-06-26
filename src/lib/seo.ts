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
      canonical: `${baseUrl}${config.url === "/bs" ? "/bs" : config.url === "/en" || config.url === "" ? "" : config.url || ""}`,
      languages: {
        en: `${baseUrl}${config.url === "/bs" ? "" : config.url?.replace("/en", "").replace("/bs", "") || ""}`,
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
        "Relax Apartments Stolac - Peaceful City Center Stay with Private Parking",
      description:
        "Book Relax Apartments Stolac - 2 modern apartments in city center with private parking, garden terrace. Premium amenities at great value. 5 minutes to Vidoški Fortress. Reserve today!",
      keywords: [
        // Basic keywords
        "apartments stolac",
        "accommodation stolac",
        "stolac bosnia herzegovina",
        "herzegovina apartments",
        "relax apartments stolac",

        // Long-tail keywords
        "peaceful apartments stolac bosnia",
        "affordable apartments stolac city center",
        "stolac accommodation booking online",
        "modern apartments stolac herzegovina",
        "budget friendly stolac accommodation",
        "great value stolac apartments",

        // Lokalni SEO
        "stolac city center apartments",
        "apartments near vidoski fortress",
        "stolac old town accommodation",
        "bregava river apartments",
        "stolac town center lodging",

        // Commercial keywords
        "book stolac apartments online",
        "stolac apartment rental",
        "vacation rental stolac bosnia",
        "stolac accommodation deals",
        "reserve apartments stolac",
        "affordable luxury stolac",

        // Competitor keywords
        "stolac hotels alternative",
        "better than hotels stolac",
        "private apartments stolac",
        "stolac guest house alternative",
      ],
      url: "/",
    },
    bs: {
      title:
        "Relax Apartmani Stolac - Ugodan boravak u centru grada sa privatnim parkingom",
      description:
        "Rezervišite Relax Apartmani Stolac - 2 moderna apartmana u centru grada sa privatnim parkingom i vrtom. Luksuzni sadržaji po pristupačnim cijenama. 5 minuta do Vidoške tvrđave. Rezervišite danas!",
      keywords: [
        // Basic keywords
        "apartmani stolac",
        "smještaj stolac",
        "stolac bosna hercegovina",
        "hercegovina apartmani",
        "relax apartmani stolac",

        // Long-tail keywords
        "ugodni apartmani stolac bosna",
        "pristupačni apartmani stolac centar",
        "stolac smještaj rezervacija online",
        "moderni apartmani stolac hercegovina",
        "povoljni apartmani stolac",
        "dobar odnos cijene i kvaliteta stolac",

        // Lokalni SEO
        "apartmani centar stoca",
        "smještaj blizu vidoške tvrđave",
        "stolac stari grad apartmani",
        "apartmani rijeka bregava",
        "stolac centar grada smještaj",

        // Commercial keywords
        "rezervacija apartmana stolac",
        "stolac apartmani iznajmljivanje",
        "privatni smještaj stolac",
        "stolac smještaj akcije",
        "booking apartmani stolac",
        "pristupačan luksuz stolac",

        // Competitor keywords
        "alternativa hotelima stolac",
        "bolje od hotela stolac",
        "privatni apartmani stolac",
        "pansioni stolac alternativa",
      ],
      url: "/bs",
    },
  },

  gallery: {
    en: {
      title: "Photo Gallery - Relax Apartments Stolac Interior & Views",
      description:
        "View stunning photos of Relax Apartments Stolac - modern interiors, spacious terraces, beautiful garden, and breathtaking fortress views. See why guests love us!",
      keywords: [
        "stolac apartments photos",
        "relax apartments gallery",
        "stolac accommodation images",
        "herzegovina apartments pictures",
        "stolac apartment interiors",
        "modern apartments stolac photos",
        "stolac terrace views photos",
        "apartment garden stolac images",
        "vidoski fortress view apartments",
        "stolac accommodation virtual tour",
        "beautiful apartments stolac gallery",
        "stolac apartment rooms photos",
        "herzegovina accommodation pictures",
        "stolac city view apartments",
        "luxury apartments stolac images",
        "stolac apartment amenities photos",
        "bosnia apartments photo gallery",
        "stolac tourism accommodation photos",
      ],
      url: "/gallery",
      image: "/images/gallery/all/1.webp",
    },
    bs: {
      title: "Fotogalerija - Relax Apartmani Stolac enterijer i pogledi",
      description:
        "Pogledajte prekrasne fotografije Relax Apartmani Stolac - moderni enterijer, prostrane terase, prekrasan vrt i pogled na tvrđavu. Vidite zašto nas gosti vole!",
      keywords: [
        "apartmani stolac fotografije",
        "relax apartmani galerija",
        "smještaj stolac slike",
        "hercegovina apartmani fotografije",
        "stolac apartmani enterijer",
        "moderni apartmani stolac slike",
        "stolac terasa pogled fotografije",
        "apartman vrt stolac slike",
        "vidoška tvrđava pogled apartmani",
        "stolac smještaj virtuelna tura",
        "lijepi apartmani stolac galerija",
        "stolac apartman sobe fotografije",
        "hercegovina smještaj slike",
        "stolac grad pogled apartmani",
        "luksuzni apartmani stolac slike",
        "stolac apartman sadržaji fotografije",
        "bosna apartmani foto galerija",
        "stolac turizam smještaj fotografije",
      ],
      url: "/bs/gallery",
      image: "/images/gallery/all/1.webp",
    },
  },

  amenities: {
    en: {
      title: "Apartment Amenities & Facilities - Relax Apartments Stolac",
      description:
        "Discover premium amenities at Relax Apartments Stolac: free WiFi, AC, private parking, garden terrace, fully equipped kitchen. Everything for perfect stay!",
      keywords: [
        "stolac apartments amenities",
        "relax apartments facilities",
        "stolac accommodation features",
        "herzegovina apartments wifi",
        "stolac apartments parking",
        "stolac apartment kitchen facilities",
        "air conditioning apartments stolac",
        "free wifi stolac accommodation",
        "private parking stolac apartments",
        "garden terrace apartments stolac",
        "fully equipped kitchen stolac",
        "modern amenities stolac apartments",
        "comfort facilities stolac accommodation",
        "luxury amenities herzegovina apartments",
        "stolac apartment bathroom facilities",
        "entertainment facilities stolac apartments",
        "family friendly apartments stolac",
        "business travel stolac apartments",
      ],
      url: "/amenities",
    },
    bs: {
      title: "Sadržaji i oprema apartmana - Relax Apartmani Stolac",
      description:
        "Otkrijte premium sadržaje Relax Apartmani Stolac: besplatan WiFi, klima, privatni parking, terasa sa vrtom, potpuno opremljena kuhinja. Sve za savršen boravak!",
      keywords: [
        "apartmani stolac sadržaji",
        "relax apartmani opremljenost",
        "smještaj stolac karakteristike",
        "hercegovina apartmani wifi",
        "apartmani stolac parking",
        "stolac apartman kuhinja oprema",
        "klima uređaj apartmani stolac",
        "besplatan wifi stolac smještaj",
        "privatni parking stolac apartmani",
        "terasa vrt apartmani stolac",
        "potpuno opremljena kuhinja stolac",
        "moderni sadržaji stolac apartmani",
        "komfor oprema stolac smještaj",
        "luksuzni sadržaji hercegovina apartmani",
        "stolac apartman kupatilo oprema",
        "zabava sadržaji stolac apartmani",
        "porodični apartmani stolac",
        "poslovni put stolac apartmani",
      ],
      url: "/bs/amenities",
    },
  },

  attractions: {
    en: {
      title: "Stolac Attractions & Things to Do - Complete Tourist Guide",
      description:
        "Explore top Stolac attractions from Relax Apartments: Vidoški Fortress, Radimlja Necropolis, Daorson ruins, Badanj Cave, Bregava River. Perfect location for sightseeing!",
      keywords: [
        "stolac attractions",
        "vidoški fortress stolac",
        "radimlja necropolis tour",
        "daorson illyrian city",
        "badanj cave stolac",
        "bregava river activities",
        "stolac tourism guide",
        "herzegovina attractions",
        "things to do stolac bosnia",
        "stolac historical sites",
        "ancient monuments stolac",
        "stolac archaeological sites",
        "bosnia heritage sites stolac",
        "stolac fortress tours",
        "medieval towns bosnia stolac",
        "stolac cultural tourism",
        "day trips from stolac",
        "stolac sightseeing tours",
        "herzegovina cultural sites",
        "stolac adventure tourism",
        "bosnia historical attractions",
      ],
      url: "/attractions",
    },
    bs: {
      title: "Stolačke atrakcije i aktivnosti - Kompletan turistički vodič",
      description:
        "Istražite top stolačke atrakcije iz Relax Apartmani: Vidoška tvrđava, nekropola Radimlja, Daorson ruševine, pećina Badanj, rijeka Bregava. Savršena lokacija za razgledanje!",
      keywords: [
        "stolačke atrakcije",
        "vidoška tvrđava stolac",
        "nekropola radimlja tura",
        "ilirski grad daorson",
        "pećina badanj stolac",
        "rijeka bregava aktivnosti",
        "stolac turizam vodič",
        "hercegovina atrakcije",
        "šta raditi stolac bosna",
        "stolac historijski spomenici",
        "antički spomenici stolac",
        "stolac arheološki lokaliteti",
        "bosna nasleđe stolac",
        "stolac tvrđava ture",
        "srednjovjekovni gradovi bosna stolac",
        "stolac kulturni turizam",
        "izleti iz stoca",
        "stolac razgledanje ture",
        "hercegovina kulturni spomenici",
        "stolac avanturistički turizam",
        "bosna historijske atrakcije",
      ],
      url: "/bs/attractions",
    },
  },

  contact: {
    en: {
      title: "Contact & Booking - Reserve Relax Apartments Stolac Today",
      description:
        "Book Relax Apartments Stolac easily! Located at Lazara Lazarevića 27. Contact us for instant reservations, special offers, and travel information. Best rates guaranteed!",
      keywords: [
        "contact relax apartments stolac",
        "book stolac apartments online",
        "stolac accommodation booking",
        "relax apartments reservation",
        "stolac apartments contact info",
        "reserve apartments stolac bosnia",
        "stolac accommodation phone booking",
        "instant booking stolac apartments",
        "stolac apartment rental contact",
        "best rates stolac apartments",
        "special offers stolac accommodation",
        "group booking stolac apartments",
        "long stay stolac apartments",
        "stolac apartments email booking",
        "direct booking stolac accommodation",
        "stolac travel information contact",
        "apartments stolac customer service",
        "stolac accommodation help desk",
      ],
      url: "/contact",
    },
    bs: {
      title: "Kontakt i rezervacija - Rezervišite Relax Apartmani Stolac danas",
      description:
        "Rezervišite Relax Apartmani Stolac lako! Locirani na Lazara Lazarevića 27. Kontaktirajte nas za instant rezervacije, specijalne ponude i putne informacije. Garantovane najbolje cijene!",
      keywords: [
        "kontakt relax apartmani stolac",
        "rezervacija apartmana stolac online",
        "stolac smještaj rezervacija",
        "relax apartmani booking",
        "stolac apartmani kontakt info",
        "rezervacija apartmana stolac bosna",
        "stolac smještaj telefon rezervacija",
        "instant booking stolac apartmani",
        "stolac apartman iznajmljivanje kontakt",
        "najbolje cijene stolac apartmani",
        "specijalne ponude stolac smještaj",
        "grupna rezervacija stolac apartmani",
        "dugoročni boravak stolac apartmani",
        "stolac apartmani email rezervacija",
        "direktna rezervacija stolac smještaj",
        "stolac putne informacije kontakt",
        "apartmani stolac korisnička podrška",
        "stolac smještaj help desk",
      ],
      url: "/bs/contact",
    },
  },
};
