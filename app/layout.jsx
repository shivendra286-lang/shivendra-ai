import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://shivendra.ai"),
  title: {
    default: "Shivendra Pratap Singh | AI Implementation Consultant & Builder",
    template: "%s | Shivendra Pratap Singh"
  },
  description:
    "Practical AI consulting for people operations, internal knowledge and business workflows. Explore the approach and discuss your AI use case.",
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
    url: "https://shivendra.ai",
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
    canonical: "https://shivendra.ai"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
