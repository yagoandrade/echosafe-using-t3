import "@/styles/globals.css";

import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

import { TRPCReactProvider } from "@/trpc/react";
import Providers from "./_components/providers";
import { ActiveInstitutionStoreProvider } from "@/providers/activeInstitutionStoreProvider";

const soehne = localFont({
  src: "../../public/assets/fonts/soehne/soehne-var.woff2",
  display: "swap",
  variable: "--font-soehne",
});

export const metadata = {
  title: "EchoSafe-T3",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          EchoSafe - Combate ao Bullying Escolar | Plataforma Segura para
          Denúncias e Análises
        </title>
        <meta
          name="title"
          content="EchoSafe - Combate ao Bullying Escolar | Plataforma Segura para Denúncias e Análises"
        />
        <meta
          name="description"
          content="O EchoSafe é uma solução inovadora para combater o bullying escolar, oferecendo uma plataforma segura para denúncias e análises detalhadas. Garantimos privacidade, facilitamos a identificação do bullying, fornecemos análises abrangentes e criamos um ambiente escolar mais seguro e inclusivo. Conheça nossas funcionalidades e marcos."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://echosafe.org/" />
        <meta
          property="og:title"
          content="EchoSafe - Combate ao Bullying Escolar | Plataforma Segura para Denúncias e Análises"
        />
        <meta
          property="og:description"
          content="O EchoSafe é uma solução inovadora para combater o bullying escolar, oferecendo uma plataforma segura para denúncias e análises detalhadas. Garantimos privacidade, facilitamos a identificação do bullying, fornecemos análises abrangentes e criamos um ambiente escolar mais seguro e inclusivo. Conheça nossas funcionalidades e marcos."
        />
        <meta property="og:image" content="/assets/background-echosafe.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://echosafe.org/" />
        <meta
          property="twitter:title"
          content="EchoSafe - Combate ao Bullying Escolar | Plataforma Segura para Denúncias e Análises"
        />
        <meta
          property="twitter:description"
          content="O EchoSafe é uma solução inovadora para combater o bullying escolar, oferecendo uma plataforma segura para denúncias e análises detalhadas. Garantimos privacidade, facilitamos a identificação do bullying, fornecemos análises abrangentes e criamos um ambiente escolar mais seguro e inclusivo. Conheça nossas funcionalidades e marcos."
        />
        <meta
          property="twitter:image"
          content="/assets/background-echosafe.png"
        />
        <meta
          name="keywords"
          content="EchoSafe, bullying escolar, denúncias, análises, segurança escolar, ambiente inclusivo, privacidade do aluno, ferramentas anti-bullying, dados de bullying, relatórios escolares"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/icons/site.webmanifest" />
        <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#9f00a7" />
        <meta
          name="msapplication-config"
          content="/assets/icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`light:bg-white dark:bg-gradient-to-b dark:from-[#2a2b3a] dark:to-[#191a23] ${soehne.className}`}
      >
        <TRPCReactProvider>
          <ActiveInstitutionStoreProvider>
            <Providers>
              <Toaster />
              {children}
            </Providers>
          </ActiveInstitutionStoreProvider>
        </TRPCReactProvider>
        <Analytics />
      </body>
    </html>
  );
}
