import "./globals.css";

export const metadata = {
  verification: { google: "AwhqQnQP9iHFAp8nahc5wMk9bIC7jN4AK1eK_-mBIVk" },
  metadataBase: new URL("https://www.shivendra.ai"),
  title: {
    default: "Shivendra Pratap Singh | AI Implementation Consultant & Builder",
    template: "%s | Shivendra Pratap Singh"
  },
  description:
    "Shivendra Pratap Singh, Chief People Officer at Ergode and AI practitioner in Mumbai. AI implementation, workplace tools, finance automation and team adoption.",
  keywords: [
    "Shivendra Pratap Singh",
    "Shivendra.ai",
    "Chief People Officer",
    "AI in HR",
    "AI implementation consulting",
    "people leadership",
    "Ergode"
  ],
  authors: [{ name: "Shivendra Pratap Singh" }],
  creator: "Shivendra Pratap Singh",
  openGraph: {
    title: "Shivendra Pratap Singh | AI Implementation Consultant & Builder",
    description:
      "Turn AI opportunities into practical solutions with Shivendra Pratap Singh.",
    url: "https://www.shivendra.ai",
    siteName: "Shivendra.ai",
    images: [
      {
        url: "/images/hero-profile.jpg",
        width: 724,
        height: 1086,
        alt: "Portrait of Shivendra Pratap Singh"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivendra Pratap Singh | AI Implementation Consultant & Builder",
    description:
      "Turn AI opportunities into practical solutions with Shivendra Pratap Singh.",
    images: ["/images/hero-profile.jpg"]
  },
  alternates: {
    canonical: "https://www.shivendra.ai"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
