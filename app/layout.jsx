import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://shivendra.ai"),
  title: {
    default: "Shivendra Pratap Singh | AI-in-HR Thought Leader",
    template: "%s | Shivendra Pratap Singh"
  },
  description:
    "Chief People Officer, AI-in-HR thought leader, and speaker building high-performance organizations in the age of AI.",
  keywords: [
    "Shivendra Pratap Singh",
    "Shivendra.ai",
    "Chief People Officer",
    "AI in HR",
    "HR technology speaker",
    "people leadership",
    "Ergode"
  ],
  authors: [{ name: "Shivendra Pratap Singh" }],
  creator: "Shivendra Pratap Singh",
  openGraph: {
    title: "Shivendra Pratap Singh | AI-in-HR Thought Leader",
    description:
      "Chief People Officer, speaker, and builder at the intersection of People, Technology, and Leadership.",
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
    title: "Shivendra Pratap Singh | AI-in-HR Thought Leader",
    description:
      "Chief People Officer, speaker, and builder at the intersection of People, Technology, and Leadership.",
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
