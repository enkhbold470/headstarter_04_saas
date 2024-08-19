import type { Metadata } from "next";
import { Ubuntu, Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const ubuntu = Ubuntu({ weight: ["400"], subsets: ["latin"] });
const roboto = Roboto({ weight: ["300"], subsets: ["latin"] });
import { ThemeProvider } from "@/components/theme-provider";

import FloatingNavbar from "@/components/example/floating-navbar-demo";
export const metadata: Metadata = {
  title: "Zurag",
  description: "Zurag сошиал медиа платформ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <body className={roboto.className}>
          {/* <Navbar />
           */}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FloatingNavbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
