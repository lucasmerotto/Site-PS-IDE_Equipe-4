import "./globals.css";
import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import { VT323 } from "next/font/google";


const pixelify = Pixelify_Sans({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-pixelify-sans',
});

const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-vt323',
});

export const metadata: Metadata = {
  title: "Program.Ada - Mulheres da Computação",//Titulo do site na aba do navegador
  description: "Programa universitário que apoia e incentiva a participação de mulheres na área de computação.",//Descrição para acessibilidade auditiva
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${pixelify.variable} ${vt323.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
