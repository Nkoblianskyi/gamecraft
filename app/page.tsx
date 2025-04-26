import Hero from "@/components/hero"
import FeaturedGames from "@/components/featured-games"
import BlogSection from "@/components/blog-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GameCraftUK - Discover Traditional Wooden Games",
  description:
    "Explore the world of traditional wooden games with GameCraftUK. Handcrafted Pliko boards and historical games for all ages.",
  openGraph: {
    title: "GameCraftUK - Discover Traditional Wooden Games",
    description:
      "Explore the world of traditional wooden games with GameCraftUK. Handcrafted Pliko boards and historical games for all ages.",
    url: "https://gamecraftuk.com",
    siteName: "GameCraftUK",
    locale: "en_GB",
    type: "website",
  },
}

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <FeaturedGames />
      <BlogSection />
      <ContactSection />
    </div>
  )
}
