import { JSX } from "react/jsx-runtime";
import { Hero } from "@repo/ui/landing/hero";
import { Appbar } from "@repo/ui/appbar";
import { FeaturedSection } from "@repo/ui/landing/featured";
import { LatestSnippets } from "@repo/ui/landing/latest";
import { Footer } from "@repo/ui/components/footer";

export default function Page(): JSX.Element {
  return(
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative">
        <div className="sticky top-0 z-50 bg-zinc-900/70 backdrop-blur-lg border-b border-zinc-800/50">
          <Appbar />
        </div>
        <main className="container mx-auto px-4 py-8">
          <Hero />
          <FeaturedSection />
          <LatestSnippets />
        </main>
        <Footer />
      </div>
    </div>
  )
}