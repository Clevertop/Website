import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Tom's Website",
  description: "meow meow meow meow~ nya! nya! nya!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
        {/* <main className="min-h-screen flex flex-col"> */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
