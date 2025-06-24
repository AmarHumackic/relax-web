import { useTranslations } from "next-intl";

export default function Faq() {
  const tFaq = useTranslations("home.faq");

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto">
        <h3 className="text-primary mb-6 text-center text-2xl font-bold">
          {tFaq("title")}
        </h3>
        <div className="space-y-4">
          {tFaq
            .raw("list")
            .map(
              (
                { question, answer }: { question: string; answer: string },
                i: number,
              ) => (
                <details
                  key={i}
                  className="group cursor-pointer rounded-lg bg-white p-4 shadow"
                >
                  <summary className="group-open:text-primary flex items-center justify-between font-medium text-gray-800">
                    {question}
                    <span className="ml-2 transition-transform group-open:rotate-90">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-2 text-sm text-gray-600">{answer}</div>
                </details>
              ),
            )}
        </div>
      </div>
    </section>
  );
}
