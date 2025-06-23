import Head from "next/head";

interface SearchConsoleVerificationProps {
  googleVerificationCode?: string;
  bingVerificationCode?: string;
  yandexVerificationCode?: string;
}

export default function SearchConsoleVerification({
  googleVerificationCode,
  bingVerificationCode,
  yandexVerificationCode,
}: SearchConsoleVerificationProps) {
  return (
    <Head>
      {googleVerificationCode && (
        <meta
          name="google-site-verification"
          content={googleVerificationCode}
        />
      )}
      {bingVerificationCode && (
        <meta name="msvalidate.01" content={bingVerificationCode} />
      )}
      {yandexVerificationCode && (
        <meta name="yandex-verification" content={yandexVerificationCode} />
      )}
    </Head>
  );
}
