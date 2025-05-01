// import type { Metadata } from "next";
"use client"
// Import for font customization (commented for now)
// import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Uncomment and configure font settings as needed
// const inter = Inter({
//   weight: ["400"], // Define font weight
//   subsets: ["latin"], // Define font subsets
// });

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
// uncomment this for SEO purposes, since we are using use client we cannot use metadata
// export const metadata: Metadata = {
//   title: {
//     default: "THI Next Training", // Default title that appears on pages without a specific title.
//     template: "%s | THI Next Training", // Dynamically generates page titles for better SEO by appending specific content (e.g., page names) to the brand name.
//     // absolute: "" // Placeholder for absolute titles if needed, ensuring full control over title generation.
//     // The template will not have an effect in absolute. Example of absolute will be on blog.
//   },
//   description: "Next Training THI",
// };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
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
          {/* <p>Header</p> */}
          <div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={isActive ? "rounded-md px-3 py-2 text-sm font-semibold text-white bg-gray-700 hover:bg-gray-700 hover:text-white" 
                    : 
                    "rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-gray-700 hover:text-white" }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </header>

        {children}

        <footer
          style={{
            backgroundColor: "#7ab8cc",
            padding: "1rem",
          }}
        >
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
