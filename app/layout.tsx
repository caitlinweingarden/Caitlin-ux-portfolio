import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Caitlin Weingarden | UX & Product Design",
  description:
    "Artist turned product designer specializing in accessibility and translation. Creating accessible experiences with a warm, thoughtful approach.",
};

// Explicit viewport — initial-scale must be exactly 1.0
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-page-bg font-sans text-page-text antialiased">
        <ThemeProvider>
          <CustomCursor />
          <Navigation />
          <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-[1440px] flex-1 px-6 md:px-12 lg:px-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
