import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Iruttukadai Halwa",
  description: "Iruttukadai Halwa is a traditional sweet dish from Tamil Nadu, India, known for its rich flavor and unique texture. This website provides information about the history, preparation, and cultural significance of Iruttukadai Halwa.",
  icons: {
    icon: "/fav-icon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
