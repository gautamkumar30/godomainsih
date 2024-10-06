import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GoDomain SIH - Pixel Pioneers",
  description:
    "Get hosting details for a given domain name and identify potential malicious websites.",
  openGraph: {
    title: "GoDomain SIH - Pixel Pioneers",
    description:
      "Get hosting details for a given domain name and identify potential malicious websites.",
    url: "https://godomainsih.vercel.app/",
    siteName: "GoDomain SIH - Pixel Pioneers",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
