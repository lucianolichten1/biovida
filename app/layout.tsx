import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioVida - Energía Solar en Bolivia",
  description: "Diseñamos, instalamos y mantenemos sistemas fotovoltaicos de alto rendimiento en Bolivia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
        {children}
      </body>
    </html>
  );
}

