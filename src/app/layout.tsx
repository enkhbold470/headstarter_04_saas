import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

import FloatingNavbar from "@/components/example/floating-navbar-demo";
const metadata = {
  title: "Zurag",
  description: "Zurag сошиал медиа платформ",
  manifest: "/favicon_io/site.webmanifest",
  generator: "Next.js",

  keywords: ["photosharing", "zurag", "zuragMongolianApp"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Enkhbold Ganbold" },
    {
      name: "Enkhbold Ganbold",
      url: "https://enk.icu",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/favicon_io/apple-touch-icon.png" },
    { rel: "icon", url: "/favicon_io/apple-touch-icon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="description" content={metadata.description} />
          <meta name="generator" content={metadata.generator} />
          <link rel="manifest" href={metadata.manifest} />
          <meta name="keywords" content={metadata.keywords.join(", ")} />
          {metadata.themeColor.map(({ media, color }, index) => (
            <meta
              key={index}
              name="theme-color"
              media={media}
              content={color}
            />
          ))}
          {metadata.authors.map(({ name, url }, index) => (
            <meta
              key={index}
              name="author"
              content={name}
              {...(url && { href: url })}
            />
          ))}
          <meta name="viewport" content={metadata.viewport} />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {metadata.icons.map(({ rel, url }, index) => (
            <link key={index} rel={rel} href={url} />
          ))}
        </head>
        <body className={`${GeistSans.className} font-medium`}>
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
