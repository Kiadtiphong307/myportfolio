import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Kiadtiphong",
  description: "Portfolio of Kiadtiphong Wongmui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
          {children}
        </div>
      </body>
    </html>
  );
}
