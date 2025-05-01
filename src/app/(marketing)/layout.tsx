import type { Metadata } from "next";
// Import for font customization (commented for now)
// import { Inter } from "next/font/google";
import "../globals.css";

// Uncomment and configure font settings as needed
// const inter = Inter({
  // weight: ["400"], // Define font weight
//   subsets: ["latin"], // Define font subsets
// });

export const metadata: Metadata = {
  title: "Next Crash Course",
  description: "Next Training THI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Uncomment the className when font customization is enabled
        // className={`${inter.className} antialiased`}
      >
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
