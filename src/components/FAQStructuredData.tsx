import { useTranslations } from "next-intl";

export default function FAQStructuredData() {
  const tFaq = useTranslations("home.faq");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tFaq.raw("list").map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
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
